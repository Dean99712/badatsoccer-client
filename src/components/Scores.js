import React, {useEffect, useState} from 'react';
import {getScoreByFieldName} from "../service/ScoreService";
import {useQuery} from "react-query";
import EditScoreModal from "./EditScoreModal";
import CardsAccordion from "./CardsAccordion";
import useSelectedField from "../hooks/useSelectedField";
import Loading from "./Loading";

const Scores = ({selectedDate, isModalOpen, setIsModalOpen}) => {

    const [scores, setScores] = useState(null);
    const [selectedScore, setSelectedScore] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const {selectedField} = useSelectedField();

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

    return (
        isLoading ?
            <div className="message"><Loading height={50}/></div>
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
