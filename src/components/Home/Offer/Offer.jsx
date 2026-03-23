import { Container, Typography , Box, Grid, Button} from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SlideImg from '../../../assets/careers.jpg'
import './Offer.css' 
import { motion } from "framer-motion";
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';

function Offer() {
    return ( 
    
        <Container>

                        <Typography component='p' color="primary" align="center">Oferta</Typography>
                        <Typography variant="h2" gutterBottom='true' align="center" sx={{mb:5}}>Dlaczego wybrać nas</Typography>
                        {/* GRID */}
                        <Box className='why-grid' sx={{gridTemplateColumns:{
                            xs: '1fr',
                            sm: '1fr 1fr',
                            md: '1fr 1fr 1fr'
                            },
                            
                        }}  component={motion.div} initial={{opacity: 0, y: 50}} 
                        whileInView={{  opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        viewport={{ once: true}}>

                            
                            {/* ICON_BOX */}
                            <Box sx={{padding:2}} className='icon-box'>
                                <Box display='flex' justifyContent='center' sx={{mb: 2}}>
                                     <SecurityOutlinedIcon color="primary"/>
                                </Box>
                                <Typography variant="h3" align="center" gutterBottom='true'>Doświadczenie</Typography>
                                <Typography component='p' align="center" color="#313131"> Nasz zespół tworzą wykwalifikowani fizjoterapeuci z wieloletnim doświadczeniem.</Typography>
                            </Box>
                            {/* ICON_BOX */}
                            <Box sx={{padding:2}} className='icon-box'>
                                <Box display='flex' justifyContent='center' sx={{mb: 2}}>
                                     <SecurityOutlinedIcon color="primary"/>
                                </Box>
                                <Typography variant="h3" align="center" gutterBottom='true'>Doświadczenie</Typography>
                                <Typography component='p' align="center" color="#313131"> Nasz zespół tworzą wykwalifikowani fizjoterapeuci z wieloletnim doświadczeniem.</Typography>
                            </Box>
                            {/* ICON_BOX */}
                            <Box sx={{padding:2}} className='icon-box'>
                                <Box display='flex' justifyContent='center' sx={{mb: 2}}>
                                     <SecurityOutlinedIcon color="primary"/>
                                </Box>
                                <Typography variant="h3" align="center" gutterBottom='true'>Doświadczenie</Typography>
                                <Typography component='p' align="center" color="#313131"> Nasz zespół tworzą wykwalifikowani fizjoterapeuci z wieloletnim doświadczeniem.</Typography>
                            </Box>
                        </Box>
                      

                        
        </Container>   
               
          
                
                
                
                
                 
            
              
        
     );
}

export default Offer
