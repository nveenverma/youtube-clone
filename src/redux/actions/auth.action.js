import firebase from 'firebase/app'
import auth from '../../firebase'
import { LOAD_PROFILE, LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from '../actionType';

// Following Action Creator function is exported and it  dispatches 
// several smaller actions to the reducer, with appropriate type and payload
// one after another while logging in the user 
export const login = () => async dispatch => {
    
    try {

        // Action to request Login
        dispatch({
            type: LOGIN_REQUEST
        })

        // Steps to open the pop-up for logging in and storing the result
        const provider = new firebase.auth.GoogleAuthProvider();
        const res = await auth.signInWithPopup(provider)

        // Storing the accessToken and profile from the result
        const accessToken = res.credential.accessToken;
        const profile = {
            name: res.user.displayName,
            photoURL: res.additionalUserInfo.profile.picture,
        }

        // Action to inform login is successful and send the access token
        dispatch({
            type: LOGIN_SUCCESS,
            payload: accessToken
        })

        dispatch({
            type: LOAD_PROFILE,
            payload: profile
        })

    } catch (error) {
        console.log(error.message)
        dispatch({
            type: LOGIN_FAILED,
            payload: error.message
        })
    }

}