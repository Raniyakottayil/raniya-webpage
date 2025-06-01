import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

console.log('🚀 Script loaded');

const rootElement = document.getElementById('root');
console.log('🧱 Root element:', rootElement);

if (rootElement) {
  rootElement.innerHTML = '<h2 style="color:green">This is raw JS insert into root</h2>';
  setTimeout(() => {
    createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }, 2000); // delay mount
} else {
  console.error('❌ Could not find #root');
}

