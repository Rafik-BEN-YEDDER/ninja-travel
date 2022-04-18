import axios from "axios";

import { ADD, DELETE, EDIT, FAIL, GET, LOAD } from "../actionTypes/voyage";

export const addvoyage = (newVoyage) => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    let result = await axios.post("/api/projet/addvoyage", newVoyage);
    dispatch({
      type: ADD,
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: FAIL,
      payload: error.response.data.errors,
    });
  }
};
export const editvoyage = (voyage) => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    let result = await axios.patch(
      `/api/projet/editvoyage/${voyage._id}`,
      voyage
    );
    dispatch({
      type: EDIT,
      payload: result.data,
    });
    dispatch(getvoyage());
  } catch (error) {
    dispatch({
      type: FAIL,
      payload: error.response.data.errors,
    });
  }
};
export const getvoyage = () => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    let result = await axios.get("/api/projet/voyageliste");
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
export const deletevoyage = (voyage) => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    let result = await axios.delete(
      `/api/projet/deletevoyage/${voyage._id}`,
      voyage
    );

    dispatch({
      type: DELETE,
      payload: result.data,
    });
    dispatch(getvoyage());
  } catch (error) {
    dispatch({
      type: FAIL,
      payload: error.response.data.errors,
    });
  }
};
