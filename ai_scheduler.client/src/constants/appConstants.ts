import { createTheme } from '@mui/material/styles'
import home from '../images/TI_Home.jpg'
import viewSchedule from '../images/View_Schedule.png'
import generateSchedule from '../images/Generate_Schedule.png'
import log from '../images/Logs.jpg'
import config from '../images/Configuration.avif'
import help from '../images/Help.png'
import profile from '../images/Profile.png'
import plantStatus from '../images/Plant_Status.jfif'

const appTheme = createTheme({
    typography: {
      fontFamily: "Aptos, Arial, sans-serif",
    }
  })

/* Styles */


/* Content */
type Modules = {
    title: string,
    path: string,
    image: string,
    objectFit: string,
    requireAdmin: boolean,
}

const appModules : Modules[] = [
        { title: "TI Automotive Home", path: "https://abctechnologies.com/", image: home, objectFit: "fill", requireAdmin: false },
        { title: "Schedule View", path: "/schedule-view", image: viewSchedule, objectFit: "fill", requireAdmin: false },
        { title: "Schedule Generation", path: "/schedule-generation", image: generateSchedule, objectFit: "fill", requireAdmin: true },
        { title: "Plant Status", path: "/plant-status", image: plantStatus, objectFit: "fill", requireAdmin: true },
        { title: "Configuration", path: "/configuration", image: config, objectFit: "fill", requireAdmin: true },
        { title: "Logbook", path: "/log", image: log, objectFit: "fill", requireAdmin: true },
        { title: "My Profile", path: "/profile", image: profile, objectFit: "contain", requireAdmin: true },
        { title: "Help", path: "/help", image: help, objectFit: "contain", requireAdmin: false },
]

const profileModules : Modules[] = [
  {title: "Sign out", path: "/", image: "", objectFit: "", requireAdmin: false}
]

const appName : string = "AI Scheduler";

export { type Modules, appModules, profileModules, appName, appTheme }