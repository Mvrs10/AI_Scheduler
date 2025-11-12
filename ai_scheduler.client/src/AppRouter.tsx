import { Routes, Route} from 'react-router-dom'

import Home from './components/Home/Home.tsx'
import ScheduleView from './components/ScheduleView/ScheduleView.tsx'
import ScheduleGeneration from './components/ScheduleGeneration/ScheduleGeneration.tsx'
import PlantStatus from './components/PlantStatus/PlantStatus.tsx'
import Configuration from './components/Configuration/Configuration.tsx'
import Log from './components/Log/Log.tsx'
import Profile from './components/Profile/Profile.tsx'
import Help from './components/Help/Help.tsx'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.tsx'
import { appModules } from './constants/appConstants.ts'

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path={appModules[1].path} element={<ScheduleView />} />
            <Route
                path={appModules[2].path}
                element={
                    <ProtectedRoute>
                        <ScheduleGeneration />
                    </ProtectedRoute>
                }
            />
            <Route
                path={appModules[3].path}
                element={
                    <ProtectedRoute>
                        <PlantStatus />
                    </ProtectedRoute>
                }
            />
            <Route
                path={appModules[4].path}
                element={
                    <ProtectedRoute>
                        <Configuration />
                    </ProtectedRoute>
                }
            />
            <Route
                path={appModules[5].path}
                element={
                    <ProtectedRoute>
                        <Log />
                    </ProtectedRoute>
                }
            />
            <Route
                path={appModules[6].path}
                element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                }
            />
            <Route path={appModules[7].path} element={<Help />} />
        </Routes>
    );
};

export default AppRouter