import React from "react";

const Card = () => {
  return (
    <div>
      <div className="w-3/12 border border-0 border-solid border-black">
        <div>
          <img src="https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"></img>
        </div>
        <div>
          <h2 className="mt-3 font-bold">
            Curiosity Rover - Front Hazard Avoidance Camera
          </h2>
          <div className="mt-2 text-sm">
            <span>2021-09-01</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
