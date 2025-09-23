import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Landing from './pages/Landing';
import WhatWeBuild from './pages/WhatWeBuild';
import TalentMarketplace from './pages/TalentMarketplace';
import ForOrganizations from './pages/ForOrganizations';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Demo from './pages/Demo';
import ArivuAI from './pages/ArivuAI';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
        <AnimatedBackground />
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/what-we-build" element={<WhatWeBuild />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/talent-marketplace" element={<TalentMarketplace />} />
          <Route path="/for-organizations" element={<ForOrganizations />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/arivu-ai" element={<ArivuAI />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;