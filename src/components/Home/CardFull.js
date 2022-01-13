import React from "react";

const CardFull = () => {
  return (
    <div>
      <div className="w-full border border-0 border-solid border-black">
        <div>
          <img
            alt="image text"
            src="https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
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
              <span className="text-justify">
                It's easy to get lost following the intricate, looping, twisting
                filaments in this detailed image of supernova remnant Simeis
                147. Also cataloged as Sharpless 2-240 it goes by the popular
                nickname, the Spaghetti Nebula. Seen toward the boundary of the
                constellations Taurus and Auriga, it covers nearly 3 degrees or
                6 full moons on the sky. That's about 150 light-years at the
                stellar debris cloud's estimated distance of 3,000 light-years.
                This composite includes image data taken through narrow-band
                filters where reddish emission from ionized hydrogen atoms and
                doubly ionized oxygen atoms in faint blue-green hues trace the
                shocked, glowing gas. The supernova remnant has an estimated age
                of about 40,000 years, meaning light from the massive stellar
                explosion first reached Earth 40,000 years ago. But the
                expanding remnant is not the only aftermath. The cosmic
                catastrophe also left behind a spinning neutron star or pulsar,
                all that remains of the original star's core.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFull;
