import {createContext, useEffect, useState} from "react";

const FieldsContext = createContext({})

export const FieldsProvider = ({children}) => {

    const [fields, setFields] = useState(JSON.parse(localStorage.getItem('fields')) || []);

    useEffect(() => {
        localStorage.setItem('fields', JSON.stringify(fields));
    }, [fields]);

    return (
        <FieldsContext.Provider value={{fields, setFields}}>
            {children}
        </FieldsContext.Provider>
    )
}

export default FieldsContext