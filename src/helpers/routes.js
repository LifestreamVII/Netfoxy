import React from "react";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import RouteGuard from "../components/RouteGuard";
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';

//history
import { history } from './history';
 
//pages
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Setup from '../pages/Setup';
import Signout from "../pages/Signout";

 
function Routing() {
   return (
    <BrowserRouter location={history.location} navigator={history}>
        <Navbar/>
        <ToastContainer theme='colored' position='top-center'></ToastContainer>

        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/setup" element={<RouteGuard/>}>
                <Route path="/setup" element={<Setup/>}/>
            </Route>
            <Route path="/signout" element={<RouteGuard/>}>
                <Route path="/signout" element={<Signout/>}/>
            </Route>
            <Route path="/register" element={<Register/>} />
            <Route path="/" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
   );
}
 
export default Routing