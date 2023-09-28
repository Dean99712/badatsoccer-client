import React from 'react';
import '../styles/Modal.css'

const Modal = ({isOpen, setIsOpen, scoreA, scoreB, enteredTime, scoreId}) => {

    const handleChange = () => {
        setIsOpen(!isOpen)
    }

    console.log(scoreId)

    return (
        <div className="overlay" onClick={() => setIsOpen(false)}>
            <div className="modal-container">
                <div className="modal-content">
                    <h2>Hello</h2>
                    <input type="text"/>
                    <input type="text"/>
                </div>
            </div>
        </div>
    );
};

export default Modal;
