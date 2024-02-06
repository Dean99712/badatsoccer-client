import './App.css';
import "@fortawesome/fontawesome-free"
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";
import Root from "./components/Root";
import EntryFormPage from "./components/EntryFormPage";
import LiveGamesPage from "./components/LiveGamesPage";

function App() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root/>,
            children: [
                {
                    path: '/',
                    element: <EntryFormPage/>
                },
                {
                    path: '/live-games',
                    element: <LiveGamesPage/>
                }
            ]
        }
    ])

    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
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