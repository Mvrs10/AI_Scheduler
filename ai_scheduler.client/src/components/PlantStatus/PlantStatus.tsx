import React from 'react'

import { appModules } from '../../constants/appConstants'

const PlantStatus: React.FC = () => {
    return (
        <main className="main-container">
            <div className="module-title">
                {appModules[3].title}
            </div>
        </main>
    )
}

export default PlantStatus