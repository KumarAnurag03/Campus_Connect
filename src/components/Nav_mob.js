import React from 'react'
import { Drawer,IconButton,List,ListItemButton,PaperProps , ListItemIcon, ListItemText } from "@mui/material";
import ListIcon from '@mui/icons-material/List';
import { useState } from "react";

const Nav_mob = ({links}) => {
    const [open, setopen] = useState(false);
  return (
    <>
    <Drawer variant='temporary' anchor='top' PaperProps={{
      sx : {
        backgroundColor: 'rgba(192,104,232,0.6)',
        width:{
          xs: "100%"
        }
      }
    }} open={open} onClose={() =>setopen(false) } >
      <List>
        <ListItemButton>
          <ListItemIcon>
            <ListItemText sx={{color: "rgba(66,1,83,1)" }}>Home</ListItemText>
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ListItemText sx={{color: "rgba(66,1,83,1)" }}>About Us</ListItemText>
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ListItemText sx={{color: "rgba(66,1,83,1)" }}>Contact Us</ListItemText>
          </ListItemIcon>
        </ListItemButton>
      </List>
    </Drawer>
    <IconButton size='medium' sx={{marginLeft: "auto", color: "rgba(66,1,83,1)" }} onClick={()=> setopen(!open)} >
        <ListIcon/>
    </IconButton>
    </>
  )
}

export default Nav_mob