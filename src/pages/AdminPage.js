import React, {useEffect, useState} from 'react';
import {useQuery} from "react-query";
import {clearLog, getSheetLog} from "../service/LogService";
import LogViewer from "../components/LogViewer";
import '../styles/AdminPage.css'
import {successNotification} from "../App";
import {ToastContainer} from "react-toastify";

const AdminPage = () => {

        const [logData, setLogData] = useState('');
        const [logName, setLogName] = useState('');

        useQuery({
            queryFn: getSheetLog,
            queryKey: ['sheetLog'],
            onSuccess: (data) => {
                let logData = data.data
                setLogData(logData.log_data)
                setLogName(logData.log_name)
            },
            refetchInterval: 3000,
        })

        useEffect(() => {
            logName && successNotification(`Log file loaded successfully! : ${logName}`)
        }, [logData, logName]);

        async function clearLogData() {
            successNotification(`Log file cleared successfully!`);
            return await clearLog()
        }

        return (
            <div className="admin-container">
                <ToastContainer/>
                <span className='sheet-container'>
                <button id="load-btn">Load Data</button>
                <button id="clear-btn" onClick={() => clearLogData()}>Clear log</button>
            </span>
                {logData && <LogViewer logs={logData}/>}
            </div>
        );
    }
;

export default AdminPage;
