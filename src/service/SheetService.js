import axios from "../api/axios";

const INSERT_SHEET_DATA = '/insert_sheet_data'

export const insertSheetData = async () => {
    return await axios.get(INSERT_SHEET_DATA);
}