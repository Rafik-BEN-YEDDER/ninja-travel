import { LOAD, SIGN_IN, SIGN_UP, FAIL, LOG_OUT } from "../actionTypes/admin";

const intialeState = {
  admin: {},
  load: false,
  errors: [],
  isAuth: false,
};

const adminReducer = (state = intialeState, { type, payload }) => {
  switch (type) {
    case LOAD:
      return { ...state, load: true };
    case SIGN_IN:
      localStorage.setItem("token", payload.token);
      return { ...state, load: false, admin: payload.admin, isAuth: true };
    case SIGN_UP:
      localStorage.setItem("token", payload.token);
      return { ...state, load: false, admin: payload.admin, isAuth: true };
    case FAIL:
      return { ...state, load: false, errors: payload };
    case LOG_OUT:
      localStorage.removeItem("token");
      return { admin: {}, load: false, errors: [], isAuth: false };
    default:
      return state;
  }
};

export default adminReducer;
