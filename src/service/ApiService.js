import axios from "../api/axios";

const ADD_SCORE = "/add_score"
const GET_SCORES = "/get_scores"

export const addScore = (data) => {
    return axios.post(ADD_SCORE, data)
}

export const getScores = () => {
    return axios.get(GET_SCORES).then(res => res.data)
}