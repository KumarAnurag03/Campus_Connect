import React, { useState } from 'react';
import { useStateValue } from '../../MyContexts/StateProvider';

export const ChatMessage = ({ text,senderName,id }) => {

  const [{user}]=useStateValue();
  const [status,setStatus]=useState('');

  if(id===user.uid) setStatus('sent');
  else setStatus('received');

  return (
    <div className={`${status}`}>
      <h4>{senderName} :</h4>
      <p>{text}</p>
      {/* <small>{createdAt}</small> */}
      <br /><small>{status}</small>
    </div>
  )
}