import React, {useEffect, useState} from 'react';
import OutlineShirtSvg from "../assets/OutlineShirtSvg";
import ShirtSvg from "../assets/ShirtSvg";
import {deleteScore, getScoreByFieldName} from "../service/ApiService";
import {useQuery} from "react-query";
import {formatDate, getTeamName} from "../pages/EntryFormPage";
import EditScoreModal from "./EditScoreModal";
import '../styles/Scores.css'
import {successNotification} from "../App";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import {Spinner} from "react-bootstrap";

const Scores = ({selectedDate, isOpen, setIsOpen, selectedField}) => {


    const [scores, setScores] = useState(null);
    const [selectedScore, setSelectedScore] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleScoreSelect = (score) => {
        setSelectedScore(score)
        setIsOpen(true)
    }
    const toggleExpand = (id) => {
        if (selectedScore === id) {
            return setSelectedScore(null);
        }
        setSelectedScore(id);
    }

    // const {data, refetch} = useQuery({
    //     queryFn: () => getScoresByDate(selectedDate),
    //     queryKey: ["scores", {selectedDate}],
    //     onSuccess: setScores
    // })

    const {data, refetch} = useQuery({
        queryFn: () => getScoreByFieldName({selectedField, selectedDate}),
        queryKey: ["score", selectedField],
        onSuccess: setScores
    })

    useEffect(() => {
        setIsLoading(true);
        refetch().then(_ => setIsLoading(false));
    }, [data, scores, refetch]);

    return (
        isLoading ?
            <span id="spinner"><Spinner style={{
                textAlign: "center"
            }}/>
            </span>
            :
            <>
                {(selectedScore && isOpen) && <EditScoreModal
                    refetch={refetch}
                    selectedScore={selectedScore}
                    show={isOpen}
                    onHide={() => setIsOpen(false)}/>}

                {(scores && scores.length > 0) &&
                    <h4 style={{textAlign: "center", fontSize: "20px", margin: '1.5em'}}>Recent scores</h4>}
                {(scores && scores.length > 0 && scores.length !== 0) ? scores?.map((score) => (
                    <div className={`scores-table ${selectedScore === score.score_id ? 'open' : ''}`}
                         key={score.score_id}>
                        <div className="table">
                    <span className="first-row">{score.team_a.includes("White") ? <OutlineShirtSvg height={30}/> :
                        <ShirtSvg fill={getTeamName(score.team_a)} width={32}/>}
                        <span className="score">
                        <p style={{fontWeight: score.score_a > score.score_b ? 900 : 500}}>{score.score_a}</p>
                        <p>-</p>
                        <p style={{fontWeight: score.score_b > score.score_a ? 900 : 500}}>{score.score_b}</p>
                    </span>
                        {score.team_b.includes("White") ? <OutlineShirtSvg height={30}/> :
                            <ShirtSvg fill={getTeamName(score.team_b)} width={32}/>}</span>
                            <FontAwesomeIcon id="arrow"
                                             icon={selectedScore === score.score_id ? faChevronUp : faChevronDown}
                                             onClick={() => toggleExpand(score.score_id)}/>
                        </div>

                        {<><span className="date">
                <h5>{score.entered_time}</h5>
                <h5>{formatDate(score.entered_date)}</h5>
                    <h5>{score.entered_by}</h5>
                    </span>
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
                        </>}
                    </div>)) : <div className="message">
                    <h5>No games played today...</h5>
                </div>}
            </>
    );
};

export default Scores;
