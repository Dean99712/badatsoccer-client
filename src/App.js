import './App.css';
import "@fortawesome/fontawesome-free"
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";
import Root from "./components/Root";
import EntryFormPage from "./pages/EntryFormPage";
import Statistics from "./pages/StatisticsPage";
import {FieldsProvider} from "./context/FieldsProvider";
import {ScoresProvider} from "./context/ScoresProvider";
import {SelectedFieldProvider} from "./context/SelectedFieldProvider";
import AdminPage from "./pages/AdminPage";

function App() {

    const router = createBrowserRouter([{
        path: '/', element: <Root/>, children: [{
            path: '/', element: <EntryFormPage/>
        },
            {
                path: '/statistics', element: <Statistics/>
            },
            {
                path: '/admin', element: <AdminPage/>
            },
        ]
    }])

    return (<FieldsProvider>
        <ScoresProvider>
            <SelectedFieldProvider>
                <RouterProvider router={router}/>
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