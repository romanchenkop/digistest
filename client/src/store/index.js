import { combineReducers } from 'redux';
import authReducer from '../modules/authReducer';
import mapReducer from '../modules/mapReducer';

export default combineReducers({
  auth: authReducer,
  map: mapReducer,
});
