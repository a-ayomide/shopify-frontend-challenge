import { combineReducers } from "redux";
import loadingReducer from "./loadingReducer";
import postsReducer from "./postsReducer";
import likeReducer from "./likeReducer";

export default combineReducers({
  loadingReducer,
  postsReducer,
  likeReducer,
});
