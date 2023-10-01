import React from 'react';
import OutlineShirtSvg from "./OutlineShirtSvg";
import ShirtSvg from "./ShirtSvg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import {extractTeamName} from "../App";
import '../styles/TeamScoreBoard.css'

const TeamScoresBoard = ({teamA, teamB, teamAScore, teamBScore,setTeamAScore, setTeamBScore, resetFn, submitFn}) => {
    return (
        (teamA || teamB) && <div className="teams-section">
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
                <button className="scores-button" id="minus-button_team-one" disabled={teamAScore <= 0}
                        onClick={() => setTeamAScore(teamAScore - 1)}>
                    <FontAwesomeIcon icon={faMinus}/>
                </button>
                <p className="team-score" id="score-one">{teamAScore}</p>
                <button className="scores-button" id="plus-button_team-one" disabled={teamAScore >= 5}
                        onClick={() => setTeamAScore(teamAScore + 1)}>
                    <FontAwesomeIcon icon={faPlus}/>
                </button>
                <h6>Goals</h6>
                <button className="scores-button" id="minus-button_team-two" disabled={teamBScore <= 0}
                        onClick={() => setTeamBScore(teamBScore - 1)}>
                    <FontAwesomeIcon icon={faMinus}/>
                </button>
                <p className="team-score" id="score-two">{teamBScore}</p>
                <button className="scores-button" id="plus-button_team-two" disabled={teamBScore >= 5}
                        onClick={() => setTeamBScore(teamBScore + 1)}>
                    <FontAwesomeIcon icon={faPlus}/>
                </button>
            </div>
            <div className="save-clear-section">
                <button id="clear" onClick={() => resetFn()} className="save-clear-button">Clear</button>
                <button id="save" onClick={() => submitFn()} className="save-clear-button">Save
                </button>
            </div>
        </div>
    );
};

export default TeamScoresBoard;
