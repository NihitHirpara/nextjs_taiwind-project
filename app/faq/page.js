import Image from "next/image";
import React from "react";
import client from "../../public/client.svg";
import quote from "../../public/quote.svg";
import threedot from "../../public/threedot.svg";
import map from "../../public/map.svg";
import phone from "../../public/phone.svg";
import email from "../../public/email.svg";

const page = () => {
  return (
    <div>
      <div className="text-center mt-5">
        <p className="text-[#E39B11] uppercase text-base font-medium font_kanit">
          Testimonials
        </p>
        <h1 className="text-[#16213E] font-semibold text-4xl mt-3 font_rubik">
          Our Clients Say
        </h1>
        <div className="flex px-60 mt-5 gap-8 items-center">
          <div>
            <Image src={client} className="max-w-none" alt="client"/>
          </div>
          <div>
            <Image src={quote} alt="quote" />
            <p className="text-justify mt-8 font-normal text-lg text-[#41444B] leading-7 font_lato">
              Suspendisse tortor enim, varius et porttitor sit amet, posuere
              vitae massa. Proin ac quam eu erat semper sagittis in vitae elit.
              Nam neque erat, semper vel ultrices in, finibus eu magna.
              Pellentesque habitant morbi tristique
            </p>
            <p className="font-medium text-[#2A2A2A] leading-6 text-2xl text-left mt-6 font_kanit">
              Katy Grey{" "}
            </p>
            <p className="text-[#FFB400] font-normal text-sm leading-4 text-left mt-3 font_kanit">
              CEO Grey Industries
            </p>
            <Image src={threedot} className="mt-8" alt="threedot" />
          </div>
        </div>
        <Image src={map} className="relative mb-48" alt="map" />
        <div className="flex gap-16 absolute top-[153%] left-[18%]">
          <div className="bg-[#FFFFFF] shadow-[0_2px_25px_rgba(0,33,91,0.2)]  mb-6 w-96 py-16 pl-12 text-left  top-3/4 left-72 border-t-4 border-solid border-[black]">
            <p className="font-light text-sm uppercase text-[#41444B] font_kanit">
              Company Address
            </p>
            <h3 className=" text-[29px] font-medium  text-[#00215B] mt-3 leading-9 font_kanit">
              Themeforest, Envato <br /> HQ 24 Fifth st., Los Angeles, USA
            </h3>
          </div>
          <div className="flex items-center gap-20">
            <div className="flex gap-4">
              <Image src={phone} alt="phone"/>
              <div className="text-left">
                <p className="text-[#41444B] font-light text-xs uppercase font_kanit">
                  Company Phones
                </p>
                <h2 className="text-[#16213E] font-normal text-base mt-1 leading-6 font_kanit">
                  <p>+ 1 234 5678 098</p>
                  <p>+ 1 634 7638 654</p>
                </h2>
              </div>
            </div>
            <div className="flex gap-4 ">
              <Image src={email} alt="email"/>
              <div className="text-left">
                <p className="text-[#41444B] font-light text-xs uppercase font_kanit">
                  Dustro Emails
                </p>
                <h2 className="text-[#16213E] font-normal text-base mt-1 leading-6 font_kanit ">
                  <p>dustro@gmail.com</p>
                  <p>dustro.info@gmail.com</p>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
