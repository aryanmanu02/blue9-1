"use client";
import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";
import MainButton from "./MainButton";
// import { Link } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import SocialsPage from "@/contact/contactus";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="md:sticky md:top-0 md:shadow-none z-20">
      {/* DESKTOP */}
      <div className="hidden lg:block animate-fade-in bg-white p-4">
        <div className="flex justify-between md:mx-[9rem] items-center">
          <div>
            <img src="/images/main.png" alt="logo" className="w-[6rem]" />
          </div>
          <p className="hover:text-primary cursor-pointer font-[500] text-gray font-serif text-2xl text-left ">
              <b>Blue 9 Tech & Media</b>
          </p>
          <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">
            <p className="hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray">
              Home
            </p>
            <p className="hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray">
              About Us
            </p>
            <Link href="#services">
            
            <p className="hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray">
              Services
            </p>
            </Link>
            <p className="hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray">
              {/* Contacts */}
              <Link href="/contact">Contact Us</Link>
            </p>
          </div>
          <div className="flex items-center gap-[40px] select-none">
            {/* <p className="hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray">
              Login
            </p> */}
            {/* <MainButton text="Sign up" classes="shadow-none" /> */}
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div
        className={`block lg:hidden shadow-sm fixed top-0 w-full z-[999] bg-white py-0 animate-fade-in ${
          menu ? "bg-primary py-2" : ""
        }`}
      >
        <div className="flex justify-between mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <img src="/images/main.png" alt="logo" className="w-[5rem]" />
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer text-black"
                onClick={toggleMenu}
              />
            ) : (
              <img
                src="/svgs/hamburger.svg"
                alt="menu icon"
                className="cursor-pointer"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu && (
          <div className="my-8 select-none animate-slide-in">
            <div className="flex flex-col gap-8 mt-8 mx-4">
              <p className="hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray">
                Home
              </p>
              <p className="hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray">
                About Us
              </p>
              <Link href="#services">
              <p className="hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray">
                Services
              </p>
              </Link>
              <p className="hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray">
                <a href="src\app\page2.tsx">Contacts</a>
                
              </p>
              <div className="flex flex-col gap-[40px] select-none">
                {/* <p className="hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray">
                  Login
                </p> */}
                {/* <MainButton text="Sign up" classes="shadow-none" /> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
