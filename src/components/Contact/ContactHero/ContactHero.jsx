import ContactHeroImg from '../../../assets/outside.jpg'
import './ContactHero.css'
import { Box,Typography } from '@mui/material';
import { motion } from 'framer-motion';

function ContactHero() {
    return (  
         <Box className='contact-hero-content'>
            <img className='contact-hero-img' src={ContactHeroImg }/>
            <Box className='contact-hero-inner'>
                    <Typography component={motion.h1} variant="h2" color="white" initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{ duration: 0.8, delay: 0.5}}>Kontakt</Typography>
            </Box>
        </Box>
    );
}

export default ContactHero;