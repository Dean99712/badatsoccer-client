import axios from "../api/axios";

const ADD_SCORE = "/add_score"
const GET_SCORES = "/get_scores"
const GET_ALL_FIELDS = "/get_all_fields"
const GET_FIELD = "/get_field"
const GET_SCORES_DATES = "/get_scores_dates"
const GET_SCORES_BY_DATE = "/get_scores_by_date"
const DELETE_SCORE = "/delete_score"
const UPDATE_SCORE = "/update_score"

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
        },
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response.data;
}

export const getScoresDates = async () => {
     const response = await axios.get(GET_SCORES_DATES);
     return response.data;
}
export const getScoresByDate = async (data) => {
    return await axios.get(GET_SCORES_BY_DATE, {
        params: {
            entered_date : data
        }
    }).then(res => res.data);
}

export const deleteScore = async (data)  => {
    return await axios.delete(DELETE_SCORE, {
        params: {
            score_id: data
        }
    }).then(res => res.data);
}

export const updateScoreById = async (data)  => {
    return await axios.patch(UPDATE_SCORE, {
        data,
        params: {
            score_id: data
        }
    }).then(res => res.data);
}
