import React from "react";
import { motion } from "framer-motion";

function Marquee({ direction }) {
  var names = ["Apurba", "Ankush", "Sayan", "Manish", "Ayan", "Deep"];
  return (
    <div className="w-full flex  gap-4  overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0%" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0%" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="w-full  flex flex-shrink-0 items-center"
      >
        {names.map((elem) => (
          <div className="w-[16.66%] flex items-center justify-center mb-10 flex-shrink-0 ">
            {elem}
          </div>
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0%" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0%" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="w-full  flex flex-shrink-0 items-center"
      >
        {names.map((elem) => (
          <div className="w-[16.66%] flex items-center justify-center mb-10 flex-shrink-0 ">
            {elem}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
export default Marquee;
