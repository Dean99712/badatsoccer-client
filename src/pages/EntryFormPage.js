import React, {useEffect, useState} from 'react';
import {useMutation, useQuery, useQueryClient} from "react-query";
import '../styles/EntryFormPage.css';
import {getGamesDates} from "../service/GamesService";
import FieldSelect from "../components/FieldSelect";
import TeamScoresBoard from "../components/TeamScoresBoard";
import Scores from "../components/Scores";
import {ToastContainer} from "react-toastify";
import {errorNotification, successNotification} from "../App";
import {addScore} from "../service/ScoreService";

const EntryFormPage = () => {

    const time = new Date();

    const [isOpen, setIsOpen] = useState(false)

    const [teams, setTeams] = useState([])
    const [teamA, setTeamA] = useState('')
    const [teamB, setTeamB] = useState('')
    const [teamAScore, setTeamAScore] = useState(0);
    const [teamBScore, setTeamBScore] = useState(0);

    const [selectedDate, setSelectedDate] = useState(localStorage.getItem("selectedDate") || null);

    const [selectedField, setSelectedField] = useState(localStorage.getItem("selectedField") || "")

    const queryClient = useQueryClient()

    const {data: dates, refetch} = useQuery({
        queryFn: getGamesDates,
        queryKey: ["dates"]
    })

    const {mutate} = useMutation({
        mutationFn: addScore,
        onSuccess: async () => {
            await queryClient.invalidateQueries("score")
            successNotification("Score added successfully!");
            resetScoreForm();
        }
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

    const handleChangeDate = (date) => {
        setSelectedDate(date)
        localStorage.setItem("selectedDate", date)
    }
    const addScoreToDatabase = async () => {
        const enteredTime = getLocalTime(time);
        if (teamB !== "" && teamA !== "") {
            mutate({
                "team_a": teamA,
                "score_a": teamAScore,
                "team_b": teamB,
                "score_b": teamBScore,
                "entered_by": "Admin",
                "entered_date": selectedDate,
                "entered_time": enteredTime,
                "field": selectedField
            })
        } else {
            return errorNotification("Please select team before submitting")
        }
    }

    return <div className="entry-form-container">
        <ToastContainer/>
        <h1 id="page-title">Games</h1>
        <span id="games-date">
            <label>Select games date</label>
            <select className="selection" onChange={(e) => handleChangeDate(e.target.value)}>
                    <option value="" selected disabled>Select date</option>
                {dates && dates?.map(date => (
                    <option selected={selectedDate === date.date} value={date.date}>{formatDate(date.date)}</option>
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
                resetFunction={resetScoreForm}
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
                isModalOpen={isOpen}
                setIsModalOpen={setIsOpen}
                selectedDate={selectedDate}
            />
    </div>
}
export default EntryFormPage;

export const getTeamName = (team) => {
    if (team.includes("Blue Metal")) {
        return team.replace("Blue Metal", "steelblue")
    }
    return team
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