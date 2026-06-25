import { Box, Container, Typography } from "@mui/material";
import OfferHeroBackground from "../../../assets/outside.jpg";
import './OfferHero.css'
import { motion } from "framer-motion";
import { fadeInUp, fadeIn } from '../../../animations/animations';

function OfferHero() {
    return (  
        <Box className='services-hero-wrapper'>
            <Box
                component={motion.div}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className='services-hero-bg'
            >
                <img className='services-header-img' src={OfferHeroBackground} alt="Oferta background" />
                <Box className='services-hero-overlay' />
            </Box>
            
            <Container className='services-hero-container'>
                <Box className='services-hero-inner'>
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
                        Nasza Pasja
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
                        Oferta <Box component="span" sx={{ color: 'secondary.main' }}>Usług</Box>
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
                        Poznaj szeroki zakres naszych zabiegów i terapii, które pomogą Ci wrócić do pełnej sprawności i pozbyć się bólu.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default OfferHero;
