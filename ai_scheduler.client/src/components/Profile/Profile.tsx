import React from 'react'

import { appModules } from '../../constants/appConstants'

const Profile: React.FC = () => {
    return (
        <main className="main-container">
            <div className="module-title">
                {appModules[6].title}
            </div>
        </main>
    )
}

export default Profile