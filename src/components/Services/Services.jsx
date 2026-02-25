import { Container,Box, Typography, Grid,Paper, Button} from "@mui/material";
import './services.css'
import ServiceImg from '../../assets/careers.jpg'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


import { motion, scale,  } from "framer-motion";
import { useEffect, useRef } from "react";
import { Link } from "react-router";





function Services() {
   

  
   
    return ( 

      <Box sx={{ padding: '95px 0', backgroundColor: '#DBEAFE '}}> 
        <Container>
     
          
                <Box>
                    <Typography component='p'  color="primary" >Oferta</Typography>
                    <Typography component='h1' variant="h2"  gutterBottom>Zobacz naszą ofertę</Typography>
                </Box>
        
            {/* CARDS */}
            <Box className='cards' sx={{gridTemplateColumns:{
                xs: '1fr',
                sm: '1fr',
                md: '1fr 1fr 1fr'

            }}}  component={motion.div} initial={{opacity: 0, y: 50}} 
            whileInView={{  opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            viewport={{ once: true}}>

                
                {/* card-1 */}
                <Paper className='card' elevation={10}>
                    <Box className='services-card-img-box'>
                               <img src={ServiceImg } className='services-card-img'/>
                    </Box>
                    <Box>
                        <Typography variant="h4" gutterBottom='true'>Terapia manualna</Typography>
                        <Typography variant="p" color="#313131">Skuteczna metoda leczenia bólu kręgosłupa i stawów. Przywraca prawidłową ruchomość i zmniejsza napięcie mięśniowe.</Typography>
                        
                    </Box>
                    <Typography variant="p">Cena: 220</Typography>
                  
                </Paper>
                {/* card-2 */}
                <Paper className='card' elevation={10}>
                    <Box className='services-card-img-box'>
                               <img src={ServiceImg } className='services-card-img'/>
                    </Box>
                    <Box>
                        <Typography variant="h4" gutterBottom='true'>Terapia manualna</Typography>
                        <Typography variant="p" color="#313131">Skuteczna metoda leczenia bólu kręgosłupa i stawów. Przywraca prawidłową ruchomość i zmniejsza napięcie mięśniowe.</Typography>
                        
                    </Box>
                    <Typography variant="p">Cena: 220</Typography>
                    
                </Paper>
                {/* card-3 */}
                <Paper className='card' elevation={10}>
                
                    <Box className='services-card-img-box'>
                               <img src={ServiceImg } className='services-card-img'/>
                    </Box>
                    <Box>
                        <Typography variant="h4" gutterBottom='true'>Masaż leczniczy</Typography>
                        <Typography variant="p" color="#313131">Skuteczna metoda leczenia bólu kręgosłupa i stawów. Przywraca prawidłową ruchomość i zmniejsza napięcie mięśniowe.</Typography>
                        
                    </Box>
                    <Typography variant="p">Cena: 220</Typography>
                    
                </Paper>
           
              

            </Box>
          
        </Container>

               
                    <Box display='flex' alignItems='center' justifyContent='center' sx={{mt:2.5}}>
                         <Button variant="contained" size="large" component={Link} to='/oferta'>Zobacz wszytko</Button>
                    </Box>
                
        </Box>
     );
}

export default Services;