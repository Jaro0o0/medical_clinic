import { Container, Grid, Paper, Typography,Box,Button } from "@mui/material";
import  IMG from'../assets/outside.jpg'
import './about.css'

import { motion } from "framer-motion";

function About() {
    return (  
        
    <Container>
        <Box  className='about' sx={{gridTemplateColumns:{
            xs:' 1fr',
            sm: '1fr',
            md: '1fr 1fr'
        }}} >   
        
            <Box  component={motion.div} initial={{opacity: 0, y: 50}} 
            whileInView={{  opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            viewport={{ once: true}}>
                <img src={IMG} className="about-img"/>
            </Box>
            <Box display='flex' flexDirection='column' justifyContent='center' sx={{padding: 2}}>
                <Typography component='p' color="primary" gutterBottom >O nas</Typography>
                <Typography variant="h2" component='h1' gutterBottom>Kormedic</Typography>     
                 <Typography component='p' color="#313131" gutterBottom>Gabinet fizjoterapeutyczny to nowoczesne i przyjazne miejsce, w którym pacjenci mogą skorzystać z kompleksowej opieki fizjoterapeutycznej. Wyposażony w specjalistyczny sprzęt do terapii manualnej, ćwiczeń rehabilitacyjnych, masażu oraz urządzenia do fizykoterapii, zapewnia komfort i bezpieczeństwo podczas każdej wizyty. Jasne i przestronne wnętrze sprzyja relaksowi, a indywidualne podejście</Typography>
                <Box>
                    <Button variant="contained" sx={{mt: 2}}>Zobacz więcej</Button>    
                </Box>
                
            </Box>
                
            
        </Box>
    </Container>
    );
}

export default About ;