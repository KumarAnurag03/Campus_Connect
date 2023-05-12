import React from "react";
import "./Option.css";
import {OPTIONS} from "./Option.js"


export const Option = () => {
  return (
    <>

     <div className="options_container">
    {  
       
        OPTIONS.map((option)=>{
            return(
               <>
               
        <div className="inner_option">
           <div className="image_body">
         {option.commingSoon && <marquee className="text"> COMING SOON</marquee>
         }
            <img src={require("./"+option.img)} className="option_img"/>
            
            </div>
           
     
          <span className="option_heading">{option.heading}</span>
            <p className="option_description">{option.desc}</p>
        </div>   
               </>
            )
        })
    }

  
</div>  </>
  )
}
