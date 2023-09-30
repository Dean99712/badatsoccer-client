import './App.css';
import "@fortawesome/fontawesome-free"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import {useMutation, useQuery} from "react-query";
import {addScore, deleteScore, getScoresByDate, getScoresDates} from "./service/ApiService";
import FieldSelect from "./components/FieldSelect";
import OutlineShirtSvg from "./components/OutlineShirtSvg";
import ShirtSvg from "./components/ShirtSvg";

function App() {

    const time = new Date()
    const date = `${time.getDate()}/0${time.getUTCMonth() + 1}/${time.getFullYear()}`

    const currentHour = `${time.getHours() < 10 ? `0${time.getHours()}` : `${time.getHours()}`}`;

    const currentTime = `${currentHour}:${time.getMinutes()}`

    const [scores, setScores] = useState(null)
    const [teams, setTeams] = useState([])
    const [teamA, setTeamA] = useState('')
    const [teamB, setTeamB] = useState('')

    const [selectedDate, setSelectedDate] = useState(date)

    const [selectedField, setSelectedField] = useState("")

    const {data: dates} = useQuery({
        queryFn: getScoresDates,
        queryKey: ["dates"]
    })

    const {mutate} = useMutation({
        mutationFn: addScore,
    })

    const {data} = useQuery({
        queryFn: () => getScoresByDate(selectedDate), queryKey: ["scores", {selectedDate}],
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
            "entered_date": date,
            "entered_time": currentTime,
            "field": selectedField
        })
        resetScoreForm();
    }

    const [teamAScore, setTeamAScore] = useState(0);
    const [teamBScore, setTeamBScore] = useState(0);

    const resetScoreForm = () => {
        setTeamAScore(0)
        setTeamBScore(0)
        setTeams([])
        setTeamA('')
        setTeamB('')
        setSelectedField('')
    }

    const extractTeamName = (team) => {
        let teamValue = team.substring(team.indexOf("Team"))
        if (team.includes("BlueMetal")) {
            return team.replace("BlueMetal", "steelblue").replace(teamValue, '')
        }
        return team.replace(teamValue, '')
    }

    return <div>
        <span id="games-date">
            <label>Select games date</label>
            <select className="selection" onChange={(e) => setSelectedDate(e.target.value)}>
                    <option value="" selected disabled>Select date</option>
                {dates && dates?.map(date => (
                    <option value={date.entered_date}>{date.entered_date}</option>
                ))}
            </select>
        </span>
        
        <div className="container">
            <FieldSelect
                selectedField={selectedField}
                setSelectedField={setSelectedField}
                teams={teams}
                teamA={teamA}
                setTeamA={setTeamA}
                teamB={teamB}
                setTeamB={setTeamB}
                setTeams={setTeams}/>

            {(teamA || teamB) && <div className="teams-section">
                <div className="teams">
            <span className="team">
                {teamA.includes("White") ? <OutlineShirtSvg height={43}/> :
                    <ShirtSvg fill={extractTeamName(teamA)} width={45}/>}
                <h4>{teamA}</h4>
            </span>
                    <span><h5>vs</h5></span>
                    <span className="team">
                    {teamB.includes("White") ? <OutlineShirtSvg height={43}/> :
                        <ShirtSvg fill={extractTeamName(teamB)} width={45}/>}
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
                    <button id="clear" onClick={() => resetScoreForm()} className="save-clear-button">Clear</button>
                    <button id="save" onClick={() => addScoreToDatabase()} className="save-clear-button">Save
                    </button>
                </div>
            </div>}

            <h4 style={{textAlign: "center", marginBottom: '20px'}}>Recent scores</h4>
            {scores && scores?.map(score => (<div className="scores-table" key={score.score_id}>
                <div className="table">
                    {score.team_a.includes("White") ? <OutlineShirtSvg height={23}/> :
                        <ShirtSvg fill={extractTeamName(score.team_a)} width={25}/>}

                    <span className="score">
                    <p style={{fontWeight: score.score_a > score.score_b ? 900 : 500}}>{score.score_a}</p>
                    <p>-</p>
                    <p style={{fontWeight: score.score_b > score.score_a ? 900 : 500}}>{score.score_b}</p>
                </span>
                    {score.team_b.includes("White") ? <OutlineShirtSvg height={23}/> :
                        <ShirtSvg fill={extractTeamName(score.team_b)} width={25}/>}
                </div>
                <span className="date">
                <h5>{score.entered_time}</h5>
                <h5>{score.entered_date}</h5>
                    <h5>{score.entered_by}</h5>
                    </span>
                <div className="options">
                    <button id="delete-button" onClick={() => deleteScore(score.score_id)}>Delete</button>
                    <button id="edit-button">Edit</button>
                </div>
            </div>))}
        </div>
    </div>;
}

export default App;

