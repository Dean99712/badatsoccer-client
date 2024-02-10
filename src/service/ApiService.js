import axios from "../api/axios";

const ADD_SCORE = "/add_score"
const GET_SCORES = "/get_scores"
const GET_ALL_FIELDS = "/get_all_fields"
const GET_FIELD = "/get_field"
const GET_GAMES_DATES = "/get_games_dates"
const GET_SCORES_BY_DATE = "/get_scores_by_date"
const GET_SCORE_BY_ID = "/get_score_by_id"
const DELETE_SCORE = "/delete_score"
const UPDATE_SCORE = "/update_score"
const GET_SCORES_BY_FIELD = "/get_scores_by_field_name"

export const addScore = (data) => {
    return axios.post(ADD_SCORE, data)
}

export const getScores = () => {
    return axios.get(GET_SCORES).then(res => res.data)
}

export const getAllFields = () => {
    return axios.get(GET_ALL_FIELDS).then(res => res.data);
}

export const getField = async (data) => {
    const response = await axios.get(GET_FIELD, {
        params: {
            field: data
        }
    });
    return response.data;
}

export const getGamesDates = async () => {
    const response = await axios.get(GET_GAMES_DATES);
    return response.data;
}
export const getScoresByDate = async (data) => {
    return await axios.get(GET_SCORES_BY_DATE, {
        params: {
            entered_date: data
        }
    }).then(res => res.data);
}

export const deleteScore = async (data) => {
    return await axios.delete(DELETE_SCORE, {
        params: {
            score_id: data
        }
    }).then(res => res.data);
}

export const getScoreByFieldName = async (data) => {
    return await axios.get(GET_SCORES_BY_FIELD, {
        params: {
            field: data.selectedField,
            entered_date: data.selectedDate
        }
    }).then(res => res.data);
}

export const getScoreById = async (data) => {
    return await axios.get(GET_SCORE_BY_ID, {
        params: {
            score_id: data
        }
    }).then(res => res.data);
}

export const updateScoreById = async (data) => {
    const {score_id, ...updateData} = data
    return await axios.patch(UPDATE_SCORE, {
        ...updateData,
    }, {
        params: {
            score_id: score_id
        }
    }).then(res => res.data);
}
