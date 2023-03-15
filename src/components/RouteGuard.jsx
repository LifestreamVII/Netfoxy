import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import auth from '../helpers/auth'; 

const RouteGuard = ({ path }) => {
 
   const {isLogged, getStatus} = auth();
   
   if (path === "/dashboard"){
       return (
            getStatus() !== "setup" ? <Outlet /> : <Navigate replace to="/setup"/>
       );
   }
   else if (path === "/setup" ) {
       return (
            getStatus() === "setup" ? <Outlet /> : <Navigate replace to="/dashboard"/>
       );
   }
   else {
       return (
            isLogged() ? <Outlet /> : <Navigate replace to="/login"/>
       );
   }
};
 
export default RouteGuard;
