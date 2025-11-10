import React from 'react'

import { appModules } from '../../constants/appConstants'

const ScheduleGeneration: React.FC = () => {
    return (
        <main>
            <div>
                {appModules[2].title}
            </div>
        </main>
    )
}

export default ScheduleGeneration