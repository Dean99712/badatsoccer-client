import axios from "../api/axios";

const ADD_SCORE = "/add_score"
const GET_SCORES = "/get_scores"
const GET_ALL_FIELDS = "/get_all_fields"
const GET_FIELD = "/get_field"

export const addScore = (data) => {
    return axios.post(ADD_SCORE, data)
}

export const getScores = () => {
    return axios.get(GET_SCORES).then(res => res.data)
}

export const getAllFields = () => {
    return axios.get(GET_ALL_FIELDS).then(res => res.data);

}

export const getField = (data) => {
    return axios.get(GET_FIELD, {
        params: {
            field: data
        },
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.data)

}
