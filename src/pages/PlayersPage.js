import React, {useEffect, useState} from 'react';
import '../styles/PlayersPage.css'
import FootballCourt from "../assets/FootballCourt";
import usePlayers from "../hooks/usePlayers";
import Players from "../components/Players";
import Loading from "../components/Loading";
import DatePicker from "../components/DatePicker";
import SearchBar from "../components/SearchBar";
import useSelectedField from "../hooks/useSelectedField";
import useFields from "../hooks/useFields";

const PlayersPage = () => {

    const {playerId, setPlayerId, player, players, isFetching} = usePlayers()
    const [input, setInput] = useState('')
    const [results, setResults] = useState([]);
    const {selectedField} = useSelectedField();
    const {date} = useFields()

    const groupByTeam = Object.groupBy(players.filter(player => player && player?.team_to_pick), ({team_to_pick}) => {
        return team_to_pick.replace(' ', '_');
    });

    useEffect(() => {
        setInput('');
    },[selectedField])

    useEffect(() => {
        setInput('');
        setResults([]);
        setPlayerId(null);
    }, [date, setPlayerId]);

    const renderPlayers = (teams) => {
        if (playerId) {
            const child = <>
                <h5 style={{
                    textAlign: "center",
                    margin: '1em 0',
                    fontWeight: 600
                }}>{teams ? player[0]?.team_to_pick : ''}</h5>
                <div className="players-list"><Players team={player}/></div>
            </>
            return <FootballCourt child={child}/>
        } else {
            return Object.entries(teams).map((team) => {
                const teamName = team[0].replace('_', ' ');
                const child = <>
                    <h5 style={{textAlign: "center", margin: '1em 0', fontWeight: 600}}>{teamName}</h5>
                    <div className="players-list"><Players key={team[1].team_to_pick} team={team[1]}/></div>
                </>
                return <FootballCourt child={child}/>
            });
        }
    }

    return (
        <div className="players-container">
            <DatePicker/>
            {isFetching ?
                <Loading height={50}/>
                : <><SearchBar input={input} setInput={setInput} setResults={setResults} results={results}/>
                    {renderPlayers(groupByTeam)}</>}
        </div>
    );
};

export default PlayersPage;
