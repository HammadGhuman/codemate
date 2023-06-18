import Image from "next/image";
import React from "react";
import hr from "../../public/hr.webp";
type Props = {};

const ContactUs = (props: Props) => {
  return (
    <div
      id="contact"
      className="flex lg:flex-row flex-col font-mono  overflow-y-hidden text-gray-100"
    >
      {/* Left Card */}
      <div className="flex flex-col lg:min-w-[800px]  bg-contactUsLeft bg-cover bg-no-repeat px-8 lg:px-20 pt-10 pb-10 lg:pb-0">
        <h1 className="text-start text-5xl font-bold">Contact Us</h1>
        <div className="mt-10 text-xl flex flex-col space-y-10">
          <p className="font-light font-mono max-w-[400px]">
            We're here to listen and provide exceptional support for all your
            software development needs. Have questions or need assistance? Our
            dedicated team is just a message away. Reach out to us today and
            experience our customer-first services first-hand as we help you
            bring your vision to life!
          </p>
          <div>
            <p className="text-xl">
              Email Us{" "}
              <span className="text-white font-bold underline hover:text-blue-500 cursor-pointer transition-colors duration-300">
                manan@codematetechnologies.com
              </span>
            </p>
            <p className="text-2xl font-bold">Or</p>
            <p className="text-xl">
              Call Us on{" "}
              <span className="text-white font-bold underline hover:text-blue-500 cursor-pointer transition-colors duration-300">
                +92-345-4730071
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* Right Card */}
      <div className="pt-10 w-full bg-slate-100 h-full">
        <h1 className="text-4xl text-center font-bold text-black">
          Lets Discuss Your Project
        </h1>
        <div className="mt-5 flex items-center justify-center">
          <form
            action="https://formsubmit.co/manan@codematetechnologies.com"
            method="POST"
            className="flex flex-col px-5 lg:space-y-12 space-y-10 items-start w-full bg-white lg:px-20 py-10  shadow-xl"
          >
            <input
              type="text"
              className="outline-none rounded-lg text-xl py-3 px-3 bg-slate-100 w-full text-primary placeholder:text-slate-500"
              placeholder="Name"
              name="name"
            />
            <input
              type="text"
              className="outline-none rounded-lg text-xl py-3 px-3 bg-slate-100 w-full text-primary placeholder:text-slate-500"
              placeholder="Email"
              name="email"
            />
            <input
              type="text"
              className="outline-none rounded-lg text-xl py-3 px-3 bg-slate-100 w-full text-primary placeholder:text-slate-500"
              placeholder="Contact Number"
              name="number"
            />
            <input
              type="text"
              className="outline-none rounded-lg text-xl py-3 px-3 bg-slate-100 w-full text-primary placeholder:text-slate-500"
              placeholder="Project Description"
              name="projectDes"
            />
            <button
              type="submit"
              className="ml-auto px-12 rounded-lg hover:bg-primary text-xl font-semibold py-3 text-black outline outline-primary transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
