import './App.css';
import "@fortawesome/fontawesome-free"
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";
import Root from "./components/Root";
import EntryFormPage from "./components/EntryFormPage";

function App() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root/>,
            children: [
                {
                    path: '/',
                    element: <EntryFormPage/>
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

export const notification = (text) => {
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