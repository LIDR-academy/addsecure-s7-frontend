import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import Positions from './components/Positions';
import PositionBoard from './components/PositionBoard';
import AddCandidateForm from './components/AddCandidateForm';
import LandingPageDemo from './components/LandingPageDemo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPageDemo />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="positions" element={<Positions />} />
          <Route path="positions/:id" element={<PositionBoard />} />
          <Route path="add-candidate" element={<AddCandidateForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
