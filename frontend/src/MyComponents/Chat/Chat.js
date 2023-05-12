import React, { useEffect, useState } from 'react';
import './Chat.css';
import { useSearchParams } from 'react-router-dom';
import { db } from '../../firebase.js';
import { Timestamp } from 'firebase/firestore';
import { useStateValue } from '../../MyContexts/StateProvider';

export const Chat = () => {

    const [searchParams]=useSearchParams();

    const [{user,name}]=useStateValue();    
    let receiverUserId=searchParams.get('userid');
    let receiverUserName=searchParams.get('username');

    const [messageList,setMessageList]=useState([])
    const [sending,setSending]=useState(false);
    const [loading,setLoading]=useState(false);

    const messagesRef=db.collection('users').doc(user?.uid).collection('chats').doc(receiverUserId).collection('messages');
    const messagesRef2=db.collection('users').doc(receiverUserId).collection('chats').doc(user?.uid).collection('messages');

    useEffect(()=>{
        setLoading(true);
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
        setLoading(false);
        //eslint-disable-next-line
    },[messagesRef])

    const [newMessage,setNewMessage]=useState('')

    const sendMessage= async(event)=>{
        setSending(true);
        const message={
            text:newMessage,
            createdAt:Timestamp.now(),
            id:user.uid,
            senderName:name
        };
        event.preventDefault();
        if(newMessage.length===0) return;
        await messagesRef.add(message)
        if(user?.uid!==receiverUserId) messagesRef2.add(message);
        setNewMessage('');
        setSending(false);
    }
    
    return (
        <>
            <div><h1>{receiverUserName}</h1></div>
            {loading && "Loading..."}
            <div className="messages">
                {messageList.map(message=>{
                    const {text,senderName,id}=message;
                    const status=(user.uid===id)?'sent':'received';
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

            <form id="sendMessage">
                <input 
                    type="text"
                    value={newMessage}
                    onChange={(e)=>setNewMessage(e.target.value)}
                />
                <button type="submit" onClick={sendMessage}> Send Message</button>
            </form>
            {sending&&"Message Sending..."}
        </>
    )
}
