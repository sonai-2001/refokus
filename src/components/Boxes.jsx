import React from "react"
import Box from "./Box"
function Boxes(){
    return(
        <div className="w-full px-10 py-4 flex gap-1 justify-center mt-20">
            <Box width={'w-[25%]'} down={'para'} hover={'none'}/>
            <Box width={'w-[45%]'} hover={'bg-violet-400'} />
        </div>
    )
}
export default Boxes