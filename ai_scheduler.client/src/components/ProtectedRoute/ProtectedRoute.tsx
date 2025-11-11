import React from 'react'
import { Navigate } from 'react-router-dom'

type PropsType = {
    isAdmin: boolean;
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<PropsType> = ({isAdmin, children}) => {
  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute