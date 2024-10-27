import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SidebarProvider } from './context/sidebarContext';
import { MealProvider } from './context/mealContext';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SidebarProvider>
      <MealProvider>
        <App />
      </MealProvider>
    </SidebarProvider>
  </React.StrictMode>
);

// Change this line to register the service worker
serviceWorkerRegistration.register();

reportWebVitals();
