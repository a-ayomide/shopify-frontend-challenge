/* eslint-disable indent */
import { FETCH_POSTS, IS_LIKED, FETCH_POST } from "../types";

const initialState = {
  posts: [],
  post: {},
  id: 0,
  fullViewIsOpen: false,
};
const posts = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case FETCH_POST:
      return {
        ...state,
        post: action.payload?.post,
        id: action.payload?.id,
        fullViewIsOpen: action.payload?.fullViewIsOpen,
      };
    case IS_LIKED:
      let position = action.payload.id;
      console.log(state);
      state.posts.results[position][13] = state.posts.results[position][13]
        ? false
        : true;
      localStorage.setItem("isLiked", JSON.stringify(state.posts));
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default posts;
