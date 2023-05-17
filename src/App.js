import { Button,Container,Grid,Box } from "@mui/material";
import { Navbar } from "./components/nav";
import { Landing } from "./components/Landing";
import { useEffect } from 'react';
const linksArray = ["Home","About Us","Contact Us"];
function App() {
  useEffect(() => {
    document.title = "Campus-Connect";
  }, [])
  
  return (
    <Container disableGutters maxWidth="xl" 
    sx={{ 
      background: "#ffff",
    }}
    >
      <Navbar links={linksArray} />
      <Landing />
    </Container>
  );
}

export default App;
