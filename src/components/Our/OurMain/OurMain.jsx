import { Container, Typography } from "@mui/material";
import { Box }from "@mui/material";
import OurImg from '../../../assets/outside.jpg'
import './OurMain.css'
import { motion, scale,  } from "framer-motion";

function OurMain() {
    return ( 
        <Container>
            <Typography variant="h3" gutterBottom='true'> O nas</Typography>
            <Box className='our-grid' component={motion.div} initial={{opacity: 0, y: 50}} 
            whileInView={{  opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            viewport={{ once: true}}
           
            >
                <img src={OurImg} className="our-img"/>
                <Box  sx={{padding: 2}} display='flex' flexDirection='column' justifyContent='center'>
                    <Typography variant="p"color="#444">Gabinet fizjoterapeutyczny to nowoczesne i przyjazne miejsce, w którym pacjenci mogą skorzystać z kompleksowej opieki fizjoterapeutycznej. Wyposażony w specjalistyczny sprzęt do terapii manualnej, ćwiczeń rehabilitacyjnych, masażu oraz urządzenia do fizykoterapii, zapewnia komfort i bezpieczeństwo podczas każdej wizyty. Jasne i przestronne wnętrze sprzyja relaksowi, a indywidualne podejści
                        do każdego pacjenta pozwala na dokładne dopasowanie terapii do jego potrzeb, stanu zdrowia oraz celów rehabilitacyjnych.
                        Specjalizujemy się w leczeniu bólu kręgosłupa, urazów ortopedycznych, rehabilitacji pourazowej oraz profilaktyce przeciążeń. Korzystamy ze sprawdzonych metod terapeutycznych, łącząc nowoczesną wiedzę z praktycznym doświadczeniem.
                        Naszym priorytetem jest skuteczność terapii, komfort pacjenta oraz przyjazna atmosfera, która sprzyja powrotowi do zdrowia i pełnej sprawności. Dbamy o to, aby każdy pacjent czuł się bezpiecznie, był wysłuchany i objęty profesjonalną opieką na każdym etapie terapii.
                    </Typography>
                </Box>
            </Box>
        </Container>
     );
}

export default OurMain;