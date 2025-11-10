import React, { useState } from "react"
//import { useNavigate } from "react-router-dom";

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { IconButton, Avatar } from '@mui/material'

import { appName, appModules } from '../../constants/appConstants.ts'
import NavMenu from '../../components/NavMenu/NavMenu.tsx'
import Clock from '../../components/Clock/Clock.tsx'
import header from "./Header.module.css"
import logo from '../../images/TI Logo-Colour.png'

const Header = () => {

    /*Constants*/

    /*State variables*/
    const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);
    const open : boolean = Boolean(anchorEl);

    const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

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
        <header className={header.header}>
            <div className={header.menu} >
                <IconButton className={header.button} sx={{ ...buttonStyles }} onClick={handleMenuClick} aria-label="Menu">
                    <MenuRoundedIcon className={header.icon} sx={{ ...iconStyles }} />
                </IconButton>
                <NavMenu 
                    items={appModules}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleMenuClose}
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    transformOrigin={{ vertical: "top", horizontal: "left" }}
                />
                <div className={header["title-container"]}>
                    <img src={logo} alt="TI Automotive Logo" className={header["title-logo"]} />
                    <span className={header["title-text"]}>TI AUTOMOTIVE</span>
                </div>                
            </div>

            <div className={header.app} aria-label="AI Scheduler">
                <span className={header["app-name"]}>{appName}</span>
            </div>

            <div className={header.items}>
                <Clock />
                <IconButton className={header.button} sx={{ ...buttonStyles }} aria-label="Notification">
                    <NotificationsIcon className={header.icon} sx={{ ...iconStyles }} />
                </IconButton>

                <Avatar className={header.avatar} sx={{ bgcolor: "#33757F", width: 35, height: 35, fontSize: 17 }} aria-label="Avatar">AD</Avatar>
            </div>
        </header>
    )

    return content;
}

export default Header