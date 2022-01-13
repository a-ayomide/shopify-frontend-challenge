import React from "react";
import CardFull from "../../components/Home/CardFull";

const FullContent = () => {
  const verticalLine = {
    border: "1px solid transparent",
    backgroundColor: "rgba(80, 111, 130, 0.1)",
    height: "700px",
  };
  return (
    <div className="flex mt-10">
      <div className="mx-2 " style={verticalLine}></div>
      <CardFull />
    </div>
  );
};

export default FullContent;
