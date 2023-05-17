import React from 'react'
import { Box,Grid, Typography,Button } from "@mui/material";
import { createTheme,responsiveFontSizes,ThemeProvider } from "@mui/material/styles";
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import SecurityIcon from '@mui/icons-material/Security';
import pic from "./0-removebg-preview.png";

let theme = createTheme();
theme = responsiveFontSizes(theme);
export const Landing = () => {
  return (
    <ThemeProvider theme={theme}>

    <Grid container direction="column" spacing={2} my={9} sx={{ height:"100%"}}>
        <Grid item container sx={{
            height: "100vh"
        }} >
            <Grid item xs={12} md={6} container spacing={3}>
                {/* <Typography mx={9} sx={{ typography: {
                    xs: 'h1',
                    md: 'h2'
                }
                , display: "flex",
                 alignContent:"center",
                 alignItems:"center" ,
                 overflow:"hidden",
                 textOverflow: "ellipsis" ,

                }} >
                    Connect.
                    Collaborate.Create
                </Typography> */}
                <Grid item xs={12} >

                    <Typography mx={5} my={1} variant='h2'sx={{
                        color:"rgba(66,1,83,1)"
                    }} >
                        Connect.
                        Communicate.Create
                    </Typography>
                    <Typography mx={5} my={7} variant='h6'sx={{
                        color:"rgba(66,1,83,1)"
                    }} >
                        Campus-Connect provides an effective and powerful way to manage your projects and what not.
                    </Typography>
                </Grid>
                <Grid my={-7} mx={7} item xs={12} sx={{display:"flex",
                        justifyContent:"flex-start",
                        alignItems:"flex-start",
                        justifyItems:"flex-start"
                    }} >

                    <Box display="flex" justifyContent="flex-start" alignItems="center">
                        <Button sx={{ maxHeight:"35px" ,marginLeft: "auto", borderRadius: "50" }} variant="outlined" color="secondary" >Login</Button>
                        <Button sx={{maxHeight:"35px" ,marginLeft: 2, borderRadius: "50" }} variant="outlined" color="secondary" >Sign Up</Button>
                    </Box>
                </Grid>
                {/* <Grid item mx={5} container xs={12} spacing={1}>
                    
                        <SecurityIcon  />
                    <Grid my={-1.5} item xs={12} md={2} >
                        <Typography variant='h6'>
                            connect
                        </Typography>
                    </Grid>
                        <SecurityIcon/>
                    <Grid my={-1.5} item xs={12} md={3}>
                        <Typography variant='h6'>
                            communicate
                        </Typography>
                    </Grid>
                        <SecurityIcon/>
                    <Grid my={-1.5} item xs={12} md={5}>
                        <Typography variant='h6'>
                            create
                        </Typography>
                    </Grid>
                    
                </Grid> */}
            </Grid>
            <Grid item xs={12} md={6} container spacing={1} sx={{
                paddingLeft:"20px"
            }} >
                <img
                    width="900%" height="70%"
                    alt="complex"
                    src={pic}
                />
            </Grid>
        </Grid>
        <Grid item container sx={{background: "rgba(192,104,232,0.5)",
            height: "100vh",
        }} >
            <Grid item xs={12} md={6} container spacing={1} sx={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                padding:"100px"
                
            }} >
                <Typography variant='h3'sx={{
                        color:"rgba(66,1,83,1)"
                    }}>
                    With the right Software, Great Things Can Happen
                </Typography>
            </Grid>
            <Grid item xs={12} md={6} container spacing={1} sx={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                padding:"70px"
            }} >
                <Typography variant='body'sx={{
                        color:"rgba(66,1,83,1)"
                    }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quibusdam hic quae consectetur blanditiis accusantium culpa animi illum. Consequatur vitae minima laboriosam sed est accusantium praesentium. Mollitia repellendus similique tempora.
                </Typography>
            </Grid>
        </Grid>
    </Grid>
    </ThemeProvider>
  )
}
