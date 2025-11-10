import React from 'react'

import { appModules } from '../../constants/appConstants'

const ScheduleView: React.FC = () => {
    return (
        <main>
            <div>
                {appModules[1].title}
            </div>
        </main>
    )
}

export default ScheduleView