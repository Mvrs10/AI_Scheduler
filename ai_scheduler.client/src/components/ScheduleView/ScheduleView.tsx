import React from 'react'

import { appModules } from '../../constants/appConstants'

const ScheduleView: React.FC = () => {
    return (
        <main className="main-container">
            <div className="module-title">
                {appModules[1].title}
            </div>
        </main>
    )
}

export default ScheduleView