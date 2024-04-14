import {createContext, useState} from "react";
import {getAllPlayers, getTeamsByPlayerName} from "../service/TeamsService";
import {useQuery} from "react-query";
import useFields from "../hooks/useFields";
import {formatDate} from "../pages/EntryFormPage";

const PlayersContext = createContext({});

export const PlayersProvider = ({children}) => {
    const [players, setPlayers] = useState([]);
    const [playerId, setPlayerId] = useState(null)
    const [player, setPlayer] = useState([]);
    const {date} = useFields()

    const localDate = formatDate(date)
    useQuery({
        queryKey: ['players', date],
        queryFn: () => getAllPlayers(localDate),
        onSuccess: setPlayers
    });

    useQuery({
        queryKey: ['player', playerId, date],
        queryFn: () => getTeamsByPlayerName(
            {player_name: playerId, date: localDate}),
        onSuccess: setPlayer,
        enabled: playerId !== null
    });

    return (
        <PlayersContext.Provider value={{players, setPlayers, playerId, setPlayerId, player, setPlayer}}>
            {children}
        </PlayersContext.Provider>
    )
}

export default PlayersContext