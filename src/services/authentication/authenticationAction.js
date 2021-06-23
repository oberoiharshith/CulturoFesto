import * as AT from './authenticationTypes';//if incase AT is not taken as alias,then variable will be called using authenticationtypes.variable
import axios from 'axios';// backend linking like get,put,post,delete
 
export const authenticateUser = (userid, password) => {
    const credentials = {
        userId:userid,
        password:password,
    };
    return dispatch => {
        dispatch({
            type: AT.LOGIN_REQUEST
        });
        axios.post("http://localhost:9090/login", credentials)
            .then(response => {
                let token = response.data;
                console.log(response.data);
                localStorage.setItem('jwtToken', token);
                dispatch(success(token));
               

            })
            .catch(error => {
                dispatch(failure());
            });
    };

};

 
export const logoutUser = () => {
    return dispatch => {
        dispatch({
            type: AT.LOGOUT_REQUEST
        });
        localStorage.removeItem('jwtToken');//jwt
        dispatch(success(false));
    };
};
 
const success = isLoggedIn => {//if token success payload is keyword
    return {
        type: AT.SUCCESS,
        payload: isLoggedIn
    };
};
 
const failure = () => {
    return {
        type: AT.FAILURE,
        payload: false
    };
};