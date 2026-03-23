
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
import { useState,useEffect } from "react";

function Header() {
   const [ mobileOpen, setMobileOpen] = useState(false)
   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen)
   }

   // HEADER_HEANDLER
   const [ headerScroll, setHeaderScroll ] = useState(false)
   useEffect(() =>{
      const handleScroll = () => {
         if (window.scrollY > 50){
            setHeaderScroll(true)
         } else {
            setHeaderScroll(false)
         }
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
   }, [])

      return ( 
         <Box sx={{ flexGrow: 1 }}>
           
               <AppBar 
                  position="fixed"  
                  elevation={headerScroll ? 1 : 0}  
                  sx={{ 
                     color: headerScroll ? "black" : "white",
                     transition: 'all 0.5s ease-in-out',
                     backgroundColor: headerScroll ? 'white' : 'transparent'
                  }}  
                  className={headerScroll ? "header--scrolled" : "header"}
               >
               {/* CONTAINER */}
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
                  {/* COTACT_BUTTON */}
                  <Button variant="outlined" component={Link} to='/contact' sx={{color:'white'}}>Kontakt</Button>

                   
                 
               </Toolbar>
               {/* CONTAINER */}
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