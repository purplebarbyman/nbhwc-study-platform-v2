import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// ⬇️ Use HashRouter for Cloudflare compatibility
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);