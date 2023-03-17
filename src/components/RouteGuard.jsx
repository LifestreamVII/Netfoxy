import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import auth from '../helpers/auth'; 

const RouteGuard = ({ path }) => {
 
   const {isLogged, getStatus} = auth();
   
   if (path === "/dashboard"){
       if (isLogged())
       {
        return (
                    getStatus() !== "setup" ? <Outlet /> : <Outlet />
                );
        }
        else{
            <Navigate replace to="/login"/>
        }
   }
   else if (path === "/setup" ) {
    if (isLogged()){
        return (
            getStatus() === "setup" ? <Outlet /> : <Navigate replace to="/dashboard"/>
            );
    }
    else{
        <Navigate to="/login"/>
    }
   }
   else {
       return (
            isLogged() ? <Outlet /> : <Navigate replace to="/login"/>
       );
   }
};
 
export default RouteGuard;
