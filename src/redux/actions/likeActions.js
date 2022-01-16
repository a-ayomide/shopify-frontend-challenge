import { IS_LIKED } from "../types";

const isLiked = () => dispatch => {
  dispatch({ type: IS_LIKED, payload: isLiked });
};

export { isLiked };
