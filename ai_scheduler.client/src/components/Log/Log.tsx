import React from 'react'

import { appModules } from '../../constants/appConstants'

const Log: React.FC = () => {
    return (
        <main>
            <div>
                {appModules[5].title}
            </div>
        </main>
    )
}

export default Log