import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost, updateLike } from "../../redux/actions/postsActions";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CloseIcon from "@material-ui/icons/Close";

const CardFull = () => {
  const dispatch = useDispatch();
  const fullPost = useSelector(({ postsReducer }) => postsReducer);
  const data = fullPost.post;
  const id = fullPost.id;
  const closeFullMobile = () => {
    dispatch(fetchPost({ fullViewIsOpen: false }));
  };
  const handleLike = () => {
    dispatch(updateLike({ id: id }));
  };
  const grid = {
    display: "grid",
    gridTemplateColumns: "3fr 1fr",
  };
  return (
    <div>
      <div onClick={closeFullMobile} className="md:hidden float-right -mt-1">
        <CloseIcon />
      </div>

      <div className="w-full border border-0 border-solid border-black">
        <div>
          <img alt="nasa" src={data?.[10]}></img>
        </div>
        <div>
          <div>
            <div style={grid} className="mt-2 grid">
              <div className="grid-cols-1 grid ">
                <div>
                  <h2 style={{ fontSize: "18px" }} className="font-bold">
                    {data?.[1]}
                  </h2>
                </div>
              </div>
              <div className="grid-cols-1 grid justify-items-end">
                <button onClick={handleLike}>
                  {data?.[13] ? (
                    <FavoriteIcon fontSize="large" style={{ color: "red" }} />
                  ) : (
                    <FavoriteBorderIcon fontSize="large" />
                  )}
                </button>
              </div>
            </div>
            <div className="mt-2 text-sm">
              {/* <span>{singleData[2]}</span> */}
            </div>
            <div className="mt-5 overflow-y-scroll h-64 md:h-96">
              <span className="text-justify ">{data?.[3]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFull;
