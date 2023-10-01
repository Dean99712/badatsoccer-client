import React from 'react';
import {getAllFields} from "../service/ApiService";
import {useQuery} from "react-query";
import TeamSelect from "./TeamSelect";
import '../styles/FieldSelect.css'

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

    const handleOnFieldChange = e => {
        setSelectedField(e.target.value)
        setTeams([])
    }

    return (
        <div className="select-section">
            <span id="fields"><label htmlFor="fields">Choose a field:</label>

                <select name="fields" className="selection"
                        onChange={(e) => handleOnFieldChange(e)}>
                    <option selected disabled={true}
                            value="">Select a Field
                    </option>
                    {fields && fields?.map((field, index) => (<option key={index}
                                                                      value={field.field}>{field?.field}</option>))}
                </select></span>

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
