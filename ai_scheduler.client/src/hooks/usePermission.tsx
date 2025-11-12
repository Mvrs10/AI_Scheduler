import { useContext } from 'react'

import PermissionContext, { type PermissionContextType } from '../context/PermissionProvider.tsx'

const usePermission = (): PermissionContextType => {
    return useContext(PermissionContext)
}

export default usePermission