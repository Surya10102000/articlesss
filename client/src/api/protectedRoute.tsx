import {Navigate } from 'react-router-dom'

export const ProtectedRoute = ({children } : any) =>{
    const token = localStorage.getItem('token'); // Check if JWT token exists
    return token ? children : <Navigate to="/login" />;
}