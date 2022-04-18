import { DELETE, EDIT, FAIL, GET, LOAD, LOG_OUT, SIGN_IN, SIGN_UP } from "../actionTypes/user";
import axios from "axios";

export const signup = (newUser) => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    let result = await axios.post("/api/projet/signup", newUser);
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
export const signin = (user) => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    let result = await axios.post("/api/projet/signin", user);
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

export const edituser = (user) => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    let result = await axios.patch(
      `/api/projet/edituser/${user._id}`,
      user
    );
    dispatch({
      type: EDIT,
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: FAIL,
      payload: error.response.data.errors,
    });
  }
};

export const getusers = () => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    let result = await axios.get("/api/projet/userlist");
    dispatch({
      type: GET,
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: FAIL,
      payload: error.response.data.errors,
    });
  }
};



export const deleteuser = (user) => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    let result = await axios.delete(
      `/api/projet/deleteuser/${user._id}`,
      user
    );

    dispatch({
      type: DELETE,
      payload: result.data,
    });
    dispatch(getusers());
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
