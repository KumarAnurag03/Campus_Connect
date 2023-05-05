import React, { useEffect, useState } from 'react';
import './Chat.css';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase.js';
import { ChatMessage } from './ChatMessage.js';
import { Timestamp } from 'firebase/firestore';

export const Chat = () => {

    let {username}=useParams();

    const [messageList,setMessageList]=useState([]);

    const messagesRef=db.collection('chats').doc(`${username}`).collection('messages');

    useEffect(()=>{
        messagesRef
        .orderBy('createdAt','desc').limit(25)
        .onSnapshot(querySnapshot=>{
            const data=querySnapshot.docs.map(doc=>({
                ...doc.data(),
                id:doc.id
            }));
            setMessageList(data.reverse());
        })
    },[messagesRef])

    const [newMessage,setNewMessage]=useState('');

    const sendMessage= async(event)=>{
        event.preventDefault();
        if(newMessage.length===0) return;
        await messagesRef.add({
            text:newMessage,
            createdAt:Timestamp.now()
        })
    }
    
    return (
        <>
            <div>UserName:{username}</div>
            <div className="message">
                {messageList.map(message=>(<ChatMessage text={message.text} />))}
            </div>

            <form>
                <input 
                    type="text"
                    value={newMessage}
                    onChange={(e)=>setNewMessage(e.target.value)}
                />
                <button type="submit" onClick={sendMessage}> Send Message</button>
            </form>
        </>
    )
}
