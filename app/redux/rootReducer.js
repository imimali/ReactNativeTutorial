import { combineReducers } from 'redux';
import homeReducer from "../modules/home/reducer";

// Combine all the reducers
const rootReducer = combineReducers({ homeReducer});

export default rootReducer;