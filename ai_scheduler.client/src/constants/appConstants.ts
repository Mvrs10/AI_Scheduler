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
type AppModules = {
    title: string,
    path: string,
    image: string,
    objectFit: string,
}

const appModules : AppModules[] = [
        { title: "TI Automotive Home", path: "/", image: home, objectFit: "fill" },
        { title: "Schedule View", path: "/view-schedules", image: viewSchedule, objectFit: "fill" },
        { title: "Schedule Generation", path: "/generate-schedules", image: generateSchedule, objectFit: "fill" },
        { title: "Plant Status", path: "/plant-status", image: plantStatus, objectFit: "fill" },
        { title: "Configuration", path: "/configuration", image: config, objectFit: "fill" },
        { title: "Logs", path: "/logs", image: log, objectFit: "fill" },
        { title: "My Profile", path: "/profile", image: profile, objectFit: "contain" },
        { title: "Help", path: "/help", image: help, objectFit: "contain" },
]

const appName : string = "AI Scheduler";

export { type AppModules, appModules, appName, appTheme }