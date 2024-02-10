import React, {useEffect, useState} from 'react';
import {useMutation, useQuery} from "react-query";
import '../styles/EntryFormPage.css';
import {addScore, getGamesDates} from "../service/ApiService";
import FieldSelect from "../components/FieldSelect";
import TeamScoresBoard from "../components/TeamScoresBoard";
import Scores from "../components/Scores";
import {ToastContainer} from "react-toastify";
import {successNotification} from "../App";

const EntryFormPage = () => {

    const time = new Date()

    const [isOpen, setIsOpen] = useState(false)

    const [teams, setTeams] = useState([])
    const [teamA, setTeamA] = useState('')
    const [teamB, setTeamB] = useState('')
    const [teamAScore, setTeamAScore] = useState(0);
    const [teamBScore, setTeamBScore] = useState(0);

    const [selectedDate, setSelectedDate] = useState(getLocalDate(time))

    const [selectedField, setSelectedField] = useState("")

    const {data: dates, refetch} = useQuery({
        queryFn: getGamesDates,
        queryKey: ["dates"]
    })

    const {mutate} = useMutation({
        mutationFn: addScore
    })
    const resetScoreForm = () => {
        setTeamAScore(0)
        setTeamBScore(0)
        setTeams([])
        setTeamA('')
        setTeamB('')
    }

    useEffect(() => {
        refetch().then(res => res.data);

    }, [refetch, dates]);

    const addScoreToDatabase = async () => {
        const enteredTime = getLocalTime(time);
        mutate({
            "team_a": teamA,
            "score_a": teamAScore,
            "team_b": teamB,
            "score_b": teamBScore,
            "entered_by": "Admin",
            "entered_date": time,
            "entered_time": enteredTime,
            "field": selectedField
        })
        successNotification("Score added successfully!");
        await refetch()
        resetScoreForm();
    }

    return <div className="entry-form-container">
        <ToastContainer/>
        <h1>Games</h1>
        <span id="games-date">
            <label>Select games date</label>
            <select className="selection" onChange={(e) => setSelectedDate(e.target.value)}>
                    <option value="" selected disabled>Select date</option>
                {dates && dates?.map(date => (
                        <option value={date.date}>{formatDate(date.date)}</option>
                    )
                )}
            </select>
        </span>
        <FieldSelect
                selectedField={selectedField}
                setSelectedField={setSelectedField}
                teams={teams}
                teamA={teamA}
                setTeamA={setTeamA}
                teamB={teamB}
                setTeamB={setTeamB}
                setTeams={setTeams}/>

            <TeamScoresBoard
                teamA={teamA}
                teamB={teamB}
                teamAScore={teamAScore}
                teamBScore={teamBScore}
                setTeamAScore={setTeamAScore}
                setTeamBScore={setTeamBScore}
                resetFn={resetScoreForm}
                submitFn={addScoreToDatabase}
            />
            <Scores
                selectedField={selectedField}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                selectedDate={selectedDate}
            />
    </div>
}
export default EntryFormPage;

export const getTeamName = (team) => {
    if (team.includes("BlueMetal")) {
        return team.replace("BlueMetal", "steelblue")
    }
    return team
}
export const getLocalDate = (date = new Date()) => {
    return date.toLocaleString('he-IL', {day: '2-digit', month: '2-digit', year: 'numeric'});
}
export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
};
export const getLocalTime = (time = new Date()) => {
    return time.toLocaleString('he-IL', {hour: '2-digit', minute: "2-digit"});
}