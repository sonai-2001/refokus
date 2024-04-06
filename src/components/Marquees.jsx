
import React from "react"
import Marquee from "./Marquee"
function Marquees(){
    return (
        <div className="w-full mt-20 overflow-hidden ">
            <Marquee direction={"left"}/>
            <Marquee direction={"Right"}/>
        </div>
    )
}
export default Marquees