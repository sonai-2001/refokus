
import React from "react"
import Stripe from "./Stripe"

function Stripes (){
    
    var names=["Apurba", "Ankush", "Sayan", "Manish","Ayan","Deep"]
    return(
       <div className="flex mt-[20vh] mb-20">
       {names.map((elem)=><Stripe name={elem}/>)}
       
       </div>
    )
}
export default Stripes