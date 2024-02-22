import React from "react";
import { Button } from "antd";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-12 mt-8">
      <h1 className="text-3xl font-semibold">LOGO</h1>
     <button className="bg-button-color text-white rounded-lg py-3 px-8 flex-shrink ">Track your orders</button>
    </div>
  );
};

export default Navbar;
