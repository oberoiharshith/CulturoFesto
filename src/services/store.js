import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import authenticationToken from './utils/authenticationToken';
 
const store = createStore(rootReducer, applyMiddleware(thunk));
 
if(localStorage.jwtToken) {
    authenticationToken(localStorage.jwtToken);
}
 
export default store;