import React from "react";

const Card = () => {
  return (
    <div style={{ width: "23%" }} className="mx-2 mt-10 cursor-pointer">
      <div className="w-full border border-0 border-solid border-black">
        <div>
          <img
            alt="image text"
            src="https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          ></img>
          <div className="mt-0">
            <span className="text-xs" style={{ color: "gray" }}>
              Credit: Nasa's Image Api of the day
            </span>
          </div>
        </div>
        <div>
          <div>
            <h2 className="mt-3 font-bold">
              Curiosity Rover - Front Hazard Avoidance Camera
            </h2>
            <div className="mt-2 text-sm">
              <span style={{ fontSize: "12px", color: "gray" }}>
                2021-09-01
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
