import { 
    LOAD_PROFILE, 
    LOGIN_FAILED, 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS 
} from "../actionType"

// Following stores the state before action gets dispotched to the reducer
const initialState = {
    accessToken: null,
    user: null,
    loading: false
}

// Reducer updates the store based on the action and the payload passed
export const authReducer = (prevState = initialState, action) => {

    // De-structure the type and payload from the action passed 
    const {type, payload} = action

    // Conditionally run the code based on the type of action
    switch(type) {
        case LOGIN_REQUEST:
            return {
                ...prevState,
                loading: true
            }

        case LOGIN_SUCCESS:
            return {
                ...prevState,
                accessToken: payload,
                loading: false
            }

        case LOGIN_FAILED:
            return {
                ...prevState,
                accessToken: null,
                loading: false,
                error: payload
            }
        case LOAD_PROFILE:
            return {
                ...prevState,
                user: payload
            }            
    
        default:
            return prevState
    }
}