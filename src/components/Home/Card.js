import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/actions/postsActions";

const Card = () => {
  const dispatch = useDispatch();
  const postsReducer = useSelector(({ postsReducer }) => postsReducer);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <div style={{ width: "23%" }} className="mx-2 mt-10 cursor-pointer">
      <div className="w-full border border-0 border-solid border-black">
        <div>
          <div className="h-40">
            <img
              className="object-cover h-full w-full"
              alt="nasa"
              src={postsReducer.posts.url}
            ></img>
          </div>

          <div className="mt-0">
            <span className="text-xs" style={{ color: "gray" }}>
              Credit: {postsReducer.posts.copyright}
            </span>
          </div>
        </div>
        <div>
          <div>
            <h2 className="mt-3 font-bold">{postsReducer.posts.title}</h2>
            <div className="mt-2 text-sm">
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
