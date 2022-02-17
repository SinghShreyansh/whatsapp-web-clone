import React from 'react';
import './SenderChat.css'



const SenderChat = ({message}) => {
  return <div className='senderChat'>
           <p className='chat__message'>
            <span className="chat__name">
              {message.name}
            </span>
            {message.message}
            <span className="chat__timestamp">
              {message.timestamp}
            </span>
          </p>
  </div>;
};

export default SenderChat;
