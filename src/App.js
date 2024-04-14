import './App.css';
import "@fortawesome/fontawesome-free"
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import {toast, ToastContainer} from "react-toastify";
import Root from "./components/Root";
import EntryFormPage from "./pages/EntryFormPage";
import {FieldsProvider} from "./context/FieldsProvider";
import {ScoresProvider} from "./context/ScoresProvider";
import {SelectedFieldProvider} from "./context/SelectedFieldProvider";
import AdminPage from "./pages/AdminPage";
import React from "react";
import Statistics from "./pages/Statistics";
import {PlayersProvider} from "./context/PlayersProvider";
import PlayersPage from "./pages/PlayersPage";

function App() {

    const router = createBrowserRouter([{
        path: '/', element: <Root/>,
        children:
            [
                {
                    path: '/', element: <EntryFormPage/>
                },
                {
                    path: '/statistics', element: <Statistics/>
                },
                {
                    path: '/admin', element: <AdminPage/>
                },
                {
                    path: '/players', element: <PlayersPage/>
                },
            ]
    }])

    return (<FieldsProvider>
        <ScoresProvider>
            <SelectedFieldProvider>
                <PlayersProvider>
                    <ToastContainer/>
                    <RouterProvider router={router}/>
                </PlayersProvider>
            </SelectedFieldProvider>
        </ScoresProvider>
    </FieldsProvider>)
}

export default App;

export const successNotification = (text) => {
    toast.success(text, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    })
}
export const showNotification = (text) => {
    toast.info(text, {
        position: "bottom-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    })
}

export const errorNotification = (text) => {
    toast.error(text, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    })
}