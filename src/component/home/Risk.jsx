import React from "react";
import Motocycle from "../../assets/home-page-assets/motocycle";
import ArrowLtoR from "../../assets/home-page-assets/arrow-l-to-right";
import ArrowRtoL from "../../assets/home-page-assets/arrow-r-to-left";
import PostOffice from "../../assets/home-page-assets/post-office";
import RiskPicture from "../../assets/home-page-assets/risk-picture";

const Risk = () => {
  return (
    <div className="mt-8 relative">
      <h1 className="text-custom-blue text-4xl font-semibold lowercase ">
        we offer
      </h1>
      <hr className="bg-custom-orange h-2 rounded-full w-14 " />
      <div className="mt-24  flex flex-col gap-[70px] m-0">
        <div className="flex justify-around">
          <div className="w-1/2">
            <h1 className="text-custom-orange text-3xl font-semibold ">
              Track Your Delivery
            </h1>
            <p>
              Track your package in real-time on our interactive map, from the
              moment it leaves the store to your doorstep
            </p>
          </div>

          <Motocycle />
        </div>
        <div className="flex justify-around">
          <RiskPicture />{" "}
          <div className="w-1/4 flex flex-col justify-end">
            <h1 className="text-custom-orange text-3xl font-semibold ">
              Track Problems If Any
            </h1>
            <p>
              Uh oh, your delivery might be delayed. Stay informed with
              real-time updates get assistance if needed.
            </p>
          </div>
        </div>
      
        <div className="flex justify-around mt-20">
          <div className="w-1/4 flex flex-col justify-center items-baseline">
            <h1 className="text-custom-orange text-3xl font-semibold mt-20">
              Discover A World Of Suppliers
            </h1>
            <p>
              Enhance efficiency, transparency, and collaboration with our
              innovative tools
            </p>
          </div>

          <PostOffice />
        </div>
      </div>
      <div className="absolute top-[280px] left-60">
        <ArrowLtoR />
      </div>
      <div className="absolute bottom-[180px] right-[300px]">
        <ArrowRtoL />
      </div>
    </div>
  );
};

export default Risk;
