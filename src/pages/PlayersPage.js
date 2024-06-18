import React, {useState} from 'react';
import '../styles/PlayersPage.css'
import FootballCourt from "../assets/FootballCourt";
import usePlayers from "../hooks/usePlayers";
import SearchBar from "../components/SearchBar";
import ImageViewer from "../components/ImageViewer";
import OutlineShirtSvg from "../assets/OutlineShirtSvg";
import ShirtSvg from "../assets/ShirtSvg";
import {extractTeamName} from "../components/TeamSelect";

const PlayersPage = () => {

    const {player: teamPlayers} = usePlayers()
    const [input, setInput] = useState('')
    const [results, setResults] = useState([]);

    return (
        <div className="players-container">
            <SearchBar input={input} setInput={setInput} setResults={setResults} results={results}/>
            {teamPlayers?.length > 0 && <div className="players-team-name">
                {teamPlayers[0]?.team_to_pick.includes('white' && 'White') ? <OutlineShirtSvg height={45}/> :
                    <ShirtSvg fill={extractTeamName(teamPlayers[0]?.team_to_pick)} width={45}/>}
                <h5 className="players-team">{teamPlayers[0]?.team_to_pick}</h5>

            </div>}
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
