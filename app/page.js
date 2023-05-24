import Image from "next/image";
import building from "../public/homesection.svg";
import arrow from "../public/arrow.svg";
import logo_1 from "../public/logo_1.svg";
import logo_2 from "../public/logo_2.svg";
import logo_3 from "../public/logo_3.svg";

export default function Home() {
  return (
    <section>
      <div className="relative">
        <Image src={building} className="absolute" alt="buiding" />
        <div className="absolute flex w-full justify-evenly">
          <div className="pl-52 w-3/5">
            <h1 className="font-semibold text-6xl leading-[65px] text-white pt-52 font_kanit">
              Construction solution <br />{" "}
              <span className="font-normal"> for everyone</span>
            </h1>
            <p className="font-bold text-sm leading-7 text-[#EBECEE] pt-4 font_lato">
              In id enim odio. Nunc aliquet diam tortor, at venenatis urna
              sagittis non. Suspendisse sodales nulla <br /> sit amet sem
              condimentum, ac euismod nibh elementum. Praesent eu urna at sem
              sodales <br />
              venenatis. Mauris efficitur dapibus enim in posuere
            </p>
            <button className="bg-[#FFB400] text-base font-normal leading-6 text-white py-4 px-9 flex items-center gap-1 mt-7 font_kanit">
              Learn more
              <Image src={arrow} className="pt-1" alt="arrow" />
            </button>
          </div>
          <div className="bg-[#FFB400] mt-28 pt-9 px-20">
            <p className="font-bold text-4xl leading-10 text-[#2A2A2A] text-center font_rubik">Our Services</p>
            <div className="flex items-center gap-2.5 mt-3">
              <Image src={logo_1} alt="logo_1"/>
              <div>
                <h4 className="font-bold text-base leading-[40px] text-[#2A2A2A] font_rubik">Building Construction</h4>
                <p className="font-normal leading-6 text-white text-sm">Lorem ipsum dolor sit <br /> consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 mt-5">
              <Image src={logo_2} alt="logo_2"/>
              <div>
                <h4 className="font-bold text-base leading-[40px] text-[#2A2A2A] font_rubik">Foundation Work</h4>
                <p className="font-normal leading-6 text-white text-sm">Lorem ipsum dolor sit <br /> consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 mt-5 mb-14">
              <Image src={logo_3} alt="logo_3" />
              <div>
                <h4 className="font-bold text-base leading-[40px] text-[#2A2A2A] font_rubik">Site Management</h4>
                <p className="font-normal leading-6 text-white text-sm">Lorem ipsum dolor sit <br /> consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
