import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/actions/postsActions";
import Card from "../../components/Home/Card";
import Skeleton from "../../utils/skeleton";

const Content = () => {
  const loadingReducer = useSelector(({ loadingReducer }) => loadingReducer);
  const dispatch = useDispatch();
  const postsReducer = useSelector(({ postsReducer }) => postsReducer);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <div className="">
      <div className="flex flex-wrap mx-auto">
        {loadingReducer.loading ? (
          <Skeleton type="feed" />
        ) : (
          <Card
            className="flex justify-center items-center"
            postsReducer={postsReducer}
          />
        )}
      </div>
    </div>
  );
};

export default Content;
