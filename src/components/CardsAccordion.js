import React from 'react';
import '../styles/CardsAccordion.css';
import OutlineShirtSvg from "../assets/OutlineShirtSvg";
import ShirtSvg from "../assets/ShirtSvg";
import {formatDate, getTeamName} from "../pages/EntryFormPage";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {successNotification} from "../App";
import {deleteScore} from "../service/ScoreService";
import {getTeamColor} from "./TeamSelect";

const CardsAccordion = ({data, selectedScore, toggleExpand, refetch, handleScoreSelect}) => {

    const score = data;

    return (
        <div className="cards-container">
            <ul
                className={`scores-card ${selectedScore === score.score_id ? 'open' : ''}`}>
                <div className="score-teams">
                            <span className="card-teams-header">{score.team_a.includes("white") ?
                                <OutlineShirtSvg height={40}/> :
                                <ShirtSvg fill={getTeamColor(score.team_a)} width={40}/>}
                                <span className="score">
                                <p style={{fontWeight: score.score_a > score.score_b ? 900 : 500}}>{score.score_a}</p>
                                <p>-</p>
                                <p style={{fontWeight: score.score_b > score.score_a ? 900 : 500}}>{score.score_b}</p>
                            </span>
                                {score.team_b.includes("white") ? <OutlineShirtSvg height={40}/> :
                                    <ShirtSvg fill={getTeamColor(score.team_b)} width={40}/>}</span>
                    <FontAwesomeIcon id={selectedScore === score.score_id ? "plus" : "x-mark"}
                                     icon={faPlus}
                                     onClick={() => toggleExpand(score.score_id)}/>
                </div>
                <div className="content">
                    <div className="score-details">
                        <h5>{score.entered_time}</h5>
                        <h5>{formatDate(score.entered_date)}</h5>
                        <h5>{score.entered_by}</h5>
                        <h5>{score.field}</h5>
                    </div>
                    <div className="options">
                        <button id="delete-button" onClick={async () => {
                            deleteScore(score.score_id).then(_ => {
                                successNotification("Score deleted successfully!")
                                refetch()
                            })
                        }}>Delete
                        </button>
                        <button id="edit-button" onClick={() => handleScoreSelect(score.score_id)}>Edit</button>
                    </div>
                </div>

            </ul>
        </div>
    );
};

export default CardsAccordion;
