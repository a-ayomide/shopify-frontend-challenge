import { FETCH_POSTS } from "../types";

const initialState = {
  posts: [],
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, posts: action.payload.data };
    default:
      return state;
  }
};

export default posts;
