import { Typography, Box} from '@mui/material';
import OurHeaderImg from '../../../assets/outside.jpg'
import './OurHero.css'
import { motion } from 'framer-motion';

function OurHero() {
    return ( 
        
        <Box className='our-hero-content'>
            <img className='our-header-img' src={OurHeaderImg}/>
            <Box className='our-hero-inner'>
                    <Typography component={motion.h1} variant="h2" color="white" initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{ duration: 0.8, delay: 0.5}}>O nas</Typography>
            </Box>
        </Box>
        
     );
}

export default OurHero;