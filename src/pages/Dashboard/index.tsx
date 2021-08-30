import React from 'react';
import Topbar from '../../components/Topbar';

import { Sidebar } from '../../components/Sidebar';

import Home from '../Home/inedex';

const Dashboard: React.FC = () => {
 return (
  <div className="scroll">
   <Topbar />
   <div className="sidebarContainer">
    <Sidebar />
    <Home />
   </div>
  </div>
 )
};

export default Dashboard;