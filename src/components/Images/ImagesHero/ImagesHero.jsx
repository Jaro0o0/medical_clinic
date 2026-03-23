import  ImagesImg from '../../../assets/outside.jpg'
import './ImagesHero.css'

import { Typography, Box} from '@mui/material';
import { motion } from 'framer-motion';


function ImagesHero() {
    return (  
         <Box className='images-hero-content'>
            <img className='images-hero-img' src={ImagesImg}/>
            <Box className='images-hero-inner'>
                    <Typography component={motion.h1} variant="h2" color="white" initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{ duration: 0.8, delay: 0.5}}>Galeria</Typography>
            </Box>
        </Box>
    );
}

export default ImagesHero;