import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Background from './components/Background';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import CourseDetailPage from './pages/CourseDetailPage';
import ScheduleTable from './components/science$code';

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen overflow-hidden">
        <Background />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/course/:ageGroup" element={<CourseDetailPage />} />
          <Route path="/schedule" element={<ScheduleTable />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App