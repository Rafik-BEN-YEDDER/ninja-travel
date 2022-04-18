import { FAIL, LOAD, LOG_OUT, SIGN_IN, SIGN_UP } from "../actionTypes/admin";
import axios from "axios";

export const signupAdmin = (newAdmin) => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    let result = await axios.post("/api/projet/signupAdmin", newAdmin);
    dispatch({
      type: SIGN_UP,
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: FAIL,
      payload: error.response.data.errors,
    });
  }
};
export const signinAdmin = (admin) => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    let result = await axios.post("/api/projet/signinAdmin", admin);
    dispatch({
      type: SIGN_IN,
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: FAIL,
      payload: error.response.data.errors,
    });
  }
};

export const logOut = () => async (dispatch) => {
  dispatch({ type: LOAD });
  dispatch( { type: LOG_OUT });
};
