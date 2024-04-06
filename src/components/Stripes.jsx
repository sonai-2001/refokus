
import React from "react"
import Stripe from "./Stripe"

function Stripes (){
    
    var names=["Hardware", "Electronics", "SSD", "Memorycards","Speakers","Bluetooth"]
    return(
       <div className="flex mt-[20vh] mb-20">
       {names.map((elem)=><Stripe name={elem}/>)}
       
       </div>
    )
}
export default Stripes