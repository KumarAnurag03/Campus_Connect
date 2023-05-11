import React from "react";
// import { useState } from "react";
import { INTERESTS } from "./Interests";
import {GOALS} from "./Goals"
import "./main_logo.jpg";
import "./Profile.css";
import { useState } from "react";
export const Profile=()=>{

const [interests,setInterests]= useState([]);
const [goals,setGoals]= useState([]);

const addInterest=(interest)=>{

  const isFound = interests.some(element => {
    if (interest.id === element.id) {
      return true;
    }

    return false;
  });

  if(isFound) return;

  setInterests(interests=> [...interests, interest]);
  console.log(interest);
}

const removeInterest=(index)=>{
  setInterests([
    ...interests.slice(0, index),
    ...interests.slice(index + 1, interests.length)
  ]);
   
 

}

const addGoal=(goal)=>{
  
  const isFound = goals.some(element => {
    if (goal.id === element.id) {
      return true;
    }

    return false;
  });

  if(isFound) return;

  setGoals(goals=> [...goals, goal]);
  console.log(goals);
}

const removeGoals=(index)=>{
  setGoals([
    ...goals.slice(0, index),
    ...goals.slice(index + 1, goals.length)
  ]);

}



return(
 
 <>

   <div className="container">

     <center className="title">
     <img src={require("./main_logo.jpg")} alt="" className="logo"/>
      CAMPUS-CONNECT
     </center>
     <center className="heading">
   WHAT ARE YOU INTERESTED IN?
     </center>
     <div className="main">
     {
   INTERESTS.map((interest)=>{
// console.log(interest.name);
   return ( <button className="btn" data={interest.id} onClick={()=>addInterest(interest)}>
      {interest.name}
  {interest.img}
    </button>
    
    )
   })
     } </div>
     <div className="selected">
  {
    interests.map((interest, index)=>
    {
      return(
<button className="selected_interest" >
  <span className="remove_interest_icon"onClick={()=>removeInterest(index)}>&times;</span>{interest.name}</button>
     ) }  
    )}
 </div>
         <center className="heading">
   CHOOSE YOUR GOALS
     </center>
     <div className="main">{
   GOALS.map((goal)=>{
    
    return(<button className="btn" data={goal.id}onClick={()=>addGoal(goal)}>
      {goal.name}
    </button>)
   })
     }</div>
   
   
   <div className="selected">
  {
    goals.map((goal, index)=>
    {
      return(
<button className="selected_goal">
  <span className="remove_goal_icon"onClick={()=>removeGoals(index)}>&times;</span>{goal.name}</button>
     ) }  
    )}
 </div>

   </div>
   <center>
<button id="submitInfo">
  SUBMIT
</button>
</center>
   </>  
);


}