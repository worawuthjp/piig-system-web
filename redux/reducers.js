import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import counterReducer from "redux/counter/reducer";

const reducers = combineReducers({
  counter: counterReducer,
});

const mainReducer = (state = {}, action) =>
  action.type === HYDRATE
    ? { ...state, ...action.payload }
    : reducers(state, action);

export default mainReducer;
