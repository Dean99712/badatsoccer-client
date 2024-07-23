import React, {useEffect, useState} from 'react';
import {useQuery} from "react-query";
import {clearLog, getSheetLog} from "../service/LogService";
import LogViewer from "../components/LogViewer";
import '../styles/AdminPage.css'
import {errorNotification, successNotification} from "../App";
import {ToastContainer} from "react-toastify";
import {insertTeamSelectionSheetData} from "../service/SheetService";

const AdminPage = () => {

        const [logData, setLogData] = useState('');
        const [logName, setLogName] = useState('');
        const [isDisabled, setIsDisabled] = useState(false);

        useQuery({
            queryFn: getSheetLog,
            queryKey: ['sheetLog'],
            onSuccess: (data) => {
                const logData = data.data
                setLogData(logData.log_data)
                setLogName(logData.log_name)
            },
            onError: (error) => {
                errorNotification(`Error loading log data: ${error.message}`)
            },
            refetchInterval: 3000,

        })

        useEffect(() => {
            logName && successNotification(`Log file loaded successfully! : ${logName}`)
        }, [logData, logName]);


        async function loadSheet() {
            setIsDisabled(true)
            setTimeout(() => setIsDisabled(false), 5000);
            if (isDisabled) {
                errorNotification("Please wait for 5 seconds before reloading the log file!");
            } else {
                try {
                    const response = await insertTeamSelectionSheetData();
                    successNotification(response.data.message)
                } catch (e) {
                    errorNotification(`Error loading sheet data: ${e.message}`)
                    return e.message
                }
            }
        }

        async function clearLogData() {
            try {
                successNotification(`Log file cleared successfully!`);
                return await clearLog()
            } catch (e) {
                errorNotification(`Error clearing log data: ${e.message}`)
                return {error: e.message, code: 500}
            }
        }

        return (
            <div className="admin-container">
                <ToastContainer/>
                <span className='sheet-container'>
                <button id="load-btn" disabled={isDisabled} onClick={() => loadSheet()}>Load Data</button>
                <button id="clear-btn" onClick={() => clearLogData()}>Clear log</button>
            </span>
                {logData && <LogViewer logs={logData}/>}
            </div>
        );
    }
;

export default AdminPage;
