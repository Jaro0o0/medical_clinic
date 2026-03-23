import { Box, Container, Typography } from "@mui/material";
import './OurSecond.css'
import OurSecondImg from '../../../assets/careers.jpg'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';

function OurSecond() {
    return ( 
        <Container>
            {/* Item-1 */}
            <Box className='our-second-grid'>
                <Box  sx={{padding:2}}>
                    <Box display='flex' justifyContent='center'>
                         <AccessTimeOutlinedIcon color="primary" fontSize="large" />
                    </Box>
                    <Typography variant="h2"  align="center" gutterBottom='true'>Nasza historia</Typography>
                    <Typography component='p' align="center"> Nasza firma powstała z pasji i chęci tworzenia usług na najwyższym poziomie. Od początku stawiamy na jakość, rozwój i zaufanie naszych klientów. Każdy rok to nowe doświadczenia, które pozwalają nam być jeszcze lepszymi</Typography>
                </Box>
                <Box>
                    <img className="our-second-img" src={OurSecondImg}/>
                </Box>
                {/* Item-2 */}
                <Box>
                    <img className="our-second-img" src={OurSecondImg}/>
                  
                </Box>
                <Box sx={{padding:2}}>
                    <Box display='flex' justifyContent='center' >
                        <Diversity3OutlinedIcon color="primary" fontSize="large" />
                    </Box>
                    <Typography variant="h2" align="center" gutterBottom='true'>Nasz zespół</Typography>
                    <Typography component='p' align="center">asz zespół to grupa zaangażowanych i doświadczonych specjalistów. Łączy nas pasja, wiedza i wspólny cel – dostarczanie najlepszych rozwiązań dla naszych klientów. Razem tworzymy miejsce, w którym profesjonalizm spotyka się z dobrą atmosferą.</Typography>
                </Box>
                    
                
               
                

            </Box>
        </Container>
     );
}

export default OurSecond;