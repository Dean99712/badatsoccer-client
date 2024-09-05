import React, {useState} from 'react';
import {useQuery} from "react-query";
import {clearLog, getSheetLog} from "../service/LogService";
import LogViewer from "../components/LogViewer";
import '../styles/AdminPage.css'
import {errorNotification, successNotification} from "../App";
import {ToastContainer} from "react-toastify";
import {insertTeamSelectionSheetData} from "../service/SheetService";
import {updatePlayersImagesAzure} from "../service/ImagesService";
import DropdownMenu from "../components/DropdownMenu";

const AdminPage = () => {

        const [logData, setLogData] = useState('');
        const [logName, setLogName] = useState('');
        const [isDisabled, setIsDisabled] = useState(false);
        const [isOpen, setIsOpen] = useState(false);

        const toggleDropdown = () => {
            setIsOpen(!isOpen);
        };

        const closeDropdown = () => {
            setIsOpen(false);
        };

        const updatePlayersImages = async () => {
            const response = await updatePlayersImagesAzure()
            console.log(response)
        }

        useQuery({
            queryFn: getSheetLog,
            queryKey: ['sheetLog', logData, logName],
            onSuccess: (data) => {
                const logData = data.data
                setLogData(logData.log_data)
                setLogName(logData.log_name)
            },
            onError: (error) => {
                errorNotification(`Error loading log data: ${error.message}`)
            },
            refetchInterval: 60000,

        })

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

    const itemsArray = [
        {
            "option": "Load Data",
            "fn": () => loadSheet(),
            "disabled": isDisabled,
            "id": 'load-btn'
        },
        {
            "option": "Update Photos",
            "fn": () => updatePlayersImages(),
            "disabled": "",
            "id": 'load-btn'
        },
        {
            "option": "Clear Log",
            "fn": () => clearLogData(),
            "disabled": "",
            "id": 'clear-btn'
        }
    ];

        return (
            <div className="admin-container">
                <ToastContainer/>
                <span className='sheet-container'>
                    <DropdownMenu
                        list={itemsArray}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        toggleDropdown={toggleDropdown}
                        closeDropdown={closeDropdown}
                    />
            </span>
                {logData && <LogViewer logs={logData}/>}
            </div>
        );
    }
;

export default AdminPage;
