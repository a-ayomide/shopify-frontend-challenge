import React from "react";
import Heading from "../../components/Home/Heading";
import Content from "../../components/Home/Content";
import FullContent from "../../components/Home/FullContent";

const Home = () => (
  <>
    <Heading />
    <div className="flex">
      <div className="w-9/12">
        <Content />
      </div>

      <div className="w-3/12">
        <FullContent />
      </div>
    </div>
  </>
);

export default Home;
