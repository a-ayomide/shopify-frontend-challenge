import React, { useState, useEffect } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import { useLocation } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { isLiked } from "../../redux/actions/likeActions";

const Card = ({ postsReducer }) => {
  // const dispatch = useDispatch();
  // const location = useLocation();
  // const id = location.pathname.split("/")[2];
  const [isLiked, setIsLiked] = useState(false);
  const handleToggle = () => {
    setIsLiked(!isLiked);
    localStorage.setItem("isLiked", JSON.stringify(isLiked));
    console.log(isLiked);
  };
  // console.log(location.pathname)
  const storageData = JSON.parse(localStorage.getItem("isLiked"));
  useEffect(() => {
    if (localStorage.getItem(isLiked)) {
      setIsLiked(storageData);
    }
    return;
  }, [storageData, isLiked]);
  // style={{ width: "23%" }}
  const grid = {
    display: "grid",
    gridTemplateColumns: "3fr 1fr",
  };
  return (
    <div className="mx-2 w-full sm:w-1/4 cursor-pointer">
      <div className="w-full border border-0 border-solid border-black">
        <div>
          <div className="h-60">
            <img
              className="object-cover h-full w-full"
              alt="nasa"
              src={postsReducer.posts.url}
            ></img>
          </div>

          <div style={grid} className="mt-1 grid">
            <div className="flex justify-center items-center">
              <span className="text-xs" style={{ color: "gray" }}>
                Credit: {postsReducer.posts.copyright}
              </span>
            </div>
            <div className="grid-cols-1 grid justify-items-end">
              <button onClick={handleToggle}>
                {storageData ? (
                  <FavoriteIcon
                    onclick={handleToggle}
                    fontSize="large"
                    style={{ color: "red" }}
                  />
                ) : (
                  <FavoriteBorderIcon fontSize="large" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2 style={{ fontSize: "20px" }} className="mt-3 font-bold">
              {postsReducer.posts.title}
            </h2>
            <div className="">
              <span style={{ fontSize: "12px", color: "gray" }}>
                {postsReducer.posts.date}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
