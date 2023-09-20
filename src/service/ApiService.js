import axios from "../api/axios";

const ADD_SCORE = "/add_score"

export const addScore = (data) => {
    return axios.post(ADD_SCORE, data)
}