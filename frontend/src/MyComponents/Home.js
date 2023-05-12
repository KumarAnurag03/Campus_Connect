import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { useStateValue } from '../MyContexts/StateProvider';

export const Home = () => {

  const navigate=useNavigate();
  
  const [{user,name,college,email,yearOfStudy}]=useStateValue();

  const handleAuthentication=()=>{
    if(user){
      auth.signOut()
      .then(()=>navigate('/signup'))
    }
  }

  return (
    <div className="home">
      <h1>Name: {name}</h1>
      <br />
      <h1>College: {college}</h1>
      <br />
      <h1>Years of Study: {yearOfStudy}</h1>
      <br />
      <h1>E-mail: {email}</h1>

      
      {user&& (<button onClick={handleAuthentication}>SignOut</button>)}
    </div>
  )
}
