import React from 'react';
import {getAllFields} from "../service/ApiService";
import {useQuery} from "react-query";
import TeamSelect from "./TeamSelect";
import '../styles/FieldSelect.css'
import {showNotification} from "../App";

const FieldSelect = (
    {
        selectedField,
        setSelectedField,
        teams,
        setTeams,
        teamA,
        setTeamA,
        teamB,
        setTeamB,
        resetFunction
    }) => {


    const {data: fields} = useQuery({
        queryFn: getAllFields,
        queryKey: ["field"],
    })

    const handleOnFieldChange = (e, field) => {
        setSelectedField(e.target.value);
        setTeams([]);
        setTeamA("");
        setTeamB("");
        resetFunction();
        showNotification(`You choose ${field.field}`)
    }

    return (
        <div className="select-section">
            <span id="fields"><label htmlFor="fields">Choose a field:</label>
                {fields && fields?.map((field, index) => (
                    <span className="field-select">
                    <label className="fw-bold">{field.field}</label>
                    <input  key={index} name={field} type={"radio"} onChange={(e) => handleOnFieldChange(e, field)}
                           value={field.field}/>
                    </span>
                ))}

            </span>

            {fields ? <TeamSelect
                teams={teams}
                setTeams={setTeams}
                selectedField={selectedField}
                setTeamA={setTeamA}
                teamA={teamA}
                teamB={teamB}
                setTeamB={setTeamB}
            /> : null}
        </div>
    );
};

export default FieldSelect;
