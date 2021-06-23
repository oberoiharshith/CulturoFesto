import {LOGIN_REQUEST, LOGOUT_REQUEST, SUCCESS, FAILURE} from './authenticationTypes';
 
const initialState = {
    isLoggedIn: ''
};
 
const reducer = (state = initialState, action) => {//function reducer,switch for checking states
    switch(action.type) {
        case LOGIN_REQUEST:
        case LOGOUT_REQUEST://return is for both login and logout
            return {
                ...state//... compresses as group
            };
        case SUCCESS: //return is for both sucess and failure
        case FAILURE: 
            return {
                isLoggedIn: action.payload
            };
        default:
            return state;
    }
};
 
export default reducer;