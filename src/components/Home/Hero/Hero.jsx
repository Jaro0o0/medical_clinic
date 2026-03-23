import Video from '../../../assets/video2.mp4'
import './Hero.css'
import { Box, Typography,Button, Container, ButtonGroup } from '@mui/material';
import {motion} from 'framer-motion';

function Hero() {
    return ( 
            <Box sx={{ backgroundColor: 'black', width: '100%', height: '100vh', position: 'relative', overflow: 'hidden' }}>
                {/* VIDEO_WRAPPER */}
                <Box 
                    className='video-wrapper' 
                    component={motion.div} 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 2, ease: "easeOut" }}
                >
                    <video src={Video} autoPlay muted loop ></video>
                </Box>    

                <Box className='hero-inner'>
                    <Box >
                        <Container>
                            <Typography variant='h2' gutterBottom color='white' sx={{fontWeight:'400'}}  component={motion.h2} initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{ duration: 0.8, delay: 0.5}}>Skuteczna rehabilitacja,  nowoczesne metody terapii bólu oraz urazów.</Typography >
                            <Typography variant='h4' gutterBottom color='white' sx={{fontWeight:'300'}}  component={motion.h4} initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{ duration: 0.8, delay: 1}} >Twoje zdrowie w dobrych rękach</Typography>
                            <ButtonGroup component={motion.div} sx={{mt: 2}} initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{ duration: 0.8, delay: 1.5}}>
                                <Button sx={{ mr: 2 ,}} variant="contained"  size='large'>OFERTA</Button>
                                <Button sx={{ mr: 1 ,}} variant="contained"  size='large'>KONTAKT</Button>
                            </ButtonGroup>
                        </Container>
                    </Box>
                </Box>
            </Box>
     );
}

export default Hero;