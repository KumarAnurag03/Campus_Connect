import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { db } from '../../../firebase'

export const User = ({id}) => {

    const [name,setName]=useState('');

    useEffect(()=>{
        db.collection('users').doc(id).collection('profile').doc('userInfo').get()
        .then(doc=>{
            setName(doc.data().name);
        })
    },[id])

    const url=`/chat?userid=${id}&username=${name}`;

  return (
    <div>
        <li>{name}    <Link to={url}>Chat</Link></li>
    </div>
  )
}
