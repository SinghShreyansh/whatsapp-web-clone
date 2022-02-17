import React, { useEffect, useState } from 'react';
import './App.css'
import Chatbox from './Chatbox';
import Sidebar from './Sidebar';
import Pusher from "pusher-js"
import axios from "./axios"

const App = () => {

  const [messages, setMessages] = useState([]);
  const [LstMsg, setLstMsg] = useState("")

  useEffect(() => {
    axios.get('/messages/sync')
      .then(response => {
        if (response.data) {
          setMessages(response.data);
          setLstMsg(response.data[response.data.length - 1].message);
        }

      })
  }, []);

  useEffect(() => {
    const pusher = new Pusher('cefcd0c9d7837fd9a268', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('whatsapp-clone-mern');
    channel.bind('inserted', function (newMessage) {
      setMessages([...messages, newMessage])
      setLstMsg(newMessage.message)
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };

  }, [messages])

  return (<div className='app'>
    <div className="app_body">
      <Sidebar LastMsg={LstMsg} />
      <Chatbox messages={messages} />

    </div>
  </div>

  );
};

export default App;
