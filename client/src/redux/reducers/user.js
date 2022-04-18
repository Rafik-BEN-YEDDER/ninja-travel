import {
  LOAD,
  SIGN_IN,
  SIGN_UP,
  FAIL,
  LOG_OUT,
  EDIT,
  GET,
  DELETE,
} from "../actionTypes/user";

const intialeState = {
  user: {},
  users: [],
  load: false,
  errors: [],
  isAuthUser: false,
};

const userReducer = (state = intialeState, { type, payload }) => {
  switch (type) {
    case LOAD:
      return { ...state, load: true };
    case SIGN_IN:
      localStorage.setItem("token", payload.token);
      return { ...state, load: false, user: payload.user, isAuthUser: true };
    case SIGN_UP:
      localStorage.setItem("token", payload.token);
      return { ...state, load: false, user: payload.user, isAuthUser: true };
    case EDIT:
      return { ...state, load: false, user: payload.user };
    case GET:
      return { ...state, load: false, users: payload.users };
    case DELETE:
      return { ...state, load: false, voyage: payload.voyage };
    case FAIL:
      return { ...state, load: false, errors: payload };
    case LOG_OUT:
      localStorage.removeItem("token");
      return { user: {}, load: false, errors: [], isAuthUser: false };
    default:
      return state;
  }
};

export default userReducer;
