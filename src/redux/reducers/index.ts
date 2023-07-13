import dashboard from "../reducers/dashboard";
import appConfig from "./appConfig";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  dashboard,
  appConfig
});

export default rootReducer;
