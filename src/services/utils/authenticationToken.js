import axios from 'axios';
 
export default function authenticationToken(token) {//it used for securely storing the data
    if(token) {
        axios.defaults.headers.common['Authorization'] = `${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}