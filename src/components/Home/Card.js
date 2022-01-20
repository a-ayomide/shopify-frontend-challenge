import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useDispatch } from "react-redux";
import { updateLike, fetchPost } from "../../redux/actions/postsActions";
import PropTypes from "prop-types";

const Card = ({ item, id }) => {
  const dispatch = useDispatch();
  const handleLike = () => {
    dispatch(updateLike({ id }));
  };

  const handleFullView = () => {
    dispatch(fetchPost({ post: item, id: id, fullViewIsOpen: true }));
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: "3fr 1fr",
  };
  return (
    <>
      <div className="mx-2 w-full flex-grow sm:w-1/5 mb-8">
        <div className="w-full border border-0 border-solid border-black">
          <div>
            <div className="h-60" onClick={handleFullView}>
              <img
                className="object-cover h-full cursor-pointer w-full"
                alt="nasa"
                src={item[10]}
              ></img>
            </div>

            <div style={grid} className="mt-2 grid">
              <div className="grid-cols-1 grid ">
                <div>
                  <h2 style={{ fontSize: "18px" }} className="font-bold">
                    {item[1]}
                  </h2>
                </div>
              </div>
              <div className="grid-cols-1 grid justify-items-end">
                <button onClick={handleLike}>
                  {item?.[13] ? (
                    <FavoriteIcon fontSize="large" style={{ color: "red" }} />
                  ) : (
                    <FavoriteBorderIcon fontSize="large" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
Card.propTypes = {
  item: PropTypes.array,
  id: PropTypes.string,
};
export default Card;
