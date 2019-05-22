import { combineReducers } from 'redux';
import authReducer from '../modules/auth/reducer';
import mapReducer from '../modules/map/reducer';

export default combineReducers({
  auth: authReducer,
  map: mapReducer,
});
