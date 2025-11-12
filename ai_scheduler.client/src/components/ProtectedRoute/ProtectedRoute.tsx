import React from 'react'
import { Navigate } from 'react-router-dom'

import usePermission from '../../hooks/usePermission';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAdmin } = usePermission();
  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute