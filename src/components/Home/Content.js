import React from "react";
import Card from "../../components/Home/Card";

const Content = () => {
  return (
    <div className="">
      <div className="flex flex-wrap flex-start mx-auto">
        <Card />
        <Card />
        <Card />
        <Card />
        <div style={{ width: "23%" }} className="mx-2 mt-10 cursor-pointer">
          <div className="w-full border border-0 border-solid border-black">
            <div>
              <div className="h-40">
                <img
                  className="object-cover h-full w-full"
                  alt="image text"
                  src="https://images.pexels.com/photos/816608/pexels-photo-816608.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                ></img>
              </div>

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
        <div style={{ width: "23%" }} className="mx-2 mt-10 cursor-pointer">
          <div className="w-full border border-0 border-solid border-black">
            <div>
              <div className="h-40">
                <img
                  className="object-cover h-full w-full"
                  alt="image text"
                  src="https://images.pexels.com/photos/2440079/pexels-photo-2440079.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                ></img>
              </div>

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
        <div style={{ width: "23%" }} className="mx-2 mt-10 cursor-pointer">
          <div className="w-full border border-0 border-solid border-black">
            <div>
              <div className="h-40">
                <img
                  className="object-cover h-full"
                  alt="image text"
                  src="https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                ></img>
              </div>

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
      </div>
    </div>
  );
};

export default Content;
