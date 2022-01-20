import React, { useEffect } from "react";
import Heading from "../../components/Home/Heading";
import FullContent from "../../components/Home/FullContent";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/actions/postsActions";
import Card from "../../components/Home/Card";
import Skeleton from "../../utils/skeleton";

const Home = () => {
  const loadingReducer = useSelector(({ loadingReducer }) => loadingReducer);
  const dispatch = useDispatch();
  const { posts, fullViewIsOpen } = useSelector(
    ({ postsReducer }) => postsReducer
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const data = posts.results;

  return (
    <>
      <Heading />
      <div className="flex relative">
        <div className={fullViewIsOpen ? "w-9/12" : "w-full"}>
          <div className="flex flex-wrap mx-auto mt-10">
            {loadingReducer.loading ? (
              <Skeleton type="feed" />
            ) : (
              data?.map((item, i) => (
                <Card
                  className="flex justify-center items-center"
                  item={item}
                  key={i}
                  id={i}
                />
              ))
            )}
          </div>
        </div>

        <div
          className={
            fullViewIsOpen
              ? "w-full md:w-3/12 fixed right-0 top-0 md:top-auto bg-white md:bg-transparent "
              : "hidden"
          }
        >
          <FullContent />
        </div>
      </div>
    </>
  );
};

export default Home;
