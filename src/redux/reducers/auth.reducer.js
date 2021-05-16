import { 
    LOAD_PROFILE, 
    LOGIN_FAILED, 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    LOG_OUT
} from "../actionType"

// Following stores the state before action gets dispotched to the reducer
const initialState = {
    accessToken: localStorage.getItem('ytc-access-token') 
        ? localStorage.getItem('ytc-access-token') 
        : null,
    user : localStorage.getItem('ytc-user') 
        ? JSON.parse(localStorage.getItem('ytc-user')) 
        : null,
    loading: false
}

// Reducer updates the store based on the action and the payload passed
export const authReducer = (prevState = initialState, action) => {

    // De-structure the type and payload from the action passed 
    const {type, payload} = action

    // Conditionally run the code based on the type of action
    switch(type) {

        // Requesting User Login
        case LOGIN_REQUEST:
            return {
                ...prevState,
                loading: true
            }

        // User Login Successful
        case LOGIN_SUCCESS:
            return {
                ...prevState,
                accessToken: payload,
                loading: false
            }
        // User Login Failed
        case LOGIN_FAILED:
            return {
                ...prevState,
                accessToken: null,
                loading: false,
                error: payload
            }

        // Loading User Profile
        case LOAD_PROFILE:
            return {
                ...prevState,
                user: payload
            }       
        
        // Logging out the User
        case LOG_OUT: 
            return {
                ...prevState,
                accessToken: null,
                user : null,                
            }
    
        default:
            return prevState
    }
}