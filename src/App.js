import './App.css';
import "@fortawesome/fontawesome-free"
import {RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import EntryFormPage from "./components/EntryFormPage";
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";

function App() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <EntryFormPage/>,
        }
    ])

    return (
        <RouterProvider router={router}/>
    )
}

export default App;

export const notification = (text) => {
    toast.success(text, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    })
}