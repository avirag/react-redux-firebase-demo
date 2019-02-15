import { combineReducers } from 'redux';

import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  prj: projectReducer,
  frs: firestoreReducer,
  fb: firebaseReducer
});

export default rootReducer;

