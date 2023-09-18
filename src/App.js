import './App.css';
import "@fortawesome/fontawesome-free"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus, faShirt} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

function App() {

    const [teamAScore, setTeamAScore] = useState(0);
    const [teamBScore, setTeamBScore] = useState(0);


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
                    <button id="minus-button_team-one" onClick={() => setTeamAScore(teamAScore - 1)}>
                        <FontAwesomeIcon icon={faMinus}/>
                    </button>
                    <p id="score-one">{teamAScore}</p>
                    <button id="plus-button_team-one" onClick={() => setTeamAScore(teamAScore + 1)}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                    <h6>Goals</h6>
                    <button id="minus-button_team-two" onClick={() => setTeamBScore(teamBScore - 1)}>
                        <FontAwesomeIcon icon={faMinus}/>
                    </button>
                    <p id="score-two">{teamBScore}</p>
                    <button id="plus-button_team-two" onClick={() => setTeamBScore(teamBScore + 1)}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>

                <div className="save-clear-section">
                    <button id="clear" className="save-clear-button">Clear</button>
                    <button id="save" className="save-clear-button">Save</button>
                </div>
            </div>

            <div className="scores-table">
                <FontAwesomeIcon icon={faShirt}/>
                <span className="score">
                    <p>{teamAScore}</p>
                    <p>-</p>
                    <p>{teamBScore}</p>
                </span>
                <FontAwesomeIcon icon={faShirt}/>
            </div>
        </div>

    );
}

export default App;

