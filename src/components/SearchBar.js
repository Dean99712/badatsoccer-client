import React from 'react';
import '../styles/SearchBar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {useQuery} from "react-query";
import {searchPlayersByName} from "../service/SearchService";
import usePlayers from "../hooks/usePlayers";
import useSelectedField from "../hooks/useSelectedField";
import useFields from "../hooks/useFields";
import {formatDate} from "../pages/EntryFormPage";

const SearchBar = ({input, setInput, setResults, results}) => {

    const {setPlayerId, setPlayer, setPlayerTeam} = usePlayers()
    const {setSelectedField} = useSelectedField();
    const {date} = useFields()


    const formatedDate = (date) => formatDate(date);

    useQuery({
        queryKey: ['query', input, formatedDate],
        queryFn: () => searchPlayersByName({query: input, date: formatedDate(date)}),
        onSuccess: setResults,
        enabled: input.length >= 2
    })
    const handleInputChange = (value) => {
        if (value.length < 2) {
            setPlayerId(null);
            setResults([]);
        }
        setInput(value);
    }

    const handleOnPlayerClick = (value) => {
        setInput(value.player_name);
        setPlayerId(value.player_name);
        setSelectedField(value.field_auto);
        setPlayerTeam(value.team_to_pick);
    }

    const cleanInput = () => {
        setPlayerId(null)
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
            <div
                className={`search-results ${(input.length <= 1 || results.find(player => input === player.player_name)) ? 'hidden' : ''}`}
                style={{height: results.length > 5 ? '10em' : "fit-content"}}>
                {results && results.length > 0 ? results.map((player, i) => (
                    <div key={i}><h5 onClick={() => handleOnPlayerClick(player)}>{player.player_name}</h5>
                    </div>
                )) : <h5>No results found</h5>}
            </div>
        </div>
    );
};

export default SearchBar;
