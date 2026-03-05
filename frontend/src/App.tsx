import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import Positions from './components/Positions';
import PositionBoard from './components/PositionBoard';
import AddCandidateForm from './components/AddCandidateForm';

const LandingPageDemo = lazy(() => import('./components/LandingPageDemo'));

const LoadingFallback = () => (
  <div className="min-h-screen bg-white flex items-center justify-center">
    <div className="text-center">
      <div className="text-2xl font-bold mb-4">Loading...</div>
      <div className="w-16 h-16 border-4 border-gray-200 border-t-black rounded-full animate-spin mx-auto"></div>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <LandingPageDemo />
            </Suspense>
          }
        />
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
