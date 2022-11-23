import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCnKMjk--3F5M-lBncaQhFkOv5LxhCdcFA",
  authDomain: "coderhouse-fvd.firebaseapp.com",
  projectId: "coderhouse-fvd",
  storageBucket: "coderhouse-fvd.appspot.com",
  messagingSenderId: "252611736624",
  appId: "1:252611736624:web:a84ec4518dabf0b5eb29f5"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
