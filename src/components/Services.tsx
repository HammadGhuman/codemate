"use client";
import React, { useState } from 'react'
import ServiceCard from './ServiceCard';
import WebAnimation from '../../public/webdevAnimationData.json'
import Mobile from '../../public/appdevAnimationData.json'

type Props = {}

function Services({}: Props) {
    const [active,setActive] = useState({
        service1:true,
        service2:false,
        service3:false
    });
  return (
    <div id="services" className='relative overflow-y-hidden'>  
        <ServiceCard key={1} color={'bg-primary'} heading={"Web Development"} text={"Transforming ideas into powerful online experiences with expert web development services."} techName={["React Js","Node Js","Typescript","TailwindCss"]} AnimationData={WebAnimation}/>
        <ServiceCard key={2} color={'bg-secondary'}heading={"Mobile App Development"} text={"Maximise the potential of your business with innovative mobile app development solutions tailored to your needs"} techName={["Flutter","Node Js","Typescript","Firebase"]} AnimationData={Mobile}/>
        {/* <ServiceCard key={3} color={'bg-black'}heading={"Web Development"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id unde culpa vel fugit accusamus voluptate ab fugiat, nemo molestias explicabo!"} AnimationData={Mobile}/> */}
    </div>
  )
}

export default Services