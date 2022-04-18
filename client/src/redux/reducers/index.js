import { combineReducers } from "redux";
import adminReducer  from "./admin";
import userReducer  from "./user";
import voyageReducer  from "./voyage";
const rootReducer = combineReducers({
  adminReducer,userReducer,voyageReducer,
});

export default rootReducer;
