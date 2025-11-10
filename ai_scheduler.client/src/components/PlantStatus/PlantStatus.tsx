import React from 'react'

import { appModules } from '../../constants/appConstants'

const PlantStatus: React.FC = () => {
    return (
        <main>
            <div>
                {appModules[3].title}
            </div>
        </main>
    )
}

export default PlantStatus