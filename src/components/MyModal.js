import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";
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

    const {mutate} = useMutation({
        mutationFn: updateScoreById
    })

    const [scoreA, setScoreA] = useState('');
    const [scoreB, setScoreB] = useState('');
    const [enteredTime, setEnteredTime] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

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

    // const handleChange = (e) => {
    //
    // }

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
                <input type="text" defaultValue={scoreA}/>
                <input type="text" defaultValue={scoreB}/>
                <input type="text" defaultValue={enteredTime}/>
                <input type="text" defaultValue={enteredDate}/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => handleClose()}>Close</Button>
                <Button color={"red"} onClick={(e) => handleSubmit(e)}>Submit</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyModal;
