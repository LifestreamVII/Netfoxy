import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Setup from './pages/Setup';
import Navbar from './components/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./main.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/setup" element={<Setup/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/" element={<Home/>}></Route>
    </Routes>
    <ToastContainer theme='colored' position='top-center'></ToastContainer>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
