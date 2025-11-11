import React from 'react'
import { Link } from 'react-router-dom'
import {type PopoverOrigin, Menu, MenuItem} from '@mui/material'

import { type Modules } from '../../constants/appConstants'

type PropsType = {
    items: Modules[];
    anchorEl: HTMLElement | null;
    open: boolean;
    onClose: () => void;
    anchorOrigin: PopoverOrigin;
    transformOrigin: PopoverOrigin;
}

const NavMenu: React.FC<PropsType> = ({
    items,
    anchorEl,
    open,
    onClose: handleMenuClose,
    anchorOrigin,
    transformOrigin
}) => {
  return (
    <Menu 
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
    >
          {items.map((item,index) => (
              <MenuItem
                  key={index}
                  component={Link}
                  to={item.path}
                  {...(item.path.includes("https") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  onClick={handleMenuClose}
                  sx={{ "&:hover": { color: "#CE3A3E", textDecoration: "underline", textUnderlineOffset: "0.2rem" } }}  >
                  {item.title}
              </MenuItem>
          ))}
    </Menu>
  )
}

export default NavMenu