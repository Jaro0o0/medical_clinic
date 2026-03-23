
import { Link } from "react-router";
import './Header.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Drawer } from "@mui/material";
import {motion} from 'framer-motion';
import { useState } from "react";

function Header() {
   const [ mobileOpen, setMobileOpen] = useState(false)
   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen)
   }

      return ( 
         <Box sx={{ flexGrow: 1 }}>
           
               <AppBar position="fixed"  elevation={1}  sx={{backgroundColor: 'white', color: "#000000",transformOrigin: "top"}} component={motion.div} 
                  initial={{opacity: 0, scaleY: 0, backgroundColor: 'blue' }} 
                  animate={{opacity:1, scaleY: 1, backgroundColor: 'white'}}
                  transition={{ duration: 0.8, delay: 1.5 }}
                 
                  
               >
               <Container>
               <Toolbar>
                  <IconButton
                     size="large"
                     edge="start"
                     color="inherit"
                     aria-label="open-drawer"
                     sx={{ mr: 2 , display:{
                        sm: 'none',
                        md: 'none'
                        
                     },
                     }}
                     onClick={handleDrawerToggle}
                     >
                        <MenuIcon/>
                  </IconButton>
                  <Typography variant="h4" component="div" sx={{ flexGrow: 1 , }}>
                     Kormedic
                  </Typography>
                  <Button color="inherit"  component={Link} to='/'>Home</Button>
                  <Button color="inherit" component={Link} to='/oferta'>Oferta</Button>
                  <Button color="inherit" component={Link} to='o-nas'>O nas</Button>
                  <Button color="inherit" component={Link} to='/galeria'>Galeria</Button>
                  <Button color="inherit" component={Link} to='/faq'>Faq</Button>
                  <Button variant="contained" component={Link} to='/contact'>Kontakt</Button>

                   
                 
               </Toolbar>
                </Container>
               </AppBar>

               {/* SIDE-BAR */}
               <Drawer
               variant="temporary"
               anchor="right"
               open={mobileOpen}
               onClose={handleDrawerToggle}
               
               >
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                     Kormedic
                  </Typography>
               </Drawer>
              
         </Box>
        
     );
}

export default Header;

{/* <Container sx={{display: "flex",justifyContent: "space-between", backgroundColor: 'rgba(128, 128, 128, 0.5)',borderRadius: 4, padding:1, backdropFilter: "blur(5px)",}}></Container> */}