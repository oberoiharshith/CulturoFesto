import {combineReducers} from 'redux'; // predefined utility logic for reducer ,we can also use our custoimize logic for this utility
import authenticationReducer from './authentication/authenticationReducer';
 
const rootReducer = combineReducers({
    auth: authenticationReducer
});
 
export default rootReducer;