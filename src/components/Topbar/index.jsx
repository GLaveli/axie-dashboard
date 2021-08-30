import React from 'react';
import { MdNotifications, MdSettings } from 'react-icons/md';

import { TopbarContainer, TopbarWrapper, TopLeft, TopRight } from './styles';

const avatarImage = "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png";

const Topbar = () => {
 return (
  <TopbarContainer>
   <TopbarWrapper>
    <TopLeft>
     <span className="logo">lOGO </span>
    </TopLeft>

    <TopRight>
     <div className="topbarIconContainer">
      <MdNotifications />
      <span className="topIconBadge">2</span>
     </div>
     <div className="topbarIconContainer">
      <MdSettings />
      <span className="topIconBadge">10</span>
     </div>
     <div className="topbarIconContainer">
      <MdSettings />
     </div>
     <img src={avatarImage} alt="" className="topAvatar" />
     
    </TopRight>

   </TopbarWrapper>
  </TopbarContainer>
 )
}

export default Topbar
