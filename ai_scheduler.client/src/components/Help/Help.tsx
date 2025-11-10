import React from 'react'

import { appModules } from '../../constants/appConstants'

const Help: React.FC = () => {
    return (
        <main>
            <div>
                {appModules[7].title}
            </div>
        </main>
    )
}

export default Help