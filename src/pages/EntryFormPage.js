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
import useSelectedField from "../hooks/useSelectedField";
import {reverseTeamName} from "../components/TeamSelect";

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
                "entered_date": selectedDate,
                "entered_time": enteredTime,
                "field": selectedField
            });
        } else {
            return errorNotification("Please select team before submitting");
        }
    }

    const handleDateChange = (value) => {
        setSelectedDate(value);
        localStorage.setItem("selectedDate", value);
    }

    return <div className="entry-form-container">
        <ToastContainer/>
        <span id="games-date">
            <label>Select games date</label>
            <select className="selection" onChange={(e) => handleDateChange(e.target.value)}>
                    <option value="" selected disabled>Select date</option>
                {dates && dates?.map(date => (
                    <option selected={selectedDate === date.date} value={date.date}>{formatDate(date.date)}</option>
                    )
                )}
            </select>
        </span>
        <FieldSelect
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

export const getTeamName = (team) => {
    if (team.includes("bluemetal")) {
        return team.replace("bluemetal", "steelblue")
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