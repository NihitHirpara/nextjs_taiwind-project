import Image from "next/image";
import React from "react";
import about_data from "../../public/about.svg";
import arrow from "../../public/arrow.svg";
import jcb from "../../public/jcb.svg"
const About = () => {
  return (
    <>
      <div className="flex items-center w-full">
        <div className="pl-40 w-3/5">
          <p className="font-medium text-sm leading-4 text-[#FFB400] uppercase font_kanit">About us</p>
          <p className="font-bold text-5xl leading-[55px] text-[#16213E] mt-2.5 font_kanit">
            With our knowledge <br /> we guarente success
          </p>
          <p className="font-bold text-base leading-7 text-[#00215B] mt-5 font_lato">
            Fusce id hendrerit lectus. Morbi vitae tortor sed turpis feugiat
            congue
          </p>
          <p className="font-normal text-base text-[#41444B] mt-8 font_lato">
            Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus rutrum
            leo consectetur accumsan. Vivamus viverra ante turpis, dignissim
            condimentum elit egestas sit amet. Phasellus faucibus pellentesque
          </p>
          <button className="bg-[#FFB400] text-base font-normal leading-6 text-white  py-4 px-9 flex items-center gap-1 mt-11 font_kanit">
            Learn more
            <Image src={arrow} className="pt-1" alt="arrow" />
          </button>
        </div>
        <Image src={about_data} width="700px" height="400px" alt="aboutdata" />
      </div>
      <div className="flex">
        <div className="px-12 pt-24 w-2/4 bg-[#2A2A2A] text-[#ffffff]">
          <p className="text-5xl font-bold leading-[60px] pr-4 font_rubik" >We’ve Been <br /> Building For Over 10 Years</p>
          <div className="border-solid border-4 border-[#FFB400] w-16 mt-11 mb-16 ml-1"></div>
          <p className="font-normal text-xl leading-9 text-white font_rubik">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
            dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut
            quam sed mauris proin feugiat. Scelerisque lorem posuere iaculis
            nunc amet phasellus.
          </p>
          <button className="border-solid border-4 border-[#FFB400] px-16 py-3 mt-14 font_rubik"><span className="text-[#FFB400]">ABOUT US</span></button>
        </div>
        <div>
          <Image src={jcb} alt="jcb"/>
          <div className="flex items-center gap-28">
            <div className="bg-[#FFB400] py-5 pl-7 pr-48 font_rubik">
                <h1 className="line_height text-4xl font-bold ">Call for a Quote</h1>
                <h2 className="font-medium text-3xl mt-4">(346) 234-6973</h2>
            </div>
            <div className="flex content-center">
                <button className="border-4 border-solid border-[#1F1F1F] py-2 px-6 font_rubik"><span className="text-[#1F1F1F]">ONLINE ESTIMATE FORM</span></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
