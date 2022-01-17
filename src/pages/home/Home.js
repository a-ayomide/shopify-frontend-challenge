import React from "react";
import Heading from "../../components/Home/Heading";
import Content from "../../components/Home/Content";
// import FullContent from "../../components/Home/FullContent";

const Home = () => {
  // const verticalLine = {
  //   border: "1px solid transparent",
  //   backgroundColor: "rgba(80, 111, 130, 0.1)",
  //   height: "100%",
  //   position: "static",
  // };
  return (
    <>
      <Heading />
      <div className="flex">
        <div className="w-full">
          <Content />
        </div>

        {/* <div className="w-9/12">
          <Content />
        </div>
        <div style={{ width: "5px" }}>
          <div className="mx-2 " style={verticalLine}></div>
        </div> */}

        {/* <div className="w-3/12">
          <FullContent />
        </div> */}
      </div>
    </>
  );
};

export default Home;
