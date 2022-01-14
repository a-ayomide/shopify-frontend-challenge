import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/actions/postsActions";

const CardFull = () => {
  const dispatch = useDispatch();
  const postsReducer = useSelector(({ postsReducer }) => postsReducer);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <div>
      <div className="w-full border border-0 border-solid border-black">
        <div>
          <img alt="nasa" src={postsReducer.posts.url}></img>
        </div>
        <div>
          <div>
            <h2 className="mt-3 font-bold">{postsReducer.posts.title}</h2>
            <div className="mt-2 text-sm">
              <span>{postsReducer.posts.date}</span>
            </div>
            <div className="mt-5">
              <span className="text-justify">
                {postsReducer.posts.explanation}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFull;
