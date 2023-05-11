import React, { useEffect, useState } from 'react'
import { db } from '../../../firebase'
import { User } from './User';

export const Users = () => {

  const [usersList,setUsersList]=useState([]);
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    setLoading(true);
    const query=db.collection('users');
    query.onSnapshot(querySnapshot=>{
      const data=querySnapshot.docs.map(doc=>({
        ...doc.data(),
        id:doc.userid
      }))
      setUsersList(data);
    })
    setLoading(false);
    //eslint-disable-next-line
  },[])

  

  return (
    <div className="users">
      <h1>Users</h1>
      {loading&& "Loading..."}
      {usersList.map(user=>(<User id={user.userid} />))}
    </div>
  )
}
