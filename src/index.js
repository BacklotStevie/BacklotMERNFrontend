import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import UserProvider from "./context/UserCtx";
import 'font-awesome/css/font-awesome.min.css';

//main thing that renders our application
ReactDOM.render(
  <UserProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </UserProvider>,
  document.getElementById('root')
);

reportWebVitals();