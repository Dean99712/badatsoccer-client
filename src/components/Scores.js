import React, {useEffect, useState} from 'react';
import {getScoreByFieldName} from "../service/ApiService";
import {useQuery} from "react-query";
import EditScoreModal from "./EditScoreModal";
import '../styles/Scores.css'
import CardsAccordion from "./CardsAccordion";
import SoccerBallSvg from "../assets/SoccerBallSvg";

const Scores = ({selectedDate, isModalOpen, setIsModalOpen, selectedField}) => {

    const [scores, setScores] = useState(null);
    const [selectedScore, setSelectedScore] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleScoreSelect = (score) => {
        setSelectedScore(score);
        setIsModalOpen(true);
    }
    const toggleExpand = (id) => {
        if (selectedScore === id) {
            return setSelectedScore(null);
        }
        setSelectedScore(id);
    }

    const {data, refetch} = useQuery({
        queryFn: () => getScoreByFieldName({selectedField, selectedDate}),
        queryKey: ["score", selectedField],
        onSuccess: setScores
    })

    useEffect(() => {
        setIsLoading(true);
        refetch().then(_ => setIsLoading(false));
    }, [data, scores, selectedDate, refetch]);

    console.log(isModalOpen)

    return (
        isLoading ?
            <div className="message"><SoccerBallSvg height={50}/></div>
            :
            <>
                {(selectedScore && isModalOpen) && <EditScoreModal
                    refetch={refetch}
                    selectedScore={selectedScore}
                    show={isModalOpen}
                    onHide={() => setIsModalOpen(false)}/>}

                {(scores && scores.length > 0) &&
                    <h4 className="scores-title">Recent scores</h4>}
                {(scores && scores.length > 0 && scores.length !== 0) ? scores?.map((score) => (
                    <CardsAccordion
                        key={score.score_id}
                        data={score}
                        selectedScore={selectedScore}
                        toggleExpand={toggleExpand}
                        handleScoreSelect={handleScoreSelect}
                        refetch={refetch}
                        setIsOpen={setIsModalOpen}
                        isOpen={isModalOpen}
                    ></CardsAccordion>
                )) : <div className="message">
                    <h5>No games played today...</h5>
                </div>}
            </>
    );
};

export default Scores;
