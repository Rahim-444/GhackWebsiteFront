import React from "react";
import Motocycle from "../assets/home-page-assets/motocycle";

const Offers = () => {
  return (
    <>
      <h1 className="text-custom-blue text-3xl font-semibold lowercase ">
        we offer
      </h1>
      <hr className="bg-custom-orange h-2 rounded-full w-14 " />
      <div className="px-14">
        <div className="flex justify-between items-center">
          <div className="w-1/2">
            <h1 className="text-custom-orange text-3xl font-semibold ">
              Track Your Delivery
            </h1>
            <p className="text-custom-grey">
              Track yo  ur package in real-time on our interactive map, from the
              moment it leaves the store to your doorstep
            </p>
          </div>
          <div >
            <Motocycle />
          </div>
        </div>
      </div>
    </>
  );
};

export default Offers;
