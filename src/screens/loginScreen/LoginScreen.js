import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { login } from '../../redux/actions/auth.action';
import './_loginScreen.scss'

const LoginScreen = () => {
    
    // Creating dispatch function via useDispatch Hook
    const dispatch = useDispatch();
    
    // Dispatching the Action Creator login using the 
    // onClick handler function handleLogin
    const handleLogin = () => dispatch(login());
    
    // Get accessToken from Central Store 
    const accessToken = useSelector(state => state.auth.accessToken);
    
    // Create history variable via useHistory Hook
    const history = useHistory();

    // Redirect users to Home Page, if the accessToken is not null 
    // as soon as the page loads, using history and accessToken values
    useEffect(() => {
        if (accessToken) {
            history.push('/')
        }
    }, [accessToken, history])
    

    return (
        <div className="login">
            <div className="login__container">
                <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
                <button onClick={handleLogin}>Login with Google</button>
                <p>This project is made using Youtube Data API</p>
            </div>
        </div>
    )
}

export default LoginScreen
