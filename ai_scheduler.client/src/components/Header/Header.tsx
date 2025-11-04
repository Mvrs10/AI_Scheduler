import React, { useState } from "react"
//import { useNavigate } from "react-router-dom";

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Menu, MenuItem, IconButton, Avatar} from '@mui/material'

import header from "./Header.module.css"
import logo from "../../images/TI Logo-Colour.png"

const Header = () => {

    /*Constants*/
    const menuTitles = [
        { title: "ABC Home", path: "/" },
        { title: "View Schedules", path: "/view-schedules" },
        { title: "Generate Schedules", path: "/generate-schedules" },
        { title: "Plant Status", path: "/plant-status" },
        { title: "Configuration", path: "/configuration" },
        { title: "Logs", path: "/logs" },
        { title: "My Profile", path: "/profile" },
        { title: "Help", path: "/help" },
    ];

    /*State variables*/
  const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);
  const open = Boolean(anchorEl);

  // Open menu
  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Close menu
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
        <div className={header.header}>
            <div className={header.menu} >
                <IconButton className={header.button} sx={{...buttonStyles}} onClick={handleMenuClick}>
                    <MenuRoundedIcon className={header.icon} sx={{...iconStyles}}/>
                </IconButton>
                      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        {menuTitles.map((item) => (
          <MenuItem key={item.title} onClick={handleMenuClose}>
            {item.title}
          </MenuItem>
        ))}
      </Menu>
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