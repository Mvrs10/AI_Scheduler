import { Routes, Route} from 'react-router-dom'

import Home from './components/Home/Home.tsx'
import ScheduleView from './components/ScheduleView/ScheduleView.tsx'
import ScheduleGeneration from './components/ScheduleGeneration/ScheduleGeneration.tsx'
import PlantStatus from './components/PlantStatus/PlantStatus.tsx'
import Configuration from './components/Configuration/Configuration.tsx'
import Log from './components/Log/Log.tsx'
import Profile from './components/Profile/Profile.tsx'
import Help from './components/Help/Help.tsx'

const AppRouter = () => {
    return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedules-view" element={<ScheduleView />} />
        <Route path="/schedule-generation" element={<ScheduleGeneration />} />
        <Route path="/plant-status" element={<PlantStatus/>} />
        <Route path="/configuration" element={<Configuration />} />
        <Route path="/logs" element={<Log />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/help" element={<Help />} />
    </Routes>
    );
};

export default AppRouter