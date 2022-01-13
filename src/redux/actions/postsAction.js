import { FETCH_POSTS } from "../types";
import ApiService from "../../utils/apiService";
import { getError, clear } from "./alertActions";
import { startLoading, stopLoading } from "./loadingAction";

export const fetchPosts = () => async dispatch => {
  dispatch(startLoading());

  try {
    const resp = await ApiService.fetchPosts();
    if (resp) {
      dispatch(stopLoading());
      return dispatch({ type: FETCH_POSTS, payload: resp.data.data });
    }
  } catch (error) {
    dispatch(stopLoading());
    if (error.message === "Network Error" || error.response.status === 500) {
      dispatch(getError("Network Error"));
      dispatch(clear());
    } else {
      dispatch(getError(error.response.data.error.message));
      dispatch(clear());
    }
  }
};
