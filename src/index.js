import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


export const GEOCODE_API_KEY="66c5eecb01eb9537461288yuqf27a73";

//TODO 2 enter your function app url here
export const FUNCTION_APP_URL="https://fa-09-cloud-user4.azurewebsites.net/api/getHospitalsList-New?code=+";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
