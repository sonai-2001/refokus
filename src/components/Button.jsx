
import React from "react"
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
function Button({content="connect"}){
    return(
        <div className="rn w-32 py-1 px-1 bg-white rounded-md mr-4 flex justify-between text-black">
        <span className="text-black text-xs  ">{content}</span>
        <MdKeyboardDoubleArrowRight />
      </div>
    )
}
export default Button