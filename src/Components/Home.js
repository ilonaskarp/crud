import React from "react";
import { Heading } from "./Heading";
import { DeviceList } from "./DeviceList";



export const Home = () => {

  return (
    <>
      <div className="container mx-auto">
        <h3 className="text-center text-3xl mt-20 text-base leading-8 text-black font-bold tracking-wide uppercase">
          Service book for devices
        </h3>
        <Heading />
        <DeviceList />
      </div>
    </>
  );
};