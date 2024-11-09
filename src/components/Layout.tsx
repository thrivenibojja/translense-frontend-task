// src/components/Layout.tsx

import React from 'react';
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="main-content d-flex">
        <LeftSidebar />
        <div className="content flex-grow-1">
          {children} {/* Allows children to be passed */}
        </div>
      </div>
    </div>
  );
};

export default Layout;





