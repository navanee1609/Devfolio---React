import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import emailjs from 'emailjs-com';

emailjs.init("g-P3tk-xIae8oKn6U");


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

