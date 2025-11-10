import React from 'react'

import { appModules } from '../../constants/appConstants'

const Log: React.FC = () => {
    return (
        <main className="main-container">
            <div className="module-title">
                {appModules[5].title}
            </div>
        </main>
    )
}

export default Log