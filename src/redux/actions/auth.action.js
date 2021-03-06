import firebase from 'firebase/app'
import auth from '../../firebase'
import { LOAD_PROFILE, LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from '../actionType';

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

        // Persist user data in local storage to prevent user from logging out
        // when window is closed or reloaded
        localStorage.setItem('ytc-access-token', accessToken);
        localStorage.setItem('ytc-user', JSON.stringify(profile));

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

// Following Action Creator function is exported and it  dispatches 
// LOG_OUT action to the reducer, and clears the local storage
// while logging out the user
export const logout = () => async dispatch => {
    
    await auth.signOut();
    dispatch({
        type: LOG_OUT
    })

    localStorage.removeItem('ytc-access-token');
    localStorage.removeItem('ytc-user');
}