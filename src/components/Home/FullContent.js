import React from "react";
import CardFull from "../../components/Home/CardFull";

const FullContent = () => {
  return (
    <div
      style={{ overflowY: "auto", height: "90vh" }}
      className="flex mt-10 px-3"
    >
      <CardFull />
    </div>
  );
};

export default FullContent;
