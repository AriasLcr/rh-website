import React from "react";
import Navbar from "../navbar/navbar";

export default function Hero() {
  return (
    <div className="w-full flex bg bg-gray-950 h-96 justify-center items-center flex-col">
      <Navbar className="text-white fixed flex top-0 left-0 py-5 w-full"/>
      <h1 className="text-white font-bold text-9xl">Rh+</h1>
      <h2 className="text-white  text-3xl">Now <b>YOU</b> can be <b>SILLY</b></h2>
    </div>
  );
}