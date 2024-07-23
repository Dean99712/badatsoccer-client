import '../styles/LoginPage.css'
import {useMutation} from "react-query";
import {login} from "../service/UserService";
import useAuth from "../hooks/useAuth";
import {useLocation, useNavigate} from "react-router-dom";
import {errorNotification} from "../App";

const LoginPage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const {setAuth} = useAuth()

    const {mutate, isLoading} = useMutation({
        mutationFn: login,
        mutationKey: ['login'],
        onSuccess: (data) => {
            setAuth(data.data)
            navigate(from, {replace: true});
        },
        onError: (error) => {
            errorNotification(error.response.data.message);
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        mutate(Object.fromEntries(formData.entries()));
    };
    
    return (
        <form onSubmit={(e) => handleSubmit(e)} className="auth-container">
            <h1>Login Page</h1>
            <input type="text" name="gmail" id="gmail" placeholder='User name' required/>
            <input type="password" name="password" id="password" placeholder='Password' required/>
            
            <button type="submit">{isLoading ? 'Submitting...' : 'Submit'}</button>
        </form>
    );
}
export default LoginPage;