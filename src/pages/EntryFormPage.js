import React, {useState} from 'react';
import {useMutation, useQueryClient} from "react-query";
import '../styles/EntryFormPage.css';
import FieldSelect from "../components/FieldSelect";
import TeamScoresBoard from "../components/TeamScoresBoard";
import Scores from "../components/Scores";
import {ToastContainer} from "react-toastify";
import {errorNotification, successNotification} from "../App";
import {addScore} from "../service/ScoreService";
import useSelectedField from "../hooks/useSelectedField";
import {reverseTeamName} from "../components/TeamSelect";
import DatePicker from "../components/DatePicker";

const EntryFormPage = () => {

    const time = new Date();

    const [isOpen, setIsOpen] = useState(false)

    const [teams, setTeams] = useState([])
    const [teamA, setTeamA] = useState('')
    const [teamB, setTeamB] = useState('')
    const [teamAScore, setTeamAScore] = useState(0);
    const [teamBScore, setTeamBScore] = useState(0);

    const [selectedDate, setSelectedDate] = useState(localStorage.getItem("selectedDate") || null);

    const {selectedField} = useSelectedField()

    const queryClient = useQueryClient()


    const {mutate} = useMutation({
        mutationFn: addScore,
        onSuccess: async () => {
            await queryClient.invalidateQueries("score")
            successNotification("Score added successfully!");
            resetScoreForm();
        },
        onError: () => {
            errorNotification("Something went wrong. Please try again later");
        }
    })
    const resetScoreForm = () => {
        setTeamAScore(0)
        setTeamBScore(0)
        setTeams([])
        setTeamA('')
        setTeamB('')
    }

    const addScoreToDatabase = async () => {
        const enteredTime = getLocalTime(time);
        let reversedTeamA = reverseTeamName(teamA);
        let reversedTeamB = reverseTeamName(teamB);

        if (teamB !== "" && teamA !== "") {
            mutate({
                "team_a": reversedTeamA,
                "score_a": teamAScore,
                "team_b": reversedTeamB,
                "score_b": teamBScore,
                "entered_by": "Admin",
                "entered_date": toISODate(selectedDate),
                "entered_time": enteredTime,
                "field": selectedField
            });
        } else {
            return errorNotification("Please select team before submitting");
        }
    }



    return <div className="entry-form-container">
        <ToastContainer/>
        <DatePicker
            title={'Select Date:'}
            date={selectedDate}
            setDate={setSelectedDate}
        />
        <FieldSelect
            selectedDate={selectedDate}
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
            isModalOpen={isOpen}
            setIsModalOpen={setIsOpen}
            selectedDate={selectedDate}
        />
    </div>
}
export default EntryFormPage;

export const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
    });
};
export const getLocalTime = (time = new Date()) => {
    return time.toLocaleString('he-IL', {hour: '2-digit', minute: "2-digit"});
}

export const toISODate = (date) => {
    return new Date(date).toLocaleString('fr-CA', {year: "numeric", month: '2-digit', day: '2-digit'})
}