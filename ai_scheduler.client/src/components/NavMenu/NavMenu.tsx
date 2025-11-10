import React from 'react'
import {type PopoverOrigin, Menu, MenuItem} from '@mui/material'

import { type AppModules } from '../../constants/appConstants'

type NavMenuProps = {
    items: AppModules[];
    anchorEl: HTMLElement | null;
    open: boolean;
    onClose: () => void;
    anchorOrigin: PopoverOrigin;
    transformOrigin: PopoverOrigin;
}

const NavMenu: React.FC<NavMenuProps> = ({
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
          {items.map((item) => (
              <MenuItem sx={{ "&:hover": { color: "#CE3A3E", textDecoration: "underline", textUnderlineOffset: "0.2rem" } }} key={item.title} onClick={handleMenuClose}>
                  {item.title}
              </MenuItem>
          ))}
    </Menu>
  )
}

export default NavMenu