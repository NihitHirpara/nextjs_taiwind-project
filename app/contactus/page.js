"use client";
import Image from "next/image";
import React, { useState } from "react";
import video from "../../public/video.svg";
import facebook from "../../public/facebook.svg";
import twitter from "../../public/twitter.svg";
import link from "../../public/link.svg";
import location from "../../public/location.svg";
import call from "../../public/call.svg";
import mail from "../../public/mail.svg";

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  


  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(name,email,message,",,,,,,,,,,,,,,,,,,,");
    setName("")
    setEmail("")
    setMessage("")
  
  }

  return (
    <div>
      <Image src={video} alt="video" />
      <div className="flex w-full">
        <div className="bg-[#FFB400] flex flex-col px-24  w-1/2">
          <p className="text-[#2A2A2A] font-bold text-4xl mb-10 pt-9 font_rubik">
            Contact Us
          </p>
          <p className="border-solid w-16 border-[#2A2A2A] border-2 mb-10 "></p>
          <form className="w-full"onSubmit={handleSubmit} >
            <div className="flex gap-7 w-full">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mb-5 py-3 placeholder:pl-4 w-[270px] shadow-[0_2px_25px_rgba(0,33,91,0.2)]"
                />
              </div>
              <div>
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mb-5 py-3 placeholder:pl-4 w-[270px] shadow-[0_2px_25px_rgba(0,33,91,0.2)]"
                />
              </div>
            </div>
            <div>
              <textarea
                rows="5"
                cols={60}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                className="resize-none placeholder:pl-4 pt-3 w-full  shadow-[0_2px_25px_rgba(0,33,91,0.2)]"
              />
            </div>
            <div className=" mb-14 text-end">
              <button type="submit" className="border-solid border-[#ffffff] border-4 py-2 px-9 mt-2  shadow-[0_2px_25px_rgba(0,33,91,0.2)]">
                <span className="text-[white] font_rubik"> SEND MESSAGE</span>
              </button>
            </div>
          </form>
        </div>
        <div className="w-1/2">
          <div className="bg-[#2A2A2A] items-center justify-center gap-24 flex py-14">
            <Image src={facebook} alt="facebook" />
            <Image src={twitter} alt="twitter" />
            <Image src={link} alt="link" />
          </div>
          <div className="mt-14 ml-40">
            <div className="flex gap-2 items-center mb-7 ">
              <Image src={location} className="ml-1" alt="location" />
              <p className="font-medium text-lg ml-3 font_rubik">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex gap-2 items-center mb-7" alt="call">
              <Image src={call} />
              <p className="font-medium text-lg font_rubik">+00 123 456 78</p>
            </div>
            <div className="flex gap-2 items-center">
              <Image src={mail} alt="mail" />
              <p className="font-medium text-lg font_rubik">
                constractioninc@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
