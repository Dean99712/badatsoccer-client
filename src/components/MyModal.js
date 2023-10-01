import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Spinner} from "react-bootstrap";
import {useMutation, useQuery} from "react-query";
import {getScoreById, updateScoreById} from "../service/ApiService";
import '../styles/MyModal.css'

const MyModal = (props) => {

    const scoreId = props.selectedScore;
    // const setSelectedScore = props.setSelectedScore

    const {data: score} = useQuery({
        queryFn: () => getScoreById(scoreId),
        queryKey: ["score", scoreId],
         onSuccess: () => {
             setScoreA(score[0].score_a)
             setScoreB(score[0].score_b)
             setEnteredTime(score[0].entered_time)
             setEnteredDate(score[0].entered_date)
        }
    });

    const [scoreA, setScoreA] = useState('');
    const [scoreB, setScoreB] = useState('');
    const [enteredTime, setEnteredTime] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const {mutate} = useMutation({
        mutationFn: (data) => updateScoreById(data)
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        mutate({
            score_id: scoreId,
            score_a: scoreA,
            score_b: scoreB,
            entered_date: enteredDate,
            entered_time: enteredTime
        })
    }

    const handleClose = () => {
        setScoreA(null)
        setScoreB(null)
        setEnteredTime(null)
        setEnteredDate(null)
        props.onHide()
    }

    return (
        score && <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update Score
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {score ? <><input type="text" defaultValue={score[0].score_a} value={score.score_a}
                                  onChange={(e) => setScoreB(e.target.value)}/>
                        <input type="text" defaultValue={score[0].score_b} value={score.score_b}
                               onChange={(e) => setScoreB(e.target.value)}/>
                        <input type="text" defaultValue={score[0].entered_time} value={score.entered_time}
                               onChange={(e) => setEnteredTime(e.target.value)}/>
                        <input type="text" defaultValue={score[0].entered_date}
                               onChange={(e) => setEnteredDate(e.target.value)} value={score.entered_date}/></> :
                    <Spinner/>}
            </Modal.Body>
            <Modal.Footer>
                <Button id="close" onClick={() => handleClose()}>Close</Button>
                <Button id="submit" onClick={(e) => handleSubmit(e)}>Submit</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyModal;
