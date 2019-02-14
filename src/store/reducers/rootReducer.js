import { combineReducers } from 'redux';

import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  auth: authReducer,
  prj: projectReducer,
  frs: firestoreReducer
});

export default rootReducer;

