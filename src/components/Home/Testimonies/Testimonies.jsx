import {  Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


import { Box, Container, Paper, Typography } from '@mui/material';

import { motion } from 'framer-motion';
import './Testimonies.css'

function Testimonies() {
    return ( 
    <>
          <Container>
            <Typography component='p' color="primary" >OPINIE</Typography>
              <Typography variant='h2'    gutterBottom='true'>Co klijenci o nas mówią</Typography>
          </Container>
      <Box 
       component={motion.div} initial={{opacity: 0, y: 50}} 
            whileInView={{  opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            viewport={{ once: true}}
            >
            
        
        <Swiper
          // install Swiper modules
          modules={[ Autoplay  ]}
          spaceBetween={50}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          loop={true}
          speed={2000}
            autoplay={{
            delay: 2000,        // 3 sekundy między slajdami
            disableOnInteraction: false, // po ręcznym przesunięciu nie wyłącza autoplay
            }}
        
        >
          <SwiperSlide >
                <Box className ='slide-item' >
                    <Typography component='p'>Serdecznie polecam zabiegi w Kormedic - sprawnie , fachowo i rzetelnie</Typography>
                    <Box>
                        <Typography component='p'>Adam</Typography>
                    </Box>
                </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className ='slide-item'  sx={{backgroundColor: ' rgba(255, 255, 255, 0.336)'}}   >
                <Typography component='p' >Polecam ❤️</Typography>
                <Typography component='p'>Adam</Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className ='slide-item' >
                <Typography component='p'>Z pełnym przekonaniem polecam ten gabinet każdej osobie, która szuka fachowej pomocy i realnych efektów.</Typography>
                <Typography component='p'>Adam</Typography>
            </Box>
          </SwiperSlide>
        
        </Swiper>
      </Box>
    </>
 
 
     );
    
}

export default Testimonies;