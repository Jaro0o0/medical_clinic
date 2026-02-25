import { Box,Typography,Button,Container, Paper} from "@mui/material";
import ServiceImg from '../../assets/careers.jpg'
import './service-main.css'
import { motion } from "framer-motion";


function ServicesMain() {
    return (
        <Container>
               {/* CARDS */}
            <Box className='cards' sx={{gridTemplateColumns:{
                xs: '1fr',
                sm: '1fr',
                md: '1fr 1fr 1fr'

            }}}>
                {/* card-1 */}
                <Paper className='card' component={motion.div}  
                initial={{y: 50}} 
                whileInView={{ y: 0}}
                transition={{duration: 0.5, delay: 0.02}}
                viewport={{ once: true}} 
                elevation={5}
                >
                    <Box className='services-card-img-box'>
                               <img src={ServiceImg } className='services-card-img'/>
                    </Box>
                    <Box className='services-card-text-box'>
                        <Typography variant="h4" gutterBottom='true'>Terapia manualna</Typography>
                        <Typography variant="p">Skuteczna metoda leczenia bólu kręgosłupa i stawów. Przywraca prawidłową ruchomość i zmniejsza napięcie mięśniowe.</Typography>
                        
                    </Box>
                    <Typography variant="p">Cena: 220</Typography>
                </Paper>
                {/* card-2 */}
                <Paper className='card' component={motion.div}  
                initial={{y: 50}} 
                whileInView={{ y: 0}}
                transition={{duration: 0.5, delay: 0.02}}
                viewport={{ once: true}} 
                elevation={5}
                >
                    <Box className='services-card-img-box'>
                               <img src={ServiceImg } className='services-card-img'/>
                    </Box>
                    <Box className='services-card-text-box'> 
                        <Typography variant="h4" gutterBottom>Masaż leczniczy</Typography>
                        <Typography variant="p">Skuteczn Przywraca prawidłową ruchomość i zmniejsza napięcie mięśniowe.</Typography>
                        
                    </Box>
                    <Typography variant="p">Cena: 220</Typography>
                </Paper>
                {/* card-3 */}
                <Paper className='card' component={motion.div}  
                initial={{y: 50}} 
                whileInView={{ y: 0}}
                transition={{duration: 0.5, delay: 0.02}}
                viewport={{ once: true}}
                elevation={5}
                >
                    <Box className='services-card-img-box'>
                               <img src={ServiceImg } className='services-card-img'/>
                    </Box>
                    <Box className='services-card-text-box'>
                        <Typography variant="h4" gutterBottom='true'>Masaż leczniczy</Typography>
                        <Typography variant="p">Skuteczna metoda leczenia bólu kręgosłupa i stawów. Przywraca prawidłową ruchomość i zmniejsza napięcie mięśniowe.</Typography>
                        
                    </Box>
                    <Typography variant="p">Cena: 220</Typography>
                </Paper>
                {/* card-4 */}
                <Paper className='card' component={motion.div}  
                initial={{y: 50}} 
                whileInView={{ y: 0}}
                transition={{duration: 0.5, delay: 0.02}}
                viewport={{ once: true}}
                elevation={5}
                >
                    <Box className='services-card-img-box'>
                               <img src={ServiceImg } className='services-card-img'/>
                    </Box>
                    <Box className='services-card-text-box'>
                        <Typography variant="h4" gutterBottom='true'>Masaż leczniczy</Typography>
                        <Typography variant="p">Skuteczna metoda leczenia bólu kręgosłupa i stawów. Przywraca prawidłową ruchomość i zmniejsza napięcie mięśniowe.</Typography>
                        
                    </Box>
                    <Typography variant="p">Cena: 220</Typography>
                </Paper>
                {/* card-5 */}
                <Paper className='card' component={motion.div}  
                initial={{y: 50}} 
                whileInView={{ y: 0}}
                transition={{duration: 0.5, delay: 0.02}}
                viewport={{ once: true}}
                elevation={5}
                >
                    <Box className='services-card-img-box'>
                               <img src={ServiceImg } className='services-card-img'/>
                    </Box>
                    <Box className='services-card-text-box'>
                        <Typography variant="h4" gutterBottom='true'>Masaż leczniczy</Typography>
                        <Typography variant="p">Skuteczna metoda leczenia bólu kręgosłupa i stawów. Przywraca prawidłową ruchomość i zmniejsza napięcie mięśniowe.</Typography>
                        
                    </Box>
                    <Typography variant="p">Cena: 220</Typography>
                </Paper>
                {/* card-6 */}
                <Paper className='card' component={motion.div}  
                initial={{y: 50}} 
                whileInView={{ y: 0}}
                transition={{duration: 0.5, delay: 0.02}}
                viewport={{ once: true}}
                elevation={5}
                >
                    <Box className='services-card-img-box'>
                               <img src={ServiceImg } className='services-card-img'/>
                    </Box>
                    <Box className='services-card-text-box'> 
                        <Typography variant="h4" gutterBottom='true'>Masaż leczniczy</Typography>
                        <Typography variant="p">Skuteczna metoda leczenia bólu kręgosłupa i stawów. Przywraca prawidłową ruchomość i zmniejsza napięcie mięśniowe.</Typography>
                        
                    </Box>
                    <Typography variant="p">Cena: 220</Typography>
                </Paper>
           
              

            </Box>
        </Container>
      );
}

export default ServicesMain;