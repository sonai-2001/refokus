import React from "react";
import { motion,useScroll,useMotionValueEvent } from "framer-motion"
import { useState } from "react"
function Work() {
  
  
  const[images,setImages]=useState([
    {
      src: "https://images.unsplash.com/photo-1577375729078-820d5283031c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBhY2Nlc3Nvcmllc3xlbnwwfHwwfHx8MA%3D%3D",
      top: "50%",
      left: "50%",
      isActive: true,
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXIlMjBhY2Nlc3Nvcmllc3xlbnwwfHwwfHx8MA%3D%3D",
      top: "45%",
      left: "55%",
      isActive: false,
    },
    {
      src: "https://images.unsplash.com/photo-1567094764148-bb14c3e6f14c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXIlMjBhY2Nlc3Nvcmllc3xlbnwwfHwwfHx8MA%3D%3D",
      top: "48%",
      left: "42%",
      isActive: false,
    },
    {
      src: "https://images.unsplash.com/photo-1518842013791-b874be246c34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG9yYW5nZSUyMGNvbG9yJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
      top: "30%",
      left: "50%",
      isActive: false,
    },
  ])

  const{scrollYProgress}=useScroll()

  scrollYProgress.on("change",(latest)=>{
     function showImage(arr){
      setImages((prev)=>(
        prev.map((elem,index)=>(
           arr.indexOf(index)==-1?
           ({...elem,isActive:false}):
           ({...elem,isActive:true})
        ))
      ))
     }
    

     switch (Math.floor(latest*100)){
    
      case 0:
        showImage([])
        break;

      case 2:
        showImage([0]);
        break;
      case 3:
        showImage([0,1]);
        break;
      case 4:
        showImage([0,1,2]);
        break;
      case 6:
        showImage([0,1,2,3]);
        break;
     }
     
  })
  





  return (
    <div className="w-full mt-[5vh]">
      <div className=" relative max-w-screen-xl  mx-auto text-[26vw] tracking-tight leading-none  text-center  ">
        Products
        <div className="w-full h-full    absolute top-0">
            {images.map((elem)=>elem.isActive && (<img className="w-52 h-52 absolute -translate-x-[50%] rounded-md" src={elem.src} style={{top:elem.top,left:elem.left}} />))}
        </div>
      </div>
    </div>
  );

}

export default Work;
