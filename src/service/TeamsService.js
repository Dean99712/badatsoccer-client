import axios from "../api/axios";

const GET_TEAMS_BY_FIELD_AND_DATE = '/get_teams_by_field_and_date';

export const getTeamsByFieldAndDate = async (data) => {
    return await axios.get(GET_TEAMS_BY_FIELD_AND_DATE, {
        params: {
            field_auto: data.field,
            date: data.date
        }
    }).then(res => res.data);
}