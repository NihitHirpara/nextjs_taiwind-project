import React from 'react';
import logo from "../../public/logo.svg";
import Image from "next/image";
import Link from 'next/link';
const Navbar = () => {
  return (
    <nav>
        <div className="py-7 px-40 flex items-center justify-between border-solid border-b-[3px]">
          <div>
            <Image src={logo} alt="logo" />
          </div>
          <div>
            <ul className="flex gap-16 font-medium text-lg text-[#000000] items-center font_IBM">
              <Link href='/'>Home</Link>
              <Link href={{pathname:'/about'}}>About us </Link>
              <Link href={{pathname:"/work"}}>Our Work </Link>
              <Link href={{pathname:'/faq'}}>FAQ’s</Link>
              <Link href={{pathname:'/contactus'}}>
                <button className="border-solid border-2 border-black p-3 px-11 rounded ">
                  Contact Us
                </button>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
