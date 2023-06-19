import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      {/* <CounterApp value={0} /> */}
      <FirstApp title="Hi, I am Vegeta" />
   </React.StrictMode>
);
