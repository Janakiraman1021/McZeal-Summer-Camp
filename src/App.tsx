import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Background from './components/Background';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import CourseDetailPage from './pages/CourseDetailPage';
import ScheduleTable from './components/science$code';
import CodingCategories from './components/CodingCategories';
import MathCategories from './components/MathCategories';
import FullStackCourse from './components/FullStackCourse';
import LanguageLearningPage from './components/LanguageLearningPage';
import LearningAdventures from './components/LearningAdventures ';
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
          <Route path="/coding-categories" element={<CodingCategories />} />
          <Route path="/math-categories" element={<MathCategories />} />
          <Route path="/full-stack-course" element={<FullStackCourse />} />
          <Route path='/language' element={<LanguageLearningPage/>}/>
          <Route path='/english' element={<LearningAdventures/>}/>
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App