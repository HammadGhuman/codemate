"use client";
import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import WebAnimation from "../../public/webdevAnimationData.json";
import Mobile from "../../public/appdevAnimationData.json";
import UiUX from "../../public/ui-ux.json";

type Props = {};

function Services({}: Props) {
  const [active, setActive] = useState({
    service1: true,
    service2: false,
    service3: false,
  });
  return (
    <div id="services" className="relative overflow-y-hidden">
      <ServiceCard
        key={1}
        color={"bg-primary"}
        heading={"Web Development"}
        text={
          "Transforming ideas into powerful online experiences with expert web development services."
        }
        techName={["React Js", "Node Js", "Typescript", "TailwindCss"]}
        AnimationData={WebAnimation}
      />
      <ServiceCard
        key={2}
        color={"bg-secondary"}
        heading={"Mobile App Development"}
        text={
          "Maximise the potential of your business with innovative mobile app development solutions tailored to your needs"
        }
        techName={["Flutter", "Node Js", "Typescript", "Firebase"]}
        AnimationData={Mobile}
      />
      <ServiceCard
        key={3}
        color={"bg-[#BD0072]"}
        heading={"UI/UX Design"}
        text={
          "Crafting exceptional digital experiences through intuitive designs and seamless user interactions that transform ideas into captivating realities."
        }
        AnimationData={UiUX}
        techName={["Figma", "Adobe Illustrator", "Adobe Photoshop"]}
      />
    </div>
  );
}

export default Services;
