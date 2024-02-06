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
        setTeamB
    }) => {


    const {data: fields} = useQuery({
        queryFn: getAllFields,
        queryKey: ["field"],
    })

    const handleOnFieldChange = (e, field) => {
        setSelectedField(e.target.value)
        setTeams([])
        showNotification(`You choose ${field.field}`)
    }

    console.log(selectedField);

    return (
        <div className="select-section">
            <span id="fields"><label htmlFor="fields">Choose a field:</label>
                {fields && fields?.map((field, index) => (
                    <>
                    <label className="fw-bold">{field.field}</label>
                    <input  key={index} name={field} type={"radio"} onChange={(e) => handleOnFieldChange(e, field)}
                           value={field.field}/>
                    </>

                ))}
                {/*                <select name="fields" className="selection"*/}
                {/*                        onChange={(e) => handleOnFieldChange(e)}>*/}
                {/*e                    <option selected disabled={true}*/}
                {/*                            value="">Select a Field*/}
                {/*                    </option>*/}
                {/*                    {fields && fields?.map((field, index) => (<option key={index}*/}
                {/*                                                                      value={field.field}>{field?.field}</option>))}*/}
                {/*                </select>*/}
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
