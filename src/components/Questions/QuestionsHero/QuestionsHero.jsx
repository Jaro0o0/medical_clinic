import QuestionsHeroImg from '../../../assets/outside.jpg'
import './QuestionsHero.css'
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn } from '../../../animations';

function QuestionsHero() {
    return ( 
        <Box className='questions-hero-wrapper'>
            <Box
                component={motion.div}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className='questions-hero-bg'
            >
                <img className='questions-header-img' src={QuestionsHeroImg} alt="FAQ background" />
                <Box className='questions-hero-overlay' />
            </Box>
            
            <Container className='questions-hero-container'>
                <Box className='questions-hero-inner'>
                    <Typography 
                        component={motion.span}
                        variant="overline"
                        sx={{ 
                            color: 'secondary.light', 
                            fontWeight: 700, 
                            letterSpacing: 4,
                            mb: 2,
                            display: 'block'
                        }}
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                    >
                        Baza Wiedzy
                    </Typography>
                    <Typography 
                        component={motion.h1} 
                        variant="h1" 
                        color="white" 
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        sx={{ 
                            fontWeight: 800,
                            textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                            fontSize: { xs: '3rem', md: '5rem' },
                            lineHeight: 1.1
                        }}
                    >
                        Najczęstsze <Box component="span" sx={{ color: 'secondary.main' }}>Pytania</Box>
                    </Typography>
                    <Typography 
                        component={motion.p}
                        variant="h5"
                        color="white"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        sx={{ 
                            opacity: 0.9, 
                            fontWeight: 300, 
                            mt: 3,
                            maxWidth: '600px',
                            mx: 'auto',
                            lineHeight: 1.6
                        }}
                    >
                        Znajdź odpowiedzi na najpopularniejsze pytania dotyczące rehabilitacji.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default QuestionsHero;
