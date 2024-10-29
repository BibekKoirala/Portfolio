"use client"

import React from "react";

import { FaLink } from "react-icons/fa";


function Works() {
  const handleClick = (to: string) => {
    if (to === 'sew') {
      window.open(
        "https://drive.google.com/file/d/1-COEglElHCd4vXWt1Scv80KbMxMpSn80/view",
        "_blank",
      );

    }
    else {
      window.open(
        "https://drive.google.com/file/d/1uj3h30LUQVcaxVkISU3kNGCFVGDYKiVt/view",
        "_blank",
      );
    }

  };

  return (
    <React.Fragment>
      <div className=" max-w-lg pt-4 pb-4">
        {/* <div className="text-color4 text-center text-xl font-semibold mb-6">
          Work Experience
        </div> */}

        <div className="space-y-8">
          {/* Adventum Advanced Solutions */}
          <div className="flex items-start pb-6 text-color4">
            <img
              src="/images/adventum.jpeg"
              alt="Adventum Advanced"
              className="h-[50px] w-[50px] rounded-full outline outline-6 outline-white shadow-md mr-4"
            />
            <div className="w-full ">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-[18px] font-bold ">
                    ADVENTUM ADVANCED SOLUTIONS
                  </span>
                  <FaLink
                    onClick={() => handleClick('adv')}
                    className="cursor-pointer text-color3 hover:text-color5"
                  />
                </div>
              </div>

              <div className="mt-1 flex justify-between text-[14px]">
                <div>Software Engineer Intern</div>
                <div className="italic text-tertiary">2020 MAY - 2020 JUL</div>
              </div>
            </div>
          </div>

          {/* Smart Energy Water */}
          <div className="flex items-start pb-6 text-color4">
            <img
              src="/images/sew.jpeg"
              alt="SEW"
              className="h-[50px] w-[50px] rounded-full outline outline-6 outline-white shadow-md mr-4"
            />
            <div className="w-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-[18px] font-bold text-secondary">
                    Smart Energy Water
                  </span>
                  <FaLink
                    onClick={() => handleClick('sew')}
                    className="cursor-pointer text-color3 hover:text-color5"
                  />
                </div>
              </div>

              <div className="mt-1 flex justify-between text-[14px] text-secondary">
                <div>Product Engineer</div>
                <div className="italic text-tertiary">2022 JAN - 2023 JUL</div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </React.Fragment>
  );
}

export default Works;
