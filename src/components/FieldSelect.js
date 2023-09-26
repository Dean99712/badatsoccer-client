import React from 'react';
import {getAllFields} from "../service/ApiService";
import {useQuery} from "react-query";
import TeamSelect from "./TeamSelect";
import '../styles/FieldSelect.css'

const FieldSelect = ({selectedField, setSelectedField, teams, setTeams, teamA, setTeamA, teamB, setTeamB}) => {

    const {data: fields} = useQuery({
        queryFn: getAllFields,
        queryKey: ["field"],
        enabled: !!selectedField
    })

    return (
        <div className="select-section">
            <label htmlFor="fields">Choose a field:</label>

            <select name="fields" id="fields" className="selection"
                    onChange={(e) => setSelectedField(decodeURIComponent(e.target.value))}>
                {fields && fields?.map((field, index) => (<option key={index}
                                                                  value={field.field}>{field?.field}</option>))}
            </select>

            {fields ? <TeamSelect
                teams={teams}
                setTeams={setTeams}
                selectedField={selectedField}
                setTeamA={setTeamA}
                setTeamB={setTeamB}
            /> : null}
        </div>
    );
};

export default FieldSelect;
