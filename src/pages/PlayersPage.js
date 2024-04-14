import React, {useState} from 'react';
import '../styles/PlayersPage.css'
import FootballCourt from "../assets/FootballCourt";
import usePlayers from "../hooks/usePlayers";
import SearchBar from "../components/SearchBar";
import ImageViewer from "../components/ImageViewer";

const PlayersPage = () => {

    const {player: teamPlayers} = usePlayers()
    const [input, setInput] = useState('')
    const [results, setResults] = useState([]);

    return (
        <div className="players-container">
            <SearchBar input={input} setInput={setInput} setResults={setResults} results={results}/>
            <FootballCourt/>
            <div className="players-list">
                {teamPlayers.map(player => (
                    <div key={player.player_id} className="player">
                        <ImageViewer name={player.player_name} results={teamPlayers}/>
                        <h5>{player.player_name}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlayersPage;
