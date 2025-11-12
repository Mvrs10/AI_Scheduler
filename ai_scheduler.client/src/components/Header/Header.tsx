import { Link } from 'react-router-dom'

import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { IconButton, Avatar, Switch } from '@mui/material'

import { appName, appModules, profileModules } from '../../constants/appConstants.ts'
import useMenu from '../../hooks/useMenu.tsx'
import usePermission from '../../hooks/usePermission.tsx'
import NavMenu from '../../components/NavMenu/NavMenu.tsx'
import Clock from '../../components/Clock/Clock.tsx'
import styles from "./Header.module.css"
import logo from '../../images/TI Logo-Colour.png'

// type PropsType = {
//     isAdmin: boolean;
//     setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
// }

const Header = () => {

    /*Constants*/

    /*State variables*/
    const appMenu = useMenu();
    const profileMenu = useMenu();
    const { isAdmin, setIsAdmin } = usePermission();
    /*Styling variables*/
    const buttonStyles = {
        borderRadius: "8px",
        border: "1px solid #E8EBEF",
        transition: "background-color 0.3s ease",
        "&:hover": { backgroundColor: "white", },
    }

    const iconStyles = {
        width: "27px",
        height: "27px",
        color: "white",
        transition: "color 0.3s ease",
    }

    const content = (
        <header className={styles.header}>
            <div className={styles.menu} >
                <IconButton className={styles.button} sx={{ ...buttonStyles }} onClick={appMenu.handleOpen} aria-label="Menu">
                    <MenuRoundedIcon className={styles.icon} sx={{ ...iconStyles }} />
                </IconButton>
                <NavMenu 
                    items={appModules}
                    anchorEl={appMenu.anchorEl}
                    open={appMenu.open}
                    onClose={appMenu.handleClose}
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    transformOrigin={{ vertical: "top", horizontal: "left" }}
                    isAdmin={isAdmin}
                />
                <Link to="/" className={styles["home-button"]}>
                    <img src={logo} alt="TI Automotive Logo" className={styles["title-logo"]} />
                    <span className={styles["title-text"]}>TI AUTOMOTIVE</span>
                </Link>                
            </div>

            <div className={styles.app} aria-label="AI Scheduler">
                <span className={styles["app-name"]}>{appName}</span>
            </div>

            <div className={styles.items}>
                <Switch checked={isAdmin} onChange={(_, checked) => setIsAdmin(checked)} />
                <Clock />

                <IconButton className={styles.button} sx={{ ...buttonStyles }} aria-label="Notification">
                    <NotificationsIcon className={styles.icon} sx={{ ...iconStyles }} />
                </IconButton>

                <Avatar className={styles.avatar} sx={{ bgcolor: "#33757F", width: 35, height: 35, fontSize: 17 }} onClick={profileMenu.handleOpen} aria-label="Avatar">AD</Avatar>
                <NavMenu
                    items={profileModules}
                    anchorEl={profileMenu.anchorEl}
                    open={profileMenu.open}
                    onClose={profileMenu.handleClose}
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    transformOrigin={{ vertical: "top", horizontal: "right" }}
                    isAdmin={isAdmin}
                />
            </div>
        </header>
    )

    return content;
}

export default Header