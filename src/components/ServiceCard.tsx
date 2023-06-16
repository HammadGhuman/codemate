"use client";
import React from "react";
import TechStackButton from "./TechStackButton";
import Lottie from "lottie-react";
type Props = {
  AnimationData: any;
  heading: any;
  text: any;
  color: any;
  techName: string[];
};

const ServiceCard = ({
  AnimationData,
  heading,
  text,
  color,
  techName,
}: Props) => {
  console.log(`bg-${color}`);
  return (
    <div
      className={`flex flex-col ${
        heading === "Mobile App Development"
          ? "lg:flex-row-reverse"
          : "lg:flex-row"
      } justify-evenly lg:mx-28 my-5 py-10 ${color} hover:bg-gradient-to-tr hover:from-primary hover:to-[#4400a6] transition-all duration-300 rounded-lg`}
    >
      <div className="flex flex-col space-y-10 lg:pl-10 px-4 text-white">
        <h1 className="text-4xl">{heading}</h1>
        <p className="max-w-lg">{text}</p>
        <div className="grid grid-flow-row grid-cols-2 lg:grid-cols-3 max-w-sm gap-3">
          {techName.map((item) => (
            <TechStackButton key={item} techName={item} />
          ))}
        </div>
      </div>
      <Lottie
        className="max-w-[300px] max-h-[300px] self-center"
        animationData={AnimationData}
      />
    </div>
  );
};

export default ServiceCard;
