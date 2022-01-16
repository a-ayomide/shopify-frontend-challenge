/* eslint-disable indent */
import { IS_LIKED } from "../types";

const initialState = {
  isLiked: {},
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case IS_LIKED:
      return { ...state, isLiked: action.payload };
    default:
      return state;
  }
};

export default posts;
