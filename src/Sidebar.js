import React from 'react';
import './Sidebar.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton,Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MainPageComponent from './MainPageComponent';

const Sidebar = ({LastMsg}) => {
  return <div className='sidebar'>
           <div className="sidebar_header">
           <Avatar className='AvatarIcon' src="https://avatars.githubusercontent.com/u/91277635?v=4"/>
               <div className="sidebar_headerRight">
               <IconButton/>
                 <DonutLargeIcon/>
                 <IconButton/>
                 <IconButton/>
                 <ChatIcon/>
                 <IconButton/>
                 <IconButton/>
                 <MoreVertIcon/>
                 <IconButton/>
               </div>
           </div>
           <div className="searchbar">
            <SearchIcon id="searchIconId" className='searchIcon'/>
             <input type="text" className='searchBox' placeholder='Search...' >
             </input>
              
           </div>
           <div className="addNewChat">
             Add new Chat
           </div>

           <div className="sidebarChat">
             <MainPageComponent LastMsg={LastMsg} RoomName="Room 1" key="Room 1"/>
             <MainPageComponent LastMsg={LastMsg}  RoomName="Room 2" key="Room 2" />
           </div>
  </div>;
};

export default Sidebar;
