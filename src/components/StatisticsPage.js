import React from 'react';
import '../styles/StatisticsPage.css'

const StatisticsPage = () => {
    return (
        <div className="statistics-container">
            <h1>Statistics</h1>
            <div className="statistics">
                <div className="stat">
                    <h3>Most wins</h3>
                    <p>Team A</p>
                </div>
                <div className="stat">
                    <h3>Most losses</h3>
                    <p>Team B</p>
                </div>
                <div className="stat">
                    <h3>Most draws</h3>
                    <p>Team C</p>
                </div>
            </div>
        </div>
    );
}

export default StatisticsPage;
