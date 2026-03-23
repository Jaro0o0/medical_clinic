import QuestionsHeroImg from '../../../assets/outside.jpg'
import './QuestionsHero.css'
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

function QuestionsHero() {
    return ( 
          <Box className='questions-hero-content'>
            <img className='questions-hero-img' src={QuestionsHeroImg }/>
            <Box className='questions-hero-inner'>
                    <Typography component={motion.h1} variant="h2" color="white" initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{ duration: 0.8, delay: 0.5}}>FAQ</Typography>
            </Box>
        </Box>

     );
}

export default QuestionsHero;