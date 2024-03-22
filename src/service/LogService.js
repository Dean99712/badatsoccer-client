import axios from "../api/axios";

const SHEET_LOG = '/sheet_log';

export const getSheetLog = async () => {
    return await axios.get(SHEET_LOG)
}