import React from 'react';

export const ChatMessage = ({ text }) => {

  let status = 'sent';

  return (
    <div className={`${status}`}>
      <p>{text}</p>
    </div>
  )
}