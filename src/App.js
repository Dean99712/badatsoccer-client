import './App.css';
import "@fortawesome/fontawesome-free"
import {useState} from "react";
import {useMutation, useQuery} from "react-query";
import {addScore, getScoresDates} from "./service/ApiService";
import FieldSelect from "./components/FieldSelect";
import Scores from "./components/Scores";
import TeamScoresBoard from "./components/TeamScoresBoard";

function App() {

    const time = new Date()
    const month = time.getMonth() + 1 < 10 ? `0${time.getMonth() + 1}` : time.getMonth() + 1
    const date = `${time.getDate()}/${month}/${time.getFullYear()}`

    const hour = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
    const minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()

    const currentTime = `${hour}:${minutes}`

    const [isOpen, setIsOpen] = useState(false)

    const [teams, setTeams] = useState([])
    const [teamA, setTeamA] = useState('')
    const [teamB, setTeamB] = useState('')
    const [teamAScore, setTeamAScore] = useState(0);
    const [teamBScore, setTeamBScore] = useState(0);

    const [selectedDate, setSelectedDate] = useState(date)

    const [selectedField, setSelectedField] = useState("")

    const {data: dates} = useQuery({
        queryFn: getScoresDates,
        queryKey: ["dates"],
    })

    const {mutate} = useMutation({
        mutationFn: addScore,
    })

    const addScoreToDatabase = () => {
        mutate({
            "team_a": teamA,
            "score_a": teamAScore,
            "team_b": teamB,
            "score_b": teamBScore,
            "entered_by": "Admin",
            "entered_date": date,
            "entered_time": currentTime,
            "field": selectedField
        })
        resetScoreForm();
    }
    const resetScoreForm = () => {
        setTeamAScore(0)
        setTeamBScore(0)
        setTeams([])
        setTeamA('')
        setTeamB('')
        setSelectedField('')
    }

    return <div>
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
    </div>;
}

export default App;

export const extractTeamName = (team) => {
    let teamValue = team.substring(team.indexOf("Team"))
    if (team.includes("BlueMetal")) {
        return team.replace("BlueMetal", "steelblue").replace(teamValue, '')
    }
    return team.replace(teamValue, '')
}