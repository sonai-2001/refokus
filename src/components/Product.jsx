
import React from "react"
import Button from "./Button"
function Product({pro,mover,index}){
    return (
       <div className="w-full h-[15rem] py-4 flex justify-between items-center px-2 bg-zinc-700  border-2 border-zinc-500  rounded-md "
        onMouseEnter={()=>{
           console.log(index) 
            mover(index)
        }}
       >
        <div className="title text-5xl">{pro.product}</div>
        <div className="rp w-[30%] ">
            <p className="mb-10">{pro.desc}</p>
             <div className="flex gap-5">
            {pro.live && <Button content={'live'}/>}
            {pro.connect && <Button />}
             </div>
        </div>
       </div>
    )
}
export default Product