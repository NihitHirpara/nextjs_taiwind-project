"use client";
import Image from "next/image";
import React, { useState } from "react";
import work from "../../public/work.svg";
import dot from "../../public/dot.svg";

const page = () => {
  const [showPopup, setShowPopup] = useState(1);

  const handleButtonClick = (popup) => {
    setShowPopup(popup);
  };

  return (
    <>
      <div className="text-center mt-6">
        <p className="text-[#FFB400] font_kanit">Our Works</p>
        <h1 className="text-[#16213E] font-semibold text-5xl font_kanit">
          Our Special Projects
        </h1>
        <Image src={work} className="inline" alt="work"/>
      </div>
      <div className="flex items-start mt-4 mb-3">
        <div className="px-12  w-2/4">
          <p className="text-5xl font-bold leading-[60px] leading-15 pr-4 font_rubik">
            Let’s Build Something Together
          </p>
          <div className="border-solid border-4 border-[#FFB400] w-16 mt-11 mb-10 ml-2"></div>
          <p className=" text-[#666666] font_rubik">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
            dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut
            quam sed mauris proin feugiat. Scelerisque lorem posuere iaculis
            nunc amet phasellus.
          </p>
          <button className="border-solid border-4 border-[#FFB400] px-16 py-3 mt-14">
            <span className="text-[#FFB400] font_rubik">GET IN TOUCH</span>
          </button>
        </div>
        <div className="mt-4 w-5/12">
          <div>
            <section className="flex items-center w-full justify-between">
              <p className="font-bold text-base font_rubik">
                Donec rutrum congue leo eget malesuada?
              </p>
              <button onClick={() => handleButtonClick(1)}>
                <Image src={dot} alt="dot"/> 
              </button>
            </section>
            {showPopup === 1 && (
              <p className="text-[#666666] leading-6 mt-6 font_rubik">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
                dignissim tristique <br /> tellus sed faucibus nullam. Tincidunt
                mauris ut quam sed mauris proin feugiat.
              </p>
            )}
            <div className="border-solid border-b mt-9"></div>
          </div>

          <section className="flex items-center mt-6 w-full justify-between">
            <p className="font-bold text-base font_rubik">
              Vivamus suscipit tortor eget felis porttitor volutpat?
            </p>
            <button onClick={() => handleButtonClick(2)}>
            <Image src={dot} alt="dot"/> 
            </button>
          </section>
          {showPopup === 2 && (
            <p className="text-[#666666] leading-6 mt-6 font_rubik">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
              dignissim tristique <br /> tellus sed faucibus nullam. Tincidunt
              mauris ut quam sed mauris proin feugiat.
            </p>
          )}
          <div className="border-solid border-b mt-6"></div>

          <section className="flex items-center  mt-6 w-full justify-between">
            <p className="font-bold text-base font_rubik">
              Curabitur non nulla sit amet nisl tempus?
            </p>
            <button onClick={() => handleButtonClick(3)}>
            <Image src={dot} alt="dot"/> 
            </button>
          </section>
          {showPopup === 3 && (
            <p className="text-[#666666] leading-6 mt-6 font_rubik">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
              dignissim tristique <br /> tellus sed faucibus nullam. Tincidunt
              mauris ut quam sed mauris proin feugiat.
            </p>
          )}
          <div className="border-solid border-b mt-6"></div>

          <section className="flex items-center  mt-6 w-full justify-between">
            <p className="font-bold text-base font_rubik">
              Pellentesque in ipsum id orci porta dapibus?
            </p>
            <button onClick={() => handleButtonClick(4)}>
            <Image src={dot} alt="dot"/> 
            </button>
          </section>
          {showPopup === 4 && (
            <p className="text-[#666666] leading-6 mt-6 font_rubik">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
              dignissim tristique <br /> tellus sed faucibus nullam. Tincidunt
              mauris ut quam sed mauris proin feugiat.
            </p>
          )}
          <div className="border-solid border-b mt-6"></div>

          <section className="flex items-center  mt-6 w-full justify-between">
            <p className="font-bold text-base font_rubik">
              Curabitur non nulla sit amet nisl?
            </p>
            <button onClick={() => handleButtonClick(5)}>
            <Image src={dot} alt="dot"/> 
            </button>
          </section>
          {showPopup === 5 && (
            <p className="text-[#666666] leading-6 mt-6 font_rubik">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
              dignissim tristique <br /> tellus sed faucibus nullam. Tincidunt
              mauris ut quam sed mauris proin feugiat.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default page;
