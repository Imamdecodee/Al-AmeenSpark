// components/PublicLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import Sidebar from './Sidebar';

const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;