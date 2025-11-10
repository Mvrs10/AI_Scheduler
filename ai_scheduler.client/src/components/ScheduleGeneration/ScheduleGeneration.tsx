import React from 'react'

import { appModules } from '../../constants/appConstants'

const ScheduleGeneration: React.FC = () => {
    return (
        <main className="main-container">
            <div className="module-title">
                {appModules[2].title}
            </div>
        </main>
    )
}

export default ScheduleGeneration