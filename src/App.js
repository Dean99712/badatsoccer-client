import './App.css';
import "@fortawesome/fontawesome-free"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus, faShirt} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import {useMutation, useQuery} from "react-query";
import {addScore, getScores} from "./service/ApiService";
import FieldSelect from "./components/FieldSelect";

function App() {

    const time = new Date().toLocaleString()
    const date = time.slice(0, 9)

    const [scores, setScores] = useState([])
    const [teams, setTeams] = useState([])
    const [teamA, setTeamA] = useState('')
    const [teamB, setTeamB] = useState('')

    const [selectedField, setSelectedField] = useState("מגרש 1")

    const {mutate} = useMutation({
        mutationFn: addScore
    })

    const {data} = useQuery({
        queryFn: getScores, queryKey: ["scores"]
    })

    useEffect(() => {
        setScores(data)
    }, [data]);

    const addScoreToDatabase = () => {
        mutate({
            "team_a": teamA,
            "score_a": teamAScore,
            "team_b": teamB,
            "score_b": teamBScore,
            "entered_by": "Admin",
            "entered_time": date,
            "field": selectedField
        })
    }

    const [teamAScore, setTeamAScore] = useState(0);
    const [teamBScore, setTeamBScore] = useState(0);

    const resetScores = () => {
        setTeamAScore(0)
        setTeamBScore(0)
    }

    const extractTeamName = (team) => {
        let teamValue = team.substring(team.indexOf("Team"))
        if (team.includes("BlueMetal")) {
            return team.replace("BlueMetal", "steelblue").replace(teamValue, '')
        }
        return team.replace(teamValue, '')
    }

    return (<div className="container">
        <FieldSelect
            selectedField={selectedField}
            setSelectedField={setSelectedField}
            teams={teams}
            setTeamA={setTeamA}
            setTeamB={setTeamB}
            setTeams={setTeams}/>

        {(teamA || teamB) && <div className="teams-section">
            <div className="teams">
            <span className="team">
                <FontAwesomeIcon icon={faShirt} color={extractTeamName(teamA)}/>
                <h4>{teamA}</h4>
            </span>
                <span><h5>vs</h5></span>
                <span className="team">
                        <FontAwesomeIcon icon={faShirt} color={extractTeamName(teamB)}/>
                        <h4>{teamB}</h4>
            </span>
            </div>
            <div className="scores">
                <button id="minus-button_team-one" disabled={teamAScore <= 0}
                        onClick={() => setTeamAScore(teamAScore - 1)}>
                    <FontAwesomeIcon icon={faMinus}/>
                </button>
                <p id="score-one">{teamAScore}</p>
                <button id="plus-button_team-one" disabled={teamAScore >= 5}
                        onClick={() => setTeamAScore(teamAScore + 1)}>
                    <FontAwesomeIcon icon={faPlus}/>
                </button>
                <h6>Goals</h6>
                <button id="minus-button_team-two" disabled={teamBScore <= 0}
                        onClick={() => setTeamBScore(teamBScore - 1)}>
                    <FontAwesomeIcon icon={faMinus}/>
                </button>
                <p id="score-two">{teamBScore}</p>
                <button id="plus-button_team-two" disabled={teamBScore >= 5}
                        onClick={() => setTeamBScore(teamBScore + 1)}>
                    <FontAwesomeIcon icon={faPlus}/>
                </button>
            </div>

            <div className="save-clear-section">
                <button id="clear" onClick={() => resetScores()} className="save-clear-button">Clear</button>
                <button id="save" onClick={() => addScoreToDatabase()} className="save-clear-button">Save
                </button>
            </div>
        </div>}

        {scores && scores?.map(score => (<div className="scores-table" key={score.score_id}>
            <div className="table"><FontAwesomeIcon icon={faShirt} color={extractTeamName(score.team_a)}/>
                <span className="score">
                    <p>{score.score_a}</p>
                    <p>-</p>
                    <p>{score.score_b}</p>
                </span>
                <FontAwesomeIcon icon={faShirt} color={extractTeamName(score.team_b)}/></div>
            <span className="date"><h5>{score.entered_time}</h5>
                    <h5>{score.entered_by}</h5>
                    </span>

        </div>))}
    </div>);
}

export default App;

