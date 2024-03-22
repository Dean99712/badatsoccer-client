import React, {useState} from 'react';
import {useQuery} from "react-query";
import {getSheetLog} from "../service/LogService";
import LogViewer from "../components/LogViewer";
import '../styles/AdminPage.css'

const AdminPage = () => {

    const [logData, setLogData] = useState('')

    useQuery({
        queryFn: getSheetLog,
        queryKey: ['sheetLog'],
        onSuccess: (data) => setLogData(data.data),
        refetchInterval: 3000
    })

    return (
        <div className="admin-container">
            <span className='sheet-container'>
                <button>load sheet data</button>
            </span>
            <LogViewer logs={logData}/>
        </div>
    );
};

export default AdminPage;
