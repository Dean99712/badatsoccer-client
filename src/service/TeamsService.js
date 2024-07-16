import axios from "../api/axios";

const GET_TEAMS_BY_FIELD_AND_DATE = '/get_teams_by_field_and_date';
const GET_TEAM_BY_PLAYER_NAME = '/get_team_by_player_name';
const GET_ALL_PLAYERS = '/get_all_players';

export const getTeamsByFieldAndDate = async (data) => {
    return await axios.get(GET_TEAMS_BY_FIELD_AND_DATE, {
        params: {
            field_auto: data.field,
            date: data.date
        }
    }).then(res => res.data);
}

export const getTeamsByPlayerName = async (data) => {
    return await axios.get(GET_TEAM_BY_PLAYER_NAME, {
        params: {
            player_name: data.player_name,
            date: data.date
        }}).then(res => res.data);
}

export const getAllPlayers = async (data) => {
    return await axios.get(GET_ALL_PLAYERS, {
        params: {
            date: data.date,
            field: data.field
        }}).then(res => res.data);
}

