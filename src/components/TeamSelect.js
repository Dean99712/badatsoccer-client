import React, {useEffect} from 'react';
import {getField} from "../service/FieldService";
import '../styles/TeamSelect.css'

const TeamSelect = ({selectedField, teams, setTeams, teamA, setTeamA, teamB, setTeamB}) => {

    useEffect(() => {
        getField(selectedField).then(res => {
            setTeams(res);
        });

    }, [selectedField, setTeams, teamA, teamB]);

    const handleTeamAChange = e => {
        setTeamA(e.target.value)
        if (e.target.value === teamB) {
            setTeamB("")
        }
    }
    const handleTeamBChange = e => {
        setTeamB(e.target.value);
    }

    const team = teams[0] || null;
    const teamsObject = Object.entries(team || {}).map(([key, value]) => ({key, value}));

    const firstSelectOptions = teamsObject.filter(option => option.value !== teamB);

    const secondSelectOptions = teamsObject.filter(option => option.value !== teamA);

    return (
        <span className="team-selection">

            <label htmlFor="teams">Choose Host Team:</label>
            {teams && <select name="teams" id="teams" className="selection" onChange={(e) => handleTeamAChange(e)}>
                <option value="" selected disabled={true}>Choose Host Team</option>
                {firstSelectOptions.map((option) => extractTeamName(option.value) !== extractTeamName(teamB) && (
                    <option key={extractTeamName(option.key)} value={extractTeamName(option.value)}>
                        {extractTeamName(option.value)}</option>))
                }
            </select>}

            {teamA && <label htmlFor="teams">Choose Guest Team:</label>}
            {teamA && <select name="teams" id="teams" className="selection" onChange={(e) => handleTeamBChange(e)}>
                <option value="" selected disabled={true}>Choose Guest Team</option>
                {secondSelectOptions.map((option) => extractTeamName(option.value) !== extractTeamName(teamA) &&
                    <option key={option.key}
                            value={extractTeamName(option.value)}>{extractTeamName(option.value)}</option>)}
            </select>}
        </span>
    );
};

export default TeamSelect;

export const reverseTeamName = (team) => {
    if (team === "Blue Metal") {
        return "metal";
    }
    return team.toLowerCase();
}

export const extractTeamName = (team) => {
    if (team.includes("metal")) {
        return "Blue Metal";
    }
    return team.charAt(0).toUpperCase() + team.slice(1);
};

export const getTeamColor = (team) => {
    switch (team) {
        case "BlueMetal":
            return "#0284c7";
        case "Blue Metal":
            return "#0284c7";
        case "bluemetal":
            return "#0284c7";
        case 'purple':
            return "#6b21a8";
        case 'Purple':
            return "#6b21a8";
        case "red":
            return "#dc2626";
        case "Red":
            return "#dc2626";
        case "green":
            return "#16a34a";
        case "Green":
            return "#16a34a";
        case "gold":
            return "#facc15";
        case "Gold":
            return "#facc15";
        default:
            return "#000000";
    }
}
