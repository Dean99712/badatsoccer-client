import React, {useEffect} from 'react';
import {getField} from "../service/ApiService";
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

    return (
        <span className="team-selection">
            <label htmlFor="teams">Choose Host Team:</label>

            {teams && <select name="teams" id="teams" className="selection" onChange={(e) => handleTeamAChange(e)}>
                <option value="" selected disabled={true}>Choose Host Team</option>
                {teams.map((team, i) => (<option key={i} value={team.team}>{team.team}</option>))}
            </select>}

            {teamA && <label htmlFor="teams">Choose Guest Team:</label>}
            {teamA && <select name="teams" id="teams" className="selection" onChange={(e) => handleTeamBChange(e)}>
                <option value="" selected disabled={true}>Choose Guest Team</option>
                {teams.map((team, i) => team.team !== teamA &&
                    <option key={i} value={team.team}>{team.team}</option>)}
            </select>}
        </span>
    );
};

export default TeamSelect;
