import React, {useState} from 'react';
import {useMutation, useQuery} from "react-query";
import {addScore, getScoresDates} from "../service/ApiService";
import FieldSelect from "./FieldSelect";
import TeamScoresBoard from "./TeamScoresBoard";
import Scores from "./Scores";
import {ToastContainer} from "react-toastify";
import {notification} from "../App";

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
        queryFn: getScoresDates,
        queryKey: ["dates"],
    })

    const {mutate} = useMutation({
        mutationFn: addScore,
    })

    const addScoreToDatabase = async () => {
        const enteredDate = getLocalDate(time);
        const enteredTime = getLocalTime(time);
        mutate({
            "team_a": teamA,
            "score_a": teamAScore,
            "team_b": teamB,
            "score_b": teamBScore,
            "entered_by": "Admin",
            "entered_date": enteredDate,
            "entered_time": enteredTime,
            "field": selectedField
        })
        notification("Score added successfully!");
        await refetch()
        resetScoreForm();
    }
    const resetScoreForm = () => {
        setTeamAScore(0)
        setTeamBScore(0)
        setTeams([])
        setTeamA('')
        setTeamB('')
    }

    return <div>
        <ToastContainer/>
        <span id="games-date">
            <label>Select games date</label>
            <select className="selection" onChange={(e) => setSelectedDate(e.target.value)}>
                    <option value="" selected disabled>Select date</option>
                {dates && dates?.map(date => (
                    <option value={date.entered_date}>{date.entered_date}</option>
                ))}
            </select>
        </span>

        <div className="container">
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
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                selectedDate={selectedDate}
            />
        </div>
    </div>
}
export default EntryFormPage;

export const extractTeamName = (team) => {
    let teamValue = team.substring(team.indexOf("Team"))
    if (team.includes("BlueMetal")) {
        return team.replace("BlueMetal", "steelblue").replace(teamValue, '')
    }
    return team.replace(teamValue, '')
}

export const getLocalDate = (date = new Date()) => {
    return  date.toLocaleString('es', {day: '2-digit', month: '2-digit', year: "numeric"});
}
export const getLocalTime = (time = new Date()) => {
    return  time.toLocaleString('he-IL', {hour: '2-digit', minute: "2-digit"});
}