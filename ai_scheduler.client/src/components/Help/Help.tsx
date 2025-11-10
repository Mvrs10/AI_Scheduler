import React from 'react'

import { appModules } from '../../constants/appConstants'

const Help: React.FC = () => {
    return (
        <main className="main-container">
            <div className="module-title">
                {appModules[7].title}
            </div>
        </main>
    )
}

export default Help