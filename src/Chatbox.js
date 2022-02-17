import { Avatar } from '@mui/material';
import React, { useState} from 'react';
import './Chatbox.css'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SenderChat from './SenderChat';
import RecieverChat from './RecieverChat';
import MicIcon from '@mui/icons-material/Mic';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import axios from "./axios"


const Chatbox = ({ messages}) => {  
  
  const [text,setText] = useState("")

  

 
  const sendMessage= async (e)=>{
    e.preventDefault()

    const SenderName = document.getElementById("roomName").innerHTML;

    await axios.post("/messages/new",{    
        message: text,
        name: SenderName,
        timestamp: "Just now!",
        received: false
      }
    ).then(console.log("success"))

    setText("");
  }

  return ( 
     <div className='chatbox'>
      <div className="chat__header">
        <Avatar/>

        <div className="chat__headerInfo">
          <h3 id='roomName'>Room 1</h3>
          <p>Last seen at</p>
        </div>

        <div className="chat__headerRight">
               <SearchIcon/>  
                <MoreVertIcon/>  
        </div>
      </div>

      <div className="chat_body" id='chatBody'>
         { messages.map((message , index)=>{
           if(document.getElementById("roomName").innerHTML==="Room 1"){
            if(message.name==="Room 1"){
              return <SenderChat message={message} key={index}/>
            }else if(message.name==="Room 2"){
              return <RecieverChat message={message} key={index}/>
            }
            return null;
          }else{
            if(message.name==="Room 2"){
              return <SenderChat message={message} key={index}/>
            }else if(message.name==="Room 1"){
              return <RecieverChat message={message} key={index}/>
            }
            return null;
          }
          })}
          
         
      </div>

      <div className="chat__footer">
        <EmojiEmotionsIcon/>
        <MicIcon/>
        <form>
          <input value={text} onChange={(e)=> setText(e.target.value)}  className='chat__footerText' type="text" placeholder='Type a message' ></input>
          <button onClick={sendMessage} type='submit'>Send</button>
        </form>
        
      </div>
     </div>
  );

}

export default Chatbox;
