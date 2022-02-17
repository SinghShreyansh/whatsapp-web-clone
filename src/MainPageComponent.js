import { Avatar } from '@mui/material';
import React from 'react';
import './MainPageComponent.css'

const MainPageComponent = ({LastMsg,RoomName}) => {
    const ClickRoom = (e)=>{
        e.preventDefault()

        document.getElementById("roomName").innerHTML= RoomName;     
        
     }
    
  return <div className='mainpagecomponent'  >
          <div className="mainpagecomponent_main" onClick={ClickRoom}>
              <Avatar/>
              <div className="messengerDetail">
                  <h2 className="messangerName">
                      {RoomName}
                  </h2>
                  
                  <div className='messengerLastMsg' name="LastMsg"  >
                      <p> 
                        {LastMsg}
                      </p>
                      </div>
              </div>
          </div>
  </div>;
};

export default MainPageComponent;
