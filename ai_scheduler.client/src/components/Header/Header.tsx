//import React from "react"
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {IconButton, Avatar} from '@mui/material'

import header from "./Header.module.css"
import logo from "../../images/TI Logo-Colour.png"

// type PropsType = {
//     signOut: boolean,
//     setSignOut: React.Dispatch<React.SetStateAction<boolean>>
// }

const Header = () => {

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
        <div className={header.header}>
            <div className={header.menu} >
                <IconButton className={header.button} sx={{...buttonStyles}}>
                    <MenuRoundedIcon className={header.icon} sx={{...iconStyles}}/>
                </IconButton>
                <span className={header["program-name"]}>AI Scheduler</span>
            </div>

            <div className={header.title}>
                <div className={header["title-container"]}>
                    <img src={logo} alt="TI Automotive Logo" className={header["title-logo"]} />
                    <span className={header["title-text"]}>TI AUTOMOTIVE</span>
                </div>
            </div>

            <div className={header.items}>
                <IconButton className={header.button} sx={{...buttonStyles}}>
                    <NotificationsIcon className={header.icon} sx={{...iconStyles}} />
                </IconButton>

                <Avatar className={header.avatar} sx={{ bgcolor: "#33757F", width: 35, height: 35, fontSize: 17 }}>AD</Avatar>
            </div>
        </div>
    )

    return content;
}

export default Header