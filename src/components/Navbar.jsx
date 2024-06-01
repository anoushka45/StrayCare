import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
const Navigate = useNavigate()
  return (
    <nav className="flex flex-row justify-between shadow-xl">
      <div className="flex items-center p-4 gap-2">
        <img className="w-[4rem] h-[4rem]" src="logo.png" alt="logo" />
        <p className="text-2xl font-bold">StrayCare</p>
      </div>
      <div className="flex p-4 items-center gap-2">
        <button className="bg-dk-brown rounded-md p-2 w-[6rem] font-medium hover:bg-lg-brown" onClick={() => Navigate("/login")}><p className="text-white">Login</p></button>
        <button className="bg-dk-brown rounded-md p-2 w-[6rem] font-medium hover:bg-lg-brown"><p className="text-white">Register</p></button>
      </div>
    </nav>
  );
};

export default Navbar;
