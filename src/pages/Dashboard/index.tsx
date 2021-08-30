import React from 'react';
import Topbar from '../../components/Topbar';

import { Sidebar } from '../../components/Sidebar';

import DashboardHome from '../DashboardHome/inedex';

const Dashboard: React.FC = () => {
 return (
  <div className="scroll">
   <Topbar />
   <div className="sidebarContainer">
    <Sidebar />
    <DashboardHome />
   </div>
  </div>
 )
};

export default Dashboard;