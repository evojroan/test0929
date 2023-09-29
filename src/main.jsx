import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Carousel, initTE, Datepicker, Select, Timepicker } from 'tw-elements';

initTE({ Carousel, Datepicker, Select, Timepicker });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
