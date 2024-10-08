// import React from "react";
// import MainButton from "../common/MainButton";

// function HeroSection() {
//   return (
//     <section className="flex justify-between flex-col md:flex-row gap-4 items-center">
//       <div>
//         <p className="font-[850] md:leading-[5.0625rem] text-2xl md:text-[4.375rem] text-darkBlue">
//           We boost growth for your statup business
//         </p>
//         <p className="text-[1.375rem] font-[500]">
//           Our goal is top at the heart of creativity services industry as a
//           digital creator. In has a after comment
//         </p>
//         <div className="flex gap-[1.75rem] items-center mt-[3rem]">
//           <MainButton text="Get Started" classes="shadow-none w-[10.125rem]" />
//           <div className="flex gap-[1.56rem] items-center">
//             {/* <img src="/images/fancy_play_icon.png" alt="play icon" />
//             <p className="font-bold text-normal">Learn More</p> */}
//           </div>
//         </div>
//       </div>
//       <div>
//         <img
//           src="/images/happy_guy.png"
//           alt="guy with phone surrounded by action icons"
//         />
//       </div>
//     </section>
//   );
// }

// export default HeroSection;
// src/components/sections/HeroSection.tsx

"use client"; // Add this directive

import React, { useEffect, useState } from "react";
import MainButton from "../common/MainButton";

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [number,setnumber] = useState(9);

  useEffect(() => {
    setIsVisible(true);

  }, []);

  return (
    <section
      className={`flex justify-between flex-col md:flex-row gap-4 items-center transform transition-transform duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
      }`}
    >
      {/* change in code */}
      <div> 
        <h1 className="font-[850] md:leading-[5.0625rem] text-2xl md:text-[4.375rem] text-darkBlue">
          We boost growth for your startup business 
        </h1>
        <p className="text-[1.375rem] font-[500]">
          
          Our goal is to top at the heart of the creativity services industry as
          a digital creator.
        </p>
        <div className="flex gap-[1.75rem] items-center mt-[3rem]">
          <MainButton text="Get Started" classes="shadow-none w-[10.125rem]" />
          <div className="flex gap-[1.56rem] items-center">
            {/* <img src="/images/fancy_play_icon.png" alt="play icon" />
            <p className="font-bold text-normal">Learn More</p> */}
          </div>
        </div>
      </div>
      <div>
        <img
          src="/images/happy_guy.png"
          alt="guy with phone surrounded by action icons"
        />
      </div>
    </section>
  );
}

export default HeroSection;
