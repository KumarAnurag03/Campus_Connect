import React, { useEffect, useState } from 'react';
import './Chat.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { db } from '../../firebase.js';
import { ChatMessage } from './ChatMessage.js';
import { Timestamp } from 'firebase/firestore';
import { useStateValue } from '../../MyContexts/StateProvider';

export const Chat = () => {

    const [searchParams]=useSearchParams();
    const navigate=useNavigate();

    const [{user,name}]=useStateValue();    
    let receiverUserId=searchParams.get('userid');
    let receiverUserName=searchParams.get('username');

    const [messageList,setMessageList]=useState([])

    const messagesRef=db.collection('users').doc(user?.uid).collection('chats').doc(receiverUserId).collection('messages');
    const messagesRef2=db.collection('users').doc(receiverUserId).collection('chats').doc(user?.uid).collection('messages');

    useEffect(()=>{
        if(user){
            messagesRef
            .orderBy('createdAt','desc').limit(25)
            .onSnapshot(querySnapshot=>{
                const data=querySnapshot.docs.map(doc=>({
                    ...doc.data(),
                }));
                setMessageList(data.reverse());
            })
        }
        //eslint-disable-next-line
    },[messagesRef])

    const [newMessage,setNewMessage]=useState('')

    const sendMessage= async(event)=>{
        const message={
            text:newMessage,
            createdAt:Timestamp.now(),
            id:user.uid,
            senderName:name
        };
        event.preventDefault();
        if(newMessage.length===0) return;
        await messagesRef.add(message)
        await messagesRef2.add(message);
    }
    
    return (
        <>
            <div><h1>{receiverUserName}</h1></div>
            <div className="messages">
                {messageList.map(message=>{
                    const {text,senderName,id}=message;
                    const status=(user.uid==id)?'sent':'received';
                    return(
                        <div className="message">
                            <div className={status}>
                                <h4>{senderName} :</h4>
                                <p>{text}</p>
                                <small>{status}</small>
                            </div>
                        </div>
                    )
                })}
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
