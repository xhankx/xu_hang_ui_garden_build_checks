import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Add any global styles
import App from './App'; // Import your main component
//console.log('App component rendered');  // Log to check if the component is rendering

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />  {/* This renders your App component */}
  </React.StrictMode>
);
