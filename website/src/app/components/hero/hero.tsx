import React from "react";
import Navbar from "../navbar/navbar";
import FadeIn from "react-fade-in";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full flex bg bg-gray-950 justify-center items-center flex-col h-[32rem]">
      <FadeIn delay={200}>
        <h1 className="text-white font-bold text-9xl">Rh+</h1>
        <h2 className="text-white  text-3xl">Now <b>YOU</b> can be <b>SILLY</b></h2>
      </FadeIn>
      {/* <Image /> */}
    </div>
  );
}