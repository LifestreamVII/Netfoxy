import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
 
const RouteGuard = ({ element: Component, ...rest }) => {
 
   function isLogged() {
       let flag = false;
       sessionStorage.getItem("username") ? flag=true : flag=false
       console.log(flag);
       return flag
   }
 
   return (
        isLogged() ? <Outlet /> : <Navigate replace to="/login"/>
   );
};
 
export default RouteGuard;
