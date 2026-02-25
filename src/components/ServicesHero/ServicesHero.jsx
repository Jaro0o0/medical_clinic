import { Box, Container, Typography } from "@mui/material";
import ServicesHeroBackground from "../../assets/outside.jpg";
import './services-hero.css'
import { motion } from "framer-motion";

function ServicesHero() {
    return (  
         <Box className='services-hero-content'>
                   <img className='images-hero-img' src={ServicesHeroBackground}/>
                   <Box className='images-hero-inner'>
                        <Typography component={motion.h1} variant="h2" color="white" initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{ duration: 0.8, delay: 0.5}}>Oferta</Typography>
                   </Box>
               </Box>
           );
     
}

export default ServicesHero;