import React from "react";

const CardFull = () => {
  return (
    <div>
      <div className="w-full border border-0 border-solid border-black">
        <div>
          <img
            alt="image text"
            src="https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          ></img>
        </div>
        <div>
          <div>
            <h2 className="mt-3 font-bold">
              Curiosity Rover - Front Hazard Avoidance Camera
            </h2>
            <div className="mt-2 text-sm">
              <span>2021-09-01</span>
            </div>
            <div className="mt-5">
              <span>
                Nasa has embarked on the months-long, painstaking process of
                bringing its newly launched James Webb space telescope into
                focus, a task due for completion in time for the revolutionary
                eye in the sky to begin peering into the cosmos by early summer.
                Mission control engineers at Nasa’s Goddard space flight centre
                in Greenbelt, Maryland, began by sending their initial commands
                to tiny motors called actuators that slowly position and
                fine-tune the telescope’s principal mirror.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFull;
