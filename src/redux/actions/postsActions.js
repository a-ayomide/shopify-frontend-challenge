import { FETCH_POSTS, IS_LIKED, FETCH_POST } from "../types";
import ApiService from "../../utils/apiService";
import { getError, clear } from "./alertActions";
import { startLoading, stopLoading } from "./loadingActions";

export const fetchPosts = () => async dispatch => {
  dispatch(startLoading());

  try {
    let resp = [];
    const storedData = JSON.parse(localStorage.getItem("isLiked"));

    if (storedData != null) {
      resp = storedData;
    } else {
      const res = await ApiService.fetchPosts();
      resp = res.data;
    }
    if (resp) {
      dispatch(stopLoading());
      return dispatch({ type: FETCH_POSTS, payload: resp });
    }
  } catch (error) {
    dispatch(stopLoading());
    if (error) {
      dispatch(getError("Network Error"));
      dispatch(clear());
    } else {
      dispatch(getError(error.response.data.error.message));
      dispatch(clear());
    }
  }
};

export const updateLike = data => async dispatch => {
  dispatch({ type: IS_LIKED, payload: data });
};

export const fetchPost = data => dispatch => {
  dispatch({ type: FETCH_POST, payload: data });
};
