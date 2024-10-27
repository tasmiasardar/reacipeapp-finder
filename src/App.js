// src/App.js
import React, { Profiler, useEffect } from 'react';
import './App.css';
// React Router
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// Pages
import { Home, MealDetails, Error, Category } from "./pages/index";
// Components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import FoodApp from './components/Form/Form';
import AnimatedList from './components/AnimatedList'; // Import the new AnimatedList component
// Service Worker
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

function App() {
  const sampleItems = [
    'Spaghetti Carbonara',
    'Chicken Alfredo',
    'Caesar Salad',
    'Tiramisu',
    'Pancakes',
  ];

  function handleRender(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) {
    console.log(`Profiling ${id}:`, { phase, actualDuration, baseDuration, startTime, commitTime, interactions });
  }

  useEffect(() => {
    // Register the service worker
    serviceWorkerRegistration.register();
  }, []);

  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meal/:id" element={<MealDetails />} />
          <Route path="/meal/category/:name" element={<Category />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Profiler id="FoodApp" onRender={handleRender}>
          <FoodApp />
        </Profiler>
        {/* Add the AnimatedList component here */}
        <AnimatedList items={sampleItems} />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
