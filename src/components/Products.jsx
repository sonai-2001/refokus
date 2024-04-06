import React from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import { useState } from "react";
function Products() {
  var arr = [
    {
      product: "Monitor",
      desc: " good products with lots of functionalities that give you that using experience that makes you interested to vuy this like more",
      live: true,
      connect: false,
    },
    {
      product: "Mouse",
      desc: " good products with lots of functionalities that give you that using experience that makes you interested to vuy this like more",
      live: true,
      connect: false,
    },
    {
      product: "cpu",
      desc: " good products with lots of functionalities that give you that using experience that makes you interested to vuy this like more",
      live: true,
      connect: false,
    },
    {
      product: "speakers",
      desc: " good products with lots of functionalities that give you that using experience that makes you interested to vuy this like more",
      live: true,
      connect: true,
    },
  ];
  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 15);
  };
  return (
    <div className="w-full  relative">
      {arr.map((elem, index) => (
        <Product pro={elem} mover={mover} index={index} />
      ))}

      <div className="w-full h-full absolute top-0 pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + "rem" }}
          className="h-[15rem] w-[23rem] absolute left-[45%] bg-white  overflow-hidden "
        >
          <motion.div
            animate={{ y: -pos + "rem" }}
            className="w-full h-full bg-sky-100"
          >
            <img
              className="w-full h-full object-cover position-center"
              src="https://images.unsplash.com/photo-1547119957-637f8679db1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            className="w-full h-full bg-sky-200"
          >
            <img
              className="w-full h-full object-cover position-center"
              src="https://media.istockphoto.com/id/1312767657/photo/esport-rgb-mouse-and-keyboard.webp?b=1&s=170667a&w=0&k=20&c=oLU3blPlyCmLXyP9ZxFvz5k3RcFuxLuAYJaX9kJlN0w="
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            className="w-full h-full bg-sky-300"
          >
            <img
              className="w-full h-full object-cover position-center"
              src="https://media.istockphoto.com/id/1142420118/photo/gamer-computer-in-cyber-cafe-illuminated.webp?b=1&s=170667a&w=0&k=20&c=0CTRcF60JUWk9Z-epfVqe9J9l5duEGX00EGXoABcjF4="
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            className="w-full h-full bg-sky-400"
          >
            <img
              className="w-full h-full object-cover position-center"
              src="https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BlYWtlcnN8ZW58MHx8MHx8fDA%3D"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
