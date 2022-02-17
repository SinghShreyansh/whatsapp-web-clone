import React from 'react';
import './RecieverChat.css'


const RecieverChat = ({message}) => {
  return <div className='recieverChat'>
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

export default RecieverChat;
