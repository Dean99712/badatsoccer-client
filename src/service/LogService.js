import axios from "../api/axios";

const GET_LOG = '/log';

export const getSheetLog = async () => {
    return await axios.get(GET_LOG)
}