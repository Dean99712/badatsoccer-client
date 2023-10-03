import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Spinner} from "react-bootstrap";
import {useMutation, useQuery} from "react-query";
import {getScoreById, updateScoreById} from "../service/ApiService";
import '../styles/MyModal.css'
import {notification} from "../App";

const MyModal = (props) => {

    const scoreId = props.selectedScore;

    const {data: score} = useQuery({
        queryFn: () => getScoreById(scoreId),
        queryKey: ["score", scoreId]
    });

    const time = new Date()

    const [scoreA, setScoreA] = useState('');
    const [scoreB, setScoreB] = useState('');
    const [enteredTime, setEnteredTime] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const {mutate} = useMutation({
        mutationFn: (data) => updateScoreById(data)
    })

    console.log(scoreId);

    const [data, setData] = useState(
        {
            score_id: scoreId,
            score_a: scoreA,
            score_b: scoreB
        }
    );

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value
        });
        console.log([name], value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const changedFields = Object.keys(data).reduce((acc, key) => {
            if (score[key] !== data[key]) {
                acc[key] = data[key];
            }
            return acc;
        }, {});

        if (Object.keys(changedFields).length > 0) mutate(changedFields)

        notification("Score updated successfully!")
        props.onHide()
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
                {score ? <>
                        <input type="text" defaultValue={score[0].score_a} name="score_a" value={score.score_a}
                               onChange={(e) => handleChange(e)}/>
                        <input type="text" defaultValue={score[0].score_b} name="score_b" value={score.score_b}
                               onChange={(e) => handleChange(e)}/>
                        {/*<input type="text" defaultValue={score[0].entered_time} value={score.entered_time}*/}
                        {/*       onChange={(e) => setEnteredTime(e.target.value)}/>*/}
                        {/*<input type="text" defaultValue={score[0].entered_date}*/}
                        {/*       onChange={(e) => setEnteredDate(e.target.value)} value={score.entered_date}/>*/}
                    </> :
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
