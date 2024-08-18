"use client";

import { useState } from "react";
import { X } from "lucide-react";
import MainButton from "./MainButton";

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
          <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">
            <p className="hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray">
              Home
            </p>
            <p className="hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray">
              About Us
            </p>
            <p className="hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray">
              Services
            </p>
            <p className="hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray">
              Contacts
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
        className={`block lg:hidden shadow-sm fixed top-0 w-full z-[999] bg-white py-1 animate-fade-in ${
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
              <p className="hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray">
                Services
              </p>
              <p className="hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray">
                Contacts
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
