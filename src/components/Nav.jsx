import React from "react";
import Button from "./Button"


function Nav() {
  return (
    <div className="max-w-screen-lg py-3 mx-auto bg-zinc-700 px-1 flex justify-between rounded-md">
      <div className="ln flex gap-[25px] items-center text-sm ">
        {["Home", "About", "Contact", "", "work"].map((elem, index) => {
          return elem.length != 0 ? (
            <a className="flex items-center gap-2" href="#" key={index}>
              {index == 2 && (
                <span className="w-1 h-1 rounded-full bg-green-400 inline-block"></span>
              )}
              {elem}
            </a>
          ) : (
            <div className="w-[1px] h-4 bg-zinc-400"></div>
          );
        })}
      </div>
      <Button/>
      
    </div>
  );
}
export default Nav;
