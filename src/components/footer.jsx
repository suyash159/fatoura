import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import fb from "../Image/FB.png";
import ins from "../Image/ins.png";
import link from "../Image/link.png";
export default function Footer() {
  return (
    <div className="flex w-full flex-col  justify-center bg-cyan-800  h-56">
      <div className="flex justify-evenly flex-row w-[85%] ml-[10%] text-white ">
        <Router>
          <Link to="">Signin</Link>
          <Link to="">Signup</Link>
          <Link to="">Terms and Conditions</Link>
          <Link to="">Privacy Policy</Link>
          <Link to="">Contact Us</Link>
        </Router>
      </div>
      <div className=" text-white p-9">
        <div className="flex flex-row justify-center mb-8">
          <img src={fb} className="h-8 w-8" />
          <img src={ins} className="h-8 w-8" />
          <img src={link} className="h-8 w-8" />
        </div>
        <h3 className="text-center">
          Copyright @ IHTIRAF. Made with love by Brain Inventory.
        </h3>
      </div>
    </div>
  );
}
