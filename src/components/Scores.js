import React, {useEffect, useState} from 'react';
import {getScoreByFieldName} from "../service/ScoreService";
import {useQuery} from "react-query";
import EditScoreModal from "./EditScoreModal";
import CardsAccordion from "./CardsAccordion";
import useSelectedField from "../hooks/useSelectedField";
import Loading from "./Loading";
import useFields from "../hooks/useFields";

const Scores = ({isModalOpen, setIsModalOpen}) => {

    const [scores, setScores] = useState(null);
    const [selectedScore, setSelectedScore] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [count, setCount] = useState(2);
    const {selectedField} = useSelectedField();
    const {date} = useFields()

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
        queryFn: () => getScoreByFieldName({selectedField, date, count: count}),
        queryKey: ["score", selectedField, date, count],
        onSuccess: setScores
    })

    useEffect(() => {
        setIsLoading(true);
        refetch().then(_ => setIsLoading(false));
    }, [data, scores, refetch, date]);

    const loadMoreScores = () => {
        setCount(prevCount => prevCount + 2); // Increase count by 5 each time
    }

    // // Infinite scroll logic
    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2 && !isLoading) {
    //
    //             loadMoreScores();
    //         }
    //     };
    //
    //     window.addEventListener('scroll', handleScroll);
    //
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, [isLoading]);

    return (
        isLoading ?
            <div className="message">
                <Loading style={{height: '50dvh'}} height={50}/></div>
            :
            <>
                {(selectedScore && isModalOpen) && <EditScoreModal
                    refetch={refetch}
                    selectedScore={selectedScore}
                    show={isModalOpen}
                    onHide={() => setIsModalOpen(false)}/>}

                {(scores && scores.length > 0) &&
                    <h4 className="scores-title">Recent scores</h4>}
                {(scores && scores.length > 0 && scores.length !== 0) ? (scores?.map((score) => (
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
                ))) : <div className="message">
                    <h5>No games played today...</h5>
                </div>}
                {(scores && scores.length >= count) && (
                    <button className="load-more-btn" onClick={loadMoreScores}>
                        Load More
                    </button>
                )}
            </>
    );
};

export default Scores;
