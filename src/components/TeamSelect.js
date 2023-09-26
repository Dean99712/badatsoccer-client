import React, {useEffect, useState} from 'react';
import {getField} from "../service/ApiService";
import '../styles/TeamSelect.css'

const TeamSelect = ({selectedField, teams, setTeams, setTeamA, setTeamB}) => {

    const [selectedTeam, setSelectedTeam] = useState("");

    useEffect(() => {
        getField(selectedField).then(res => {
            setTeams(res);
        });

    }, [selectedField, setTeams]);

    const handleTeamAChange = e => {
        setSelectedTeam(e.target.value)
        setTeamA(e.target.value)
    }

    const handleTeamBChange = e => {
        setTeamB(e.target.value);
    }

    return (
        <span className="team-selection">
            <label htmlFor="teams">Choose Team one:</label>

            {teams && <select name="teams" id="teams" className="selection" onChange={(e) => handleTeamAChange(e)}>
                <option value="" disabled={true}>Choose Team one</option>
                {teams.map((team, i) => (<option key={i} value={team.team}>{team.team}</option>))}
            </select>}

            <label htmlFor="teams">Choose Team two:</label>
            {teams && <select name="teams" id="teams" className="selection" onChange={(e) => handleTeamBChange(e)}>
                <option value="" disabled="true"></option>
                {teams.map((team, i) => (selectedTeam !== team.team && <option key={i} value={team.team}>{team.team}</option>))}
            </select>}
        </span>
    );
};

export default TeamSelect;
