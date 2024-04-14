import React, {useState} from 'react';
import '../styles/SearchBar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {useQuery} from "react-query";
import {searchPlayersByName} from "../service/SearchService";
import usePlayers from "../hooks/usePlayers";

const SearchBar = ({input, setInput, setResults, results}) => {

    const {setPlayerId, setPlayer} = usePlayers()
    useQuery({
        queryKey: ['query', input],
        queryFn: () => searchPlayersByName(input),
        onSuccess: setResults,
        enabled: input.length >= 2
    })
    const handleInputChange = (value) => {
        if (value.length < 2)
            setResults([])
        setInput(value)
    }

    const handleOnPlayerClick = (value) => {
        setInput(value)
        setPlayerId(value)
    }

    const cleanInput = () => {
        setInput('')
        setResults([])
        setPlayer([])
    }

    return (
        <div className='search-container'>
            <span><FontAwesomeIcon icon={faMagnifyingGlass}/>
                <input type="text"
                       value={input}
                       onChange={(e) => handleInputChange(e.target.value)}
                       placeholder="Search for players"/>
            </span>
            {input.length >= 1 && <FontAwesomeIcon icon={faClose} onClick={() => cleanInput()}/>}
            <div className={`search-results ${(input.length <= 1 || results.find(player => input === player.player_name)) ? 'hidden' : ''}`}
                 style={{height: results.length > 5 ? '10em' : "fit-content"}}>
                {results.length > 0 && results.map((player, i) => (
                    <div key={i}><h5 onClick={() => handleOnPlayerClick(player.player_name)}>{player.player_name}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchBar;
