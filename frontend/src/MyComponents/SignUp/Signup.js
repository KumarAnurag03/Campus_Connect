import React, { useEffect, useState } from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom';
import 'https://kit.fontawesome.com/a076d05399.js';
import { auth, db } from '../../firebase';

export const Signup = () => {

    const navigate=useNavigate();

    const [name,setName]=useState('');
    const [college,setCollege]=useState('');
    const [yearOfStudy,setYearOfStudy]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [errorMessage,setErrorMessage]=useState('');

    useEffect(() => {
        if(password.length && confirmPassword.length && password!==confirmPassword) setErrorMessage("The password and the confirm password do not match");
        else setErrorMessage('');
    }, [password,confirmPassword])
    

    const signUp=(e)=>{
        e.preventDefault();
        if(password===confirmPassword){
            auth.createUserWithEmailAndPassword(email,password)
            .then((authUser)=>{
                db.collection('users').doc(authUser.user.uid).set({
                    userid:authUser.user.uid
                }).then(()=>{
                    db.collection('users').doc(authUser.user.uid).collection('profile').doc('userInfo').set({
                        name,email,yearOfStudy,college
                    }).then(()=>{
                        auth.signInWithEmailAndPassword(email,password)
                        .then(auth=>{
                            if(auth) navigate('/');
                        }).catch(error=>alert(error.message))
                    }).catch(error=>alert(error.message))
                }).catch(error=>alert(error.message))
            })
            .catch(error=>alert(error.message))
        }
        else alert("The password and confirm password do not match");
    }

    return (
        <div className="container">
            <h1>Join Campus Connect</h1>
            <form>
                <div className="input-container">
                    <i className='fas fa-user' ></i>
                    <input
                        type="text"
                        placeholder="Full Name"
                        name="fullname"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        required 
                    />
                </div>
                <div className="input-container">
                    <i className="fas fa-university"></i>
                    <input
                        type="text"
                        placeholder="College"
                        name="college"
                        value={college}
                        onChange={(e)=>setCollege(e.target.value)}
                        required
                    />
                </div>
                <div className="input-container">
                    <i className="fas fa-calendar"></i>
                    <input
                        type="number"
                        placeholder="Year of Study"
                        name="year"
                        value={yearOfStudy}
                        onChange={(e)=>setYearOfStudy(e.target.value)}
                        required
                    />
                </div>
                <div className="input-container">
                    <i className="fas fa-envelope"></i>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-container">
                    <i className="fas fa-lock"></i>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="input-container">
                    <i className="fas fa-lock"></i>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="confirm-password"
                        value={confirmPassword}
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <p className="errorMessage">
                    {errorMessage}
                </p>
                <button type="submit" onClick={signUp} className="continue-btn">Continue to Campus Connect</button>
            </form>
            <p>Already have an account? <Link to="#">Sign In</Link></p>
        </div>
    )
}
