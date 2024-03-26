import React, {useState} from 'react';
import {useQuery} from "react-query";
import {clearLog, getSheetLog} from "../service/LogService";
import LogViewer from "../components/LogViewer";
import '../styles/AdminPage.css'
import {successNotification} from "../App";

const AdminPage = () => {

    const [logData, setLogData] = useState('')

    useQuery({
        queryFn: getSheetLog,
        queryKey: ['sheetLog'],
        onSuccess: (data) => {
            let logData = data.data
            setLogData(logData.log_data)
            successNotification(`LOG file: ${logData.log_name}`)
        },
        refetchInterval: 3000,
    })

    function clearLogData() {
        clearLog().then(res => {
            successNotification(res.data.message)
        }).catch(err => {
            successNotification(err.response.data.message)
        });
    }

    return (
        <div className="admin-container">
            <span className='sheet-container'>
                <button id="load-btn">Load Data</button>
                <button id="clear-btn" onClick={() => clearLogData()}>Clear log</button>
            </span>
            {logData && <LogViewer logs={logData}/>}
        </div>
    );
};

export default AdminPage;
