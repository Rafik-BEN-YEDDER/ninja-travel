import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function AdminRoutes({children}) {
    const load = useSelector((state) => state.adminReducer.load);
    const isAuth = useSelector((state) => state.adminReducer.isAuth);
  return (load?<h1>loadiiiing</h1>:isAuth?children :<Navigate to='/'/>)
}

export default AdminRoutes