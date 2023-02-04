import React from "react";
import { Avatar } from "@mui/material";

import "./SidebarChat.css";

const SidebarChat = () => {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat_info">
        <h2>Room name</h2>
        <p>This is the last chat</p>
      </div>
    </div>
  );
};

export default SidebarChat;
