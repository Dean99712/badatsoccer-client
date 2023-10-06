import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Spinner} from "react-bootstrap";
import {useMutation, useQuery} from "react-query";
import {getScoreById, updateScoreById} from "../service/ApiService";
import '../styles/MyModal.css'
import {errorNotification, successNotification} from "../App";
import {getLocalDate, getLocalTime} from "./EntryFormPage";

const EditScoreModal = (props) => {

    const scoreId = props.selectedScore;

    const time = new Date()

    const scoreA = null;
    const scoreB = null;

    const {data: score} = useQuery({
        queryFn: () => getScoreById(scoreId),
        queryKey: ["score", scoreId]
    });

    const {mutate} = useMutation({
        mutationFn: (data) => updateScoreById(data),
        onSuccess: (data) => {
            props.refetch()
            successNotification(data.message);
        },
        onError: () => errorNotification('oops... something went wrong')
    })

    const [data, setData] = useState(
        {
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
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const enteredTime = getLocalTime(time);
        const enteredDate = getLocalDate(time);

        const changedFields = Object.keys(data).reduce((acc, key) => {
            if (score[key] !== data[key]) {
                acc[key] = data[key];
            }
            return acc;
        }, {});

        if (Object.keys(changedFields).length > 0) mutate({
            ...changedFields,
            score_id: scoreId,
            entered_time: enteredTime,
            entered_date: enteredDate
        })
        props.onHide()
    }

    const handleClose = () => {
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

export default EditScoreModal;
