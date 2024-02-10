import '../styles/StatisticsPage.css'
import React from 'react';
import OutlineShirtSvg from "../assets/OutlineShirtSvg";
import ShirtSvg from "../assets/ShirtSvg";
import {getTeamName} from "./EntryFormPage";

// Mock data
const teams = [
    { id: 1, name: 'Black Team', mp: 2, w: 1, d: 1, l: 0, gd: 1, pts: 4 },
    { id: 2, name: 'BlueMetal Team', mp: 3, w: 0, d: 2, l: 1, gd: -1, pts: 2 },
    { id: 3, name: 'White Team', mp: 1, w: 0, d: 1, l: 0, gd: 0, pts: 1 },
];

// Team statistics card component
const TeamStatsCard = ({ team }) => (
    <div className="team-stats-card">
        <span className="stats-header">{team.name.includes("White") ? <OutlineShirtSvg height={30}/> :
            <ShirtSvg fill={getTeamName(team.name)} width={32}/>}
            <h3>{team.name}</h3>
        </span>

        <div>Success rate: <span className="fw-bold">{team.successRate}</span></div>
        <div>Goals per game average: <span className="fw-bold">{team.goalsPerGame}</span></div>
        <div>Goals per game against average: <span className="fw-bold">{team.goalsAgainstPerGame}</span></div>
    </div>
);

// Statistics table component
const StatisticsTable = ({ teams }) => (
    <div className="statistics">
        <table className="statistics-table" style={{width: '100%', textAlign: 'center'}}>
            <thead>
            <tr>
                <th>#</th>
                <th>Team</th>
                <th>MP</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>GD</th>
                <th>Pts</th>
            </tr>
            </thead>
            <tbody>
            {teams.map((team, index) => (
                <tr key={team.id}>
                    <td className="fw-bold">{index + 1}</td>
                    <td className="fw-medium">{team.name}</td>
                    <td>{team.mp}</td>
                    <td>{team.w}</td>
                    <td>{team.d}</td>
                    <td>{team.l}</td>
                    <td>{team.gd}</td>
                    <td className="fw-bold">{team.pts}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
);

// Main page component
const StatisticsPage = () => {

    const enrichedTeams = teams.map(team => ({
        ...team,
        successRate: ((team.w / team.mp) * 100).toFixed(2) + '%',
        goalsPerGame: (team.gd / team.mp).toFixed(1),
        goalsAgainstPerGame: ((team.gd / team.mp) - 0.3).toFixed(1), // This is just a mock calculation
    }));

    return (
        <div className="statistics-container">
            <h1 style={{ textAlign: 'center' }}>Statistics</h1>
            <StatisticsTable teams={teams} />
            <div>
                {enrichedTeams.map(team => (
                    <TeamStatsCard key={team.id} team={team} />
                ))}
            </div>
        </div>
    );
};

export default StatisticsPage;
