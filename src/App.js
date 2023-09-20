import './App.css';
import "@fortawesome/fontawesome-free"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus, faShirt} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import axios from "./api/axios";
import {useMutation} from "react-query";
import {addScore} from "./service/ApiService";

function App() {

    const time = new Date().toLocaleString()
    const date = time.slice(0, 9)
    const hour = time.slice(10, 16)


    const getDataFromDatabase = async () => {
        return await axios.get("/get", {}).then(res => console.log(res.data))
    }

    const {mutate} = useMutation({
        mutationFn: addScore
    })

    const addScoreToDatabase = () => {
        mutate({
            "team_a": "Black",
            "score_a": teamAScore,
            "team_b": "White",
            "score_b": teamBScore,
            "entered_by": "Dean",
            "entered_time": date,
            "field": "מגרש 1"
        })
    }

    const [teamAScore, setTeamAScore] = useState(0);
    const [teamBScore, setTeamBScore] = useState(0);
    const [isTie, setIsTie] = useState(false);

    useEffect(() => {
        if (teamAScore === 5 && teamBScore === 5) {
            setIsTie(true)
        } else {
            setIsTie(false)
        }
    }, [teamAScore, teamBScore]);

    const resetScores = () => {
        setTeamAScore(0)
        setTeamBScore(0)
    }

    return (
        <div className="container">
            <div className="select-section">
                <label htmlFor="fields">Choose a field:</label>

                <select name="fields" id="fields" className="selection">
                    <option value="volvo">Field 1</option>
                    <option value="saab">Field 2</option>
                    <option value="mercedes">Field 3</option>
                </select>

                <label htmlFor="teams">Choose Team one:</label>

                <select name="teams" id="teams" className="selection">
                    <option value="volvo">Team 1</option>
                    <option value="saab">Team 2</option>
                    <option value="mercedes">Team 3</option>
                </select>

                <label htmlFor="teams">Choose Team two:</label>

                <select name="teams" id="teams" className="selection">
                    <option value="volvo">Team 1</option>
                    <option value="saab">Team 2</option>
                    <option value="mercedes">Team 3</option>
                </select>
            </div>

            <div className="teams-section">
                <div className="teams">
            <span className="team">
                <FontAwesomeIcon icon={faShirt}/>
                <h4>Team 1</h4>
            </span>
                    <span><h5>vs</h5></span>
                    <span className="team">
                        <FontAwesomeIcon icon={faShirt} id="team-two_shirt" color="red"/>
                        <h4>Team 2</h4>
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
            </div>

            <div className="scores-table">
                <div className="table"><FontAwesomeIcon icon={faShirt}/>
                    <span className="score">
                    <p>{teamAScore}</p>
                    <p>-</p>
                    <p>{teamBScore}</p>
                </span>
                    <FontAwesomeIcon icon={faShirt} color="red"/></div>
                <span className="date"><h5>{date}</h5>
                    <h5>{hour}</h5></span>

                {isTie && <div>
                    <input type="checkbox" id="isTie" name="interest" value="isTie"/>
                    <label htmlFor="isTie">is Tie?</label>
                </div>}

            </div>

            <button onClick={() => getDataFromDatabase()}>Click Here</button>
        </div>
    );
}

export default App;

