import { combineReducers } from "redux";
import loadingReducer from "./loadingReducer";
import postsReducer from "./postsReducer";

export default combineReducers({
  loadingReducer,
  postsReducer,
});
