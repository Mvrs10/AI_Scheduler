import React, { createContext, useState } from 'react'

export type PermissionContextType = {
    isAdmin: boolean,
    setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>,
}

const initPermissionContextState : PermissionContextType = {
    isAdmin: false,
    setIsAdmin: () => {}
}

const PermissionContext = createContext<PermissionContextType>(initPermissionContextState);

export const PermissionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(false);
    return (
        <PermissionContext.Provider value={{ isAdmin, setIsAdmin }}>
            {children}
        </PermissionContext.Provider>
    )
}

export default PermissionContext
