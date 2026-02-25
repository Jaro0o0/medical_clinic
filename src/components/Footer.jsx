import { Box, Container, Typography } from "@mui/material";
import './footer.css'
import { BorderTop } from "@mui/icons-material";

function Footer() {
    return ( 
        <Box className='footer' 
        display='flex' 
        flexDirection='column' 
        alignItems='center' 
        justifyContent='space-between' 
        sx={{height: ''}} >
            <Container className='footer-content' 
            sx={{display:"flex",justifyContent: "space-between",
                flexDirection:{
                    xs:'column',
                    sm: 'column',
                    md: 'row'

                    
                }
            }} >
                <Box sx={{maxWidth: '400px'}}> 
                    <Typography variant="h2" gutterBottom='true'  >Kormedic</Typography>
                    <Typography variant="p" color="">Pomagamy naszym pacjentom pokonać ból i ograniczenia ruchowe, oferując skuteczną rehabilitację, nowoczesne terapie i wsparcie na każdym etapie powrotu do zdrowia.</Typography>
                </Box>
                <Box>
                     <Typography component='h2' variant="h5"    gutterBottom='true' className="footer-second-header">Nav</Typography>
                    <ul className="footer-list">
                        <li>Ulica</li>
                        <li>Kodpocztowy</li>
                        <li>telefon</li>
                        <li>email</li>
                    </ul>
                </Box>
                <Box>
                    <Typography component='h2' variant="h5" gutterBottom='true'  className="footer-second-header"  >Nav</Typography>
                      <ul className="footer-list"> 
                        <li>Ulica</li>
                        <li>Kodpocztowy</li>
                        <li>telefon</li>
                        <li>email</li>
                    </ul>
                </Box>
                <Box>
                    <Typography component='h2' variant="h5" gutterBottom='true'  className="footer-second-header" >Usługi</Typography>
                      <ul className="footer-list"> 
                        <li>Ulica</li>
                        <li>Kodpocztowy</li>
                        <li>telefon</li>
                        <li>email</li>
                    </ul>
                </Box>
            </Container>
        </Box>
     );
}

export default Footer;