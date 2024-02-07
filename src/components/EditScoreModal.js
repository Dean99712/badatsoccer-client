import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Spinner} from "react-bootstrap";
import {useMutation, useQuery} from "react-query";
import {getScoreById, updateScoreById} from "../service/ApiService";
import '../styles/MyModal.css'
import {errorNotification, successNotification} from "../App";
import {getLocalTime} from "./EntryFormPage";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";

const EditScoreModal = (props) => {

    const scoreId = props.selectedScore;

    const time = new Date()

    const [scoreA, setScoreA] = useState(null)
    const [scoreB, setScoreB] = useState(null)
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

    const [data] = useState(
        {
            score_a: scoreA,
            score_b: scoreB
        }
    );
    // const handleChange = () => {
    //     // const {name, value} = e.target;
    //     // setData({
    //     //     ...data,
    //     //     [name]: value
    //     // });
    // }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const enteredTime = getLocalTime(time);

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
            entered_date: time
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
                        <span>
                            <label>Host team</label>
                            <span className="modal-points">
                                <FontAwesomeIcon id="plus-icon" icon={faPlus} onClick={() => setScoreA(scoreB +1)}/>
                                <h5>{score[0]?.score_a}</h5>
                                <FontAwesomeIcon id="minus-icon" icon={faMinus} onClick={() => setScoreA(scoreB -1)}/>

                                {/*<input type="text" defaultValue={score[0].score_a} name="score_a" value={score.score_a}*/}
                                {/*       onChange={(e) => handleChange(e)}/>*/}
                            </span>
                        </span>
                        <span>
                            <label>Gust team</label>
                            <span className="modal-points">
                                <FontAwesomeIcon id="plus-icon" icon={faPlus} onClick={() => setScoreB(scoreB +1)}/>
                                <h5 id>{score[0]?.score_b}</h5>
                                <FontAwesomeIcon id="minus-icon" icon={faMinus} onClick={() => setScoreB(scoreB -1)}/>
                                </span>
                            {/*<input type="text" defaultValue={score[0].score_b} name="score_b" value={score.score_b}*/}
                            {/*       onChange={(e) => handleChange(e)}/>*/}
                            {/*<FontAwesomeIcon icon={faMinus} onClick={(e) => set}/>*/}
                        </span>
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
