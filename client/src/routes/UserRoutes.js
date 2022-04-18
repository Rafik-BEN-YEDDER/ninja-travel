import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function UserRoutes({children}) {
    const load = useSelector((state) => state.userReducer.load);
    const isAuthUser = useSelector((state) => state.userReducer.isAuthUser);
  return (load?<h1>loadiiiing</h1>:isAuthUser?children :<Navigate to='/'/>)
}

export default UserRoutes