import axios from "../api/axios";


const GET_ALL_FIELDS = "/get_all_fields"
const GET_FIELD = "/get_field"

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