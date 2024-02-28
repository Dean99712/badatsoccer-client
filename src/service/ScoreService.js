import axios from "../api/axios";

const ADD_SCORE = "/add_score"
const GET_SCORE_BY_ID = "/get_score_by_id"
const GET_SCORES_BY_FIELD = "/get_scores_by_field_name_and_date"
const GET_SCORES_BY_DATE = "/get_scores_by_date"
const UPDATE_SCORE = "/update_score"
const DELETE_SCORE = "/delete_score"

export const addScore = (data) => {
    return axios.post(ADD_SCORE, data)
}

export const getScoreByFieldName = async (data) => {
    return await axios.get(GET_SCORES_BY_FIELD, {
        params: {
            field: data.selectedField,
            entered_date: data.selectedDate
        }
    }).then(res => res.data);
}

export const getScoresByDate = async (data) => {
    return await axios.get(GET_SCORES_BY_DATE, {
        params: {
            entered_date: data
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

export const deleteScore = async (data) => {
    return await axios.delete(DELETE_SCORE, {
        params: {
            score_id: data
        }
    }).then(res => res.data);
}