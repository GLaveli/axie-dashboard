import React from 'react';
import { SidebarMenu } from './styles'
import { MdLineStyle, MdTimeline, MdTrendingUp } from 'react-icons/md'

export const Sidebar = () => {
 return (
  <SidebarMenu>
   <div className="sidebarWrapper">
    <div className="sidebarMenu">
     <h3 className="sidebarTitle">Dashboard</h3>
     <ul className="siderbarList">
      <li className="sidebarListItem">
       <MdLineStyle className="sidebarIcon" />
       Home
      </li>
      <li className="sidebarListItem active">
       <MdTimeline className="sidebarIcon" />
       Analitics
      </li>
      <li className="sidebarListItem">
       <MdTrendingUp className="sidebarIcon" />
       Options
      </li>
     </ul>
    </div>
    <div className="sidebarMenu">
     <h3 className="sidebarTitle">Quick menu</h3>
     <ul className="siderbarList">
      <li className="sidebarListItem">
       <MdLineStyle className="sidebarIcon" />
       Home
      </li>
      <li className="sidebarListItem">
       <MdTimeline className="sidebarIcon" />
       Analitics
      </li>
      <li className="sidebarListItem">
       <MdTrendingUp className="sidebarIcon" />
       Options
      </li>
     </ul>
    </div>
    <div className="sidebarMenu">
     <h3 className="sidebarTitle">Notifications</h3>
     <ul className="siderbarList">
      <li className="sidebarListItem">
       <MdLineStyle className="sidebarIcon" />
       Home
      </li>
      <li className="sidebarListItem">
       <MdTimeline className="sidebarIcon" />
       Analitics
      </li>
      <li className="sidebarListItem">
       <MdTrendingUp className="sidebarIcon" />
       Options
      </li>
     </ul>
    </div>
    <div className="sidebarMenu">
     <h3 className="sidebarTitle">Staff</h3>
     <ul className="siderbarList">
      <li className="sidebarListItem">
       <MdLineStyle className="sidebarIcon" />
       Home
      </li>
      <li className="sidebarListItem">
       <MdTimeline className="sidebarIcon" />
       Analitics
      </li>
      <li className="sidebarListItem">
       <MdTrendingUp className="sidebarIcon" />
       Options
      </li>
     </ul>
    </div>
   </div>
  </SidebarMenu>
 )
}
