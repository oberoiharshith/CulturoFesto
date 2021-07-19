import * as AT from "./authenticationTypes"; //if incase AT is not taken as alias,then variable will be called using authenticationtypes.variable
import axios from "axios"; // backend linking like get,put,post,delete

export const authenticateUser = (gnUid, gnPassword) => {
  const credentials = {
    gnUid: gnUid,
    gnPassword: gnPassword,
  };
  return (dispatch) => {
    dispatch({
      type: AT.LOGIN_REQUEST,
    });
    axios
      .post("http://18.217.32.203:8082/home/login", credentials)
      .then((response) => {
        let token = response.data;
        console.log(response.data);
        localStorage.setItem("jwtToken", token);
        dispatch(success(token));
      })
      .catch((error) => {
        dispatch(failure());
      });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({
      type: AT.LOGOUT_REQUEST,
    });
    localStorage.removeItem("jwtToken"); //jwt
    dispatch(success(false));
  };
};

const success = (isLoggedIn) => {
  //if token success payload is keyword
  return {
    type: AT.SUCCESS,
    payload: isLoggedIn,
  };
};

const failure = () => {
  return {
    type: AT.FAILURE,
    payload: false,
  };
};
