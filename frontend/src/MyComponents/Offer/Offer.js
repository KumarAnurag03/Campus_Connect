import React from "react";
import "./Offer.css";
export const Offer= ()=>{

    return(
    <>
       <div className="offer_heading"> <h1>What We Offer</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum doloribus sapiente perferendis ab sit necessitatibus laboriosam ut officia ad totam!</p></div>
       <div className="offer_container">
    
      <div className="sub-div">
        <img src={require("./i1.webp")}  />
        <b>Connections</b><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus debitis molestias possimus hic eveniet ad!</p>
      </div>
      <div className="sub-div">
        <img src={require("./i2.webp")} />
        <b>Growth</b><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus debitis molestias possimus hic eveniet ad!</p>
      </div>
     
      <div className="sub-div">
        <img src={require("./i3.webp")}  />
        <b>Guidance</b><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus debitis molestias possimus hic eveniet ad!</p>
      </div>
   
      <div className="sub-div">
        <img src={require("./i4.webp")}/>

        <b>Opportunities</b><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus debitis molestias possimus hic eveniet ad!</p>
      </div>
      </div>
  

     </>
    );

}


/*

 <div className="offer_main">
        <h1>What We Offer</h1>
        <p> some random text here not sure what to reite thats why  just filling up space. 
        </p>
     </div>
     <div style={{ }}className="offer_body">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={require("./i1.webp")} alt="image1" style={{ width: '80%', height: '30vh' }} />
        <p>Text for Image 1</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={require("./i2.webp")}  alt="image2" style={{ width: '22vw', height: '30vh' }} />
        <p>Text for Image 2</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={require("./i3.webp")}  alt="image3" style={{ width: '22vw', height: '30vh' }} />
        <p>Text for Image 3</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p>Text for Image 4</p>
      </div>
    </div>
*/