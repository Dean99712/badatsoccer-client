import {createContext, useState} from "react";

const SelectedFieldContext = createContext({})

export const SelectedFieldProvider = ({children}) => {
    const [selectedField, setSelectedField] = useState(localStorage.getItem("selectedField") || '');

    return (
        <SelectedFieldContext.Provider value={{selectedField, setSelectedField}}>
            {children}
        </SelectedFieldContext.Provider>
    )
}

export default SelectedFieldContext