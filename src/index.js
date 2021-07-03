import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebase = require('firebase');
require('firebase/firestore');

firebase.default.initializeApp({
  apiKey: "AIzaSyCKxggg6wfS26B0qv39xO1T6kbPOcWqals",
  authDomain: "evernote-clone-12.firebaseapp.com",
  projectId: "evernote-clone-12",
  storageBucket: "evernote-clone-12.appspot.com",
  messagingSenderId: "322462934587",
  appId: "1:322462934587:web:3959af99043f9e63d31e1e",
  measurementId: "G-HNFYH2C3TZ"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-container')
);

reportWebVitals();
