import React from "react";
import Image from "next/image";
import Lottie from "lottie-react";

type Props = {
  animationData: any;
  pic: any;
};

function RecommendationCard({ animationData, pic }: Props) {
  return (
    <div className="bg-white rounded-lg pb-3">
      {/* <div className="max-w-[200px] max-h-[200px]"> */}
      <Lottie animationData={animationData} />
      {/* </div> */}
      <div className="px-3 mt-2">
        <div className="h-8 w-8 bg-gray-300 animate-pulse rounded-full"> </div>
        {/* <Image width={20} height={20} src={pic} alt="img" /> */}
        <div className="h-4 w-[350px] bg-gray-300 rounded-md mt-1 animate-pulse"></div>
        <div className="h-4 w-[250px] bg-gray-300 rounded-md mt-1 animate-pulse"></div>
      </div>
    </div>
  );
}

export default RecommendationCard;
