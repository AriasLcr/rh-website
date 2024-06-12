import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full flex bg bg-gray-950 justify-center items-center flex-col h-[32rem]">
        <h1 className="text-white font-bold text-9xl">Rh+</h1>
        <h2 className="text-white  text-3xl">Now <b>YOU</b> can be <b>SILLY</b></h2>
      {/* <Image /> */}
    </div>
  );
}