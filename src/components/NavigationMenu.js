import React, {useState} from 'react';
import {Link} from "react-router-dom";
import '../styles/NavigationMenu.css'
import SoccerBallSvg from "../assets/SoccerBallSvg";

const NavigationMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="nav-menu">
            <div className={`menu ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
                <div className={`side-menu ${isOpen ? 'open' : ''}`}>
                    <ul>
                        <li><Link onClick={() => setIsOpen(false)} to={'/'}>Home</Link></li>
                        <li><Link onClick={() => setIsOpen(false)} to={'/'}>Games</Link></li>
                        <li><Link onClick={() => setIsOpen(false)} to={'/live-games'}>Live Score</Link></li>
                    </ul>
                </div>
            <Link to={"/"}>Bad at Soccer <SoccerBallSvg height={30}/></Link>
            <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)}/>
        </div>
    );
};

export default NavigationMenu;
