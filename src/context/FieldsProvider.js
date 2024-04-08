import {createContext, useState} from "react";
import {useQuery} from "react-query";
import {getAllFieldsByDate} from "../service/FieldService";
import {formatDate} from "../pages/EntryFormPage";

const FieldsContext = createContext({})

export const FieldsProvider = ({children}) => {

    const [fields, setFields] = useState([]);
    const [date, setDate] = useState(localStorage.getItem('selectedDate'));

    useQuery(['fields', date, fields], () => getAllFieldsByDate(formatDate(date)), {
        onSuccess: setFields,
    });

    return (
        <FieldsContext.Provider value={{fields, setFields, date, setDate}}>
            {children}
        </FieldsContext.Provider>
    )
}

export default FieldsContext