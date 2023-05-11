import { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
}from 'react-router-dom';
import { Chat } from './MyComponents/Chat/Chat.js'
import { Signup } from './MyComponents/SignUp/Signup.js';
import { Home } from './MyComponents/Home.js';
import { Users } from './MyComponents/Chat/Users/Users.js';
import { auth, db } from './firebase';
import { useStateValue } from './MyContexts/StateProvider';
import { Profile } from './MyComponents/Profiles/Profile.js';
import { Offer } from './MyComponents/Offer/Offer';

function App() {

  //eslint-disable-next-line
  const [{},dispatch]=useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        db.collection('users').doc(authUser.uid).collection('profile').doc('userInfo').get()
        .then(doc=>{
          let name=doc.data().name;
          let college=doc.data().college;
          let email=doc.data().email;
          let yearOfStudy=doc.data().yearOfStudy;
          dispatch({
            type:'SET_USER',
            user:authUser,
            name,
            college,
            email,
            yearOfStudy
          })
        })
      }
      else{
        dispatch({
          type:'SET_USER',
          user:null,
          name:'',
          college:'',
          email:'',
          yearOfStudy:''
        })
      }
    })
  //eslint-disable-next-line
  },[auth])

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/chat/' element ={<Chat />}/>
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/users' element={<Users />} />
          <Route exact path='/' element={<Offer/>}/>
          <Route exact path='/profile' element={<Profile/>}/>
          <Route exact path='/chat/:username' element ={<Chat />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
