import React from 'react'

import { appModules } from '../../constants/appConstants'

const Configuration: React.FC = () => {
    return (
        <main className="main-container">
            <div className="module-title">
                {appModules[4].title}
            </div>
        </main>
    )
}

export default Configuration