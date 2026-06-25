import ContactHeroImg from '../../../assets/outside.jpg'
import './ContactHero.css'
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn } from '../../../animations/animations';

function ContactHero() {
    return (
        <Box className='contact-hero-wrapper'>
            <Box
                component={motion.div}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className='contact-hero-bg'
            >
                <img className='contact-header-img' src={ContactHeroImg} alt="Kontakt background" />
                <Box className='contact-hero-overlay' />
            </Box>
            
            <Container className='contact-hero-container'>
                <Box className='contact-hero-inner'>
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
                        Zostańmy w kontakcie
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
                        Jak możemy <Box component="span" sx={{ color: 'secondary.main' }}>Ci pomóc?</Box>
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
                        Skontaktuj się z nami telefonicznie, mailowo lub odwiedź nas osobiście w naszym gabinecie.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default ContactHero;
