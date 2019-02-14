import { combineReducers } from 'redux';

import authReducer from "./authReducer";
import projectReducer from "./projectReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  prj: projectReducer
});

export default rootReducer;

