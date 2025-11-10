import React from 'react'

import { appModules } from '../../constants/appConstants'

const Configuration: React.FC = () => {
    return (
        <main>
            <div>
                {appModules[4].title}
            </div>
        </main>
    )
}

export default Configuration