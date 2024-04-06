import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "./Button";
function Box({ width, down, hover }) {
  return (
    <div
      className={`${width} py-3 px-2 bg-zinc-700 rounded hover:${hover} hover:p-[10px]`}
    >
      <div className=" inmain w-full min-h-[30vh]  flex flex-col justify-between">
        <div className="topp ">
          <div className="topptop w-full flex justify-between items-center text-xs font-extralight">
            <h5>One heading</h5>
            <IoIosArrowRoundForward />
          </div>
          <h1 className="text-lg">whatever heading</h1>
        </div>
        <div className="down">
          {down == "para" ? (
            <p className="text-xs font-thin">
              you can start your project journey from here
            </p>
          ) : (
            <>
              <h1 className="text-3xl">start a project</h1>
              <div className="contact cursor-pointer w-fit border-white border-[1px] rounded-full  bg-zinc-500 py-1 px-1 text-xs mt-1 ">
                contact us
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default Box;
