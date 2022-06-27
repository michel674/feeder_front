import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Cattles } from './pages/cattles';
import { Cattle } from './pages/cattle';

export const  AppRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Home />} />
      <Route path="/cattles" element={<Cattles />} />
      <Route path="/cattles/:id" element={<Cattle />} />
      <Route path="/div" element={<div>Hello World</div>} />
    </Routes>
  );
};
