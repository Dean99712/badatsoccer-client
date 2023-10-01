import React, {useEffect, useState} from 'react';
import OutlineShirtSvg from "./OutlineShirtSvg";
import ShirtSvg from "./ShirtSvg";
import {deleteScore, getScoresByDate} from "../service/ApiService";
import {useQuery} from "react-query";
import {extractTeamName} from "./EntryFormPage";
import MyModal from "./MyModal";
import '../styles/Scores.css'
import {notification} from "../App";

const Scores = ({selectedDate, isOpen, setIsOpen}) => {


    const [scores, setScores] = useState(null);
    const [selectedScore, setSelectedScore] = useState(null)

    const handleScoreSelect = (score) => {
        setSelectedScore(score)
        setIsOpen(true)
    }

    const {data, refetch} = useQuery({
        queryFn: () => getScoresByDate(selectedDate),
        queryKey: ["scores", {selectedDate}],
    })

    useEffect(() => {
        setScores(data)
        refetch()
    }, [data, scores, refetch]);

    return (
        <>
            {selectedScore && <MyModal
                selectedScore={selectedScore}
                show={isOpen}
                onHide={() => setIsOpen(false)}/>}

            {scores && <h4 style={{textAlign: "center", fontSize: "20px", margin: '1.5em'}}>Recent scores</h4>}
            {scores && scores?.map(score => (<div className="scores-table" key={score.score_id}>

                <div className="table">
                    {score.team_a.includes("White") ? <OutlineShirtSvg height={30}/> :
                        <ShirtSvg fill={extractTeamName(score.team_a)} width={32}/>}

                    <span className="score">
                    <p style={{fontWeight: score.score_a > score.score_b ? 900 : 500}}>{score.score_a}</p>
                    <p>-</p>
                    <p style={{fontWeight: score.score_b > score.score_a ? 900 : 500}}>{score.score_b}</p>
                </span>
                    {score.team_b.includes("White") ? <OutlineShirtSvg height={30}/> :
                        <ShirtSvg fill={extractTeamName(score.team_b)} width={32}/>}
                </div>

                <span className="date">
                <h5>{score.entered_time}</h5>
                <h5>{score.entered_date}</h5>
                    <h5>{score.entered_by}</h5>
                    </span>
                <div className="options">
                    <button id="delete-button" onClick={() => {
                        deleteScore(score.score_id).then(_ => {
                            notification("Score deleted successfully!")
                            refetch()
                        })
                    }}>Delete
                    </button>
                    <button id="edit-button" onClick={() => handleScoreSelect(score.score_id)}>Edit</button>
                </div>
            </div>))}
        </>
    );
};

export default Scores;
