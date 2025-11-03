//import React from "react"
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {IconButton, Avatar} from '@mui/material'

import header from "./Header.module.css"

// type PropsType = {
//     signOut: boolean,
//     setSignOut: React.Dispatch<React.SetStateAction<boolean>>
// }

const Header = () => {

    const content = (
        <div className={header.header}>
            <div className={header.menu} >
                <IconButton className={header.button} >
                    <MenuRoundedIcon sx={{ color: "#E8EBEF", width: 27, height:27 }} />
                </IconButton>
            </div>

            <div className={header.title}>AI Scheduler</div>

            <div className={header.items}>
                <IconButton className={header.button}>
                    <NotificationsIcon sx={{ width: 27, height: 27, color: "#E8EBEF" }} />
                </IconButton>

                <Avatar className={header.avatar} sx={{ bgcolor: "#33757F", width: 35, height: 35, fontSize: 17 }}>AD</Avatar>
            </div>
        </div>
    )

    return content;
}

export default Header