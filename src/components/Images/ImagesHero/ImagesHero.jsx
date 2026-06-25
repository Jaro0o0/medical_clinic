import ImagesImg from '../../../assets/outside.jpg'
import './ImagesHero.css'
import { Typography, Box, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn } from '../../../animations/animations';

function ImagesHero() {
    return (  
        <Box className='images-hero-wrapper'>
            <Box
                component={motion.div}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className='images-hero-bg'
            >
                <img className='images-header-img' src={ImagesImg} alt="Galeria background" />
                <Box className='images-hero-overlay' />
            </Box>
            
            <Container className='images-hero-container'>
                <Box className='images-hero-inner'>
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
                        Kormedic
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
                        Nasza <Box component="span" sx={{ color: 'secondary.main' }}>Galeria</Box>
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
                        Zobacz nasz nowoczesny gabinet i sprzęt, z którego korzystamy w codziennej pracy z pacjentami.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default ImagesHero;
