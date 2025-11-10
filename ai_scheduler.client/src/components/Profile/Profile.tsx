import React from 'react'

import { appModules } from '../../constants/appConstants'

const Profile: React.FC = () => {
    return (
        <main>
            <div>
                {appModules[6].title}
            </div>
        </main>
    )
}

export default Profile