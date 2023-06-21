import React from "react";
import Image from "next/image";
import hr from "../../public/hr.webp";
import underConstruction from "../../public/under-construction.json";
import RecommendationCard from "./RecommendationCard";
type Props = {};

const Recommendation = (props: Props) => {
  return (
    <div
      id="recommendation"
      className="px-[10vw] py-[10vh] flex flex-col items-center justify-between bg-recommendation bg-no-repeat bg-cover"
    >
      <div className="flex flex-row space-x-10 lg:space-x-10  mb-10 items-center justify-center">
        <div className="border-y-2 mr-10 border-white w-64 h-0 lg:block hidden"></div>

        <h1
          style={{ marginLeft: 0 }}
          className="lg:text-5xl text-3xl font-bold text-white"
        >
          Recommendations
        </h1>
        <div className="border-y-2 border-white w-64 h-0 lg:block hidden"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-4">
        <RecommendationCard pic={hr} animationData={underConstruction} />
        <RecommendationCard pic={hr} animationData={underConstruction} />
        <RecommendationCard pic={hr} animationData={underConstruction} />
      </div>
    </div>
  );
};

export default Recommendation;
