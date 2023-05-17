import { Grid,AppBar,ButtonBase, Toolbar, Tabs, Typography, Button,useMediaQuery, Tab,useTheme, Box } from "@mui/material"
import CableIcon from '@mui/icons-material/Cable';
import { useState } from "react";
import  Nav_mob  from "./Nav_mob";
import logo from "./cclogo.png";
import { Padding } from "@mui/icons-material";
export const Navbar = ({links}) => {
    const theme = useTheme();
    const istrue = useMediaQuery(theme.breakpoints.down('md'));
    const [value, setvalue] = useState();
  return (
    <AppBar elevation={1} sx={{
        // backgroundImage: "radial-gradient(circle, rgba(192,104,232,1) 1%, rgba(66,1,83,1) 35%);"
        backgroundColor: "rgba(255,255,255,1)"
    }} >
        <Toolbar>
            { istrue ? 
            <Grid sx={{placeItems:"center"}} container >
                <Grid item sx={{display: "flex"  }} xs>
                    <ButtonBase sx={{ width: 55, height: 50 }}>
                                <img
                                width="55" height="45"
                                alt="complex"
                                src={logo}
                                />
                            </ButtonBase>
                    {/* <Typography>
                        <CableIcon color="secondary"/>
                    </Typography> */}
                </Grid>
                <Grid item sx={{display: "flex" , justifyContent:"center" }} xs={8}>
                    <Typography variant="h5" sx={{color: "rgba(66,1,83,1)" }} >
                        Campus-Connect
                    </Typography>
                </Grid>
                <Grid item sx={{display: "flex" }} xs>
                    <Nav_mob links={links} />
                </Grid>
            </Grid> :
                <Grid sx={{placeItems:"center"}} container>
                    <Grid item xs={4} container spacing={1} >
                        <Grid item>
                            <ButtonBase sx={{ width: 55, height: 60 }}>
                                <img
                                width="55" height="55"
                                alt="complex"
                                src={logo}
                                />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={0.5}>
                                <Grid item xs>
                                <Typography  variant="h6" component="div" sx={{color: "rgba(66,1,83,1)" }} >
                                      Campus-Connect
                                </Typography>
                                <Typography gutterBottom variant="subtitle" component="div" sx={{color: "rgba(66,1,83,1)" }} >
                                    Connect.Communicate.Create
                                </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* <Typography>
                            <CableIcon color="secondary"/>
                            <Typography variant="subtitle" > Campus-Connect </Typography>
                            <Grid item xs={1} ></Grid>
                            <Grid item xs={12}>
                                <Typography variant="subtitle"> Connect. Collaborate. Create </Typography>
                            </Grid>
                        </Typography> */}
                    </Grid>
                    <Grid item xs = {5} sx={{display:"flex", justifyContent: "end" }} >
                        <Tabs indicatorColor="secondary" textColor="secondary" value={value} onChange={(e,value)=> setvalue(value)}>
                            {links.map((link,index) => (
                                <Tab key={index} label={link} />
                            ) )}
                        </Tabs>
                    </Grid>
                    <Grid item xs={3}>
                        <Box display="flex">
                            <Button sx={{marginLeft: "auto", borderRadius: "50" }} variant="outlined" color="secondary" >Login</Button>
                            <Button sx={{marginLeft: 2, borderRadius: "50" }} variant="outlined" color="secondary" >Get Started</Button>
                        </Box>
                    </Grid>
                </Grid>
             } 
        </Toolbar>
    </AppBar>
    // <AppBar position="static" style={{background: '#eeee'}} elevation={false}>
    //     <Toolbar>
    //         <IconButton size="large" edge="start" color="rgba(36,0,45,0.75)" aria-label="logo" sx={{marginRight: '8px', color:'rgba(36,0,45,0.75)'}}>
    //             C
    //         </IconButton>
    //         <Typography variant="h6" component="div" sx={{flexGrow: 1 , color: 'rgba(36,0,45,0.75)'}} >
    //             CampusConnect
    //         </Typography>
    //         <Stack direction="row" spacing={2} sx={{color: 'rgba(36,0,45,0.75)'}}>
    //             <Button color="inherit">About Us</Button>
    //             <Button color="inherit">Explore Community</Button>
    //             <Button color="inherit">Login</Button>
    //             <Button color="inherit">Sign Up</Button>
    //         </Stack>
    //     </Toolbar>
    // </AppBar>
  )
}
