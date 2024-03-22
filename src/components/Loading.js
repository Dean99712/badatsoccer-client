import React from 'react';
import SoccerBallSvg from "../assets/SoccerBallSvg";
import '../styles/Loading.css';

const Loading = ({height}) => {
    return (
        <div className="loading-state"><SoccerBallSvg height={height}/></div>
    );
};

export default Loading;
