import React, {useState} from 'react';
import {Link} from "react-router-dom";
import '../styles/NavigationMenu.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse, faLineChart} from "@fortawesome/free-solid-svg-icons";
import {faFutbol} from "@fortawesome/free-regular-svg-icons/faFutbol";
import Logo from "../assets/Logo";

const NavigationMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div id="save-area"></div>
            <div className="nav-menu">
                <div className={`menu ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div className={`side-menu ${isOpen ? 'open' : ''}`}>
                    <ul>
                        <span className="list-item">
                            <li><FontAwesomeIcon fill={"white"} icon={faHouse}/><Link onClick={() => setIsOpen(false)}
                                                                                      to={'/'}>Home</Link></li>
                        </span>
                        <span className="list-item">
                            <li><FontAwesomeIcon fill={"white"} icon={faFutbol}/><Link onClick={() => setIsOpen(false)}
                                                                                       to={'/'}>Games</Link></li>
                        </span>
                        <span className="list-item">
                            <li><FontAwesomeIcon fill={"white"} icon={faLineChart}/><Link
                                onClick={() => setIsOpen(false)}
                                to={'/statistics'}>Statistics</Link></li>
                        </span>
                    </ul>
                </div>
                <Link to={"/"}><Logo height={50}/></Link>
                <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)}/>
            </div>
        </>
    );
};

export default NavigationMenu;
