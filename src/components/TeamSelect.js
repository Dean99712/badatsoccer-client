import React from 'react';
import {getField} from "../service/FieldService";
import '../styles/TeamSelect.css'
import useFields from "../hooks/useFields";
import {useQuery} from "react-query";
import {formatDate} from "../pages/EntryFormPage";

const TeamSelect = ({selectedField, teams, setTeams, teamA, setTeamA, teamB, setTeamB}) => {

    const {date} = useFields();

    useQuery({
        queryFn: () => getField({field_auto: selectedField, date: formatDate(date)}),
        queryKey: ["field", selectedField, date,  setTeams, teamA, teamB],
        onSuccess: (data) => {
            console.log(data)
            setTeams(data)
        }
    })

    const handleTeamAChange = e => {
        setTeamA(e.target.value)
        if (e.target.value === teamB) {
            setTeamB("")
        }
    }
    const handleTeamBChange = e => {
        setTeamB(e.target.value);
    }

    return (
        <span className="team-selection">

            <label htmlFor="teams">Host Team:</label>
            {teams && <select name="teams" id="teams" className="selection" onChange={(e) => handleTeamAChange(e)}>
                <option value="" selected disabled={true}>Choose Host Team</option>
                {teams.map((team, i) => extractTeamName(team.team_to_pick) !== extractTeamName(teamB) && (
                    <option key={i} value={extractTeamName(team.team_to_pick)}>
                        {extractTeamName(team.team_to_pick)}</option>))
                }
            </select>}
            {teamA && <label htmlFor="teams">Guest Team:</label>}
            {teamA && <select name="teams" id="teams" className="selection" onChange={(e) => handleTeamBChange(e)}>
                <option value="" selected disabled={true}>Choose Guest Team</option>
                {teams.map((team, i) => extractTeamName(team.team_to_pick) !== extractTeamName(teamA) && (
                    <option key={i} value={extractTeamName(team.team_to_pick)}>
                        {extractTeamName(team.team_to_pick)}</option>))
                }
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
    if (team.includes('Team')) {
        return team.split(' Team')[0];
    } else if (team.includes("metal")) {
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
        case 'pink':
            return "#FF71CD";
        case 'Pink':
            return "#FF71CD";
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
