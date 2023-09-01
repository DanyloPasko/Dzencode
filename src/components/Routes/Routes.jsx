import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { GroupPage } from '../../Pages/Groups/Groups';
import { ComingPage } from '../../Pages/Coming/Coming';


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ComingPage />} />
      <Route path="/groups" element={<GroupPage />} />
    </Routes>
  );
}
