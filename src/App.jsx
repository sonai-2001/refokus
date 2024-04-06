import React from "react";
import Nav from "./components/Nav"
import Work from "./components/Work"
import Stripes from "./components/Stripes"
import Products from "./components/Products"
import Marquees from "./components/Marquees"
import Boxes  from "./components/Boxes"
import Nich  from "./components/Nich"
import LocomotiveScroll from "locomotive-scroll";


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full   bg-zinc-900 text-white">
      <Nav/>
       <Work/>
       <Stripes/>
       <Products/>
       <Marquees/>
       <Boxes/>
       <Nich/>
    </div>
  )
}

export default App;
