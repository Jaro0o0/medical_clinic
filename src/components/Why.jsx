import { Container, Typography,Box, TextField,Button, makeStyles } from "@mui/material";
import Video from '../assets/video.mp4'
import WhyImg from '../assets/careers.jpg'
import './why.css'




const Contact = () => {
      const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2d080484-c006-47fe-8932-95fe898fa833");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
}

function Why() {


    return (
        // <video className="why-video" src={Video}  autoPlay muted loop></video>
        <Container sx={{position:"relative"}} >
          <Typography component='p' color="primary" gutterBottom='true'>FAQ</Typography>
          <Typography variant="h3" component='h1' gutterBottom='true' >Skontaktój się z nami</Typography>
            <Box className='contact-grid'>
              <Box>
                  <form onSubmit={Contact}> 
                      <TextField id="outlined-basic" className="form-row" sx={{ mt: 2, mb: 2, display: 'block' }} label="Imię" variant="outlined" color="primary" name="name" fullWidth required/>
                      <TextField id="outlined-basic"  className="form-row" sx={{ mt: 2, mb: 2, display: 'block' }} label="Nazwisko" variant="outlined" name="email" fullWidth required/>
                      <TextField id="outlined-basic"  className="form-row" sx={{ mt: 2, mb: 2, display: 'block' }} label="Wiadomość" variant="outlined" name="message" fullWidth required multiline rows={4}/>
                      <Button variant="contained" size="large" type="submit">Wyślij</Button>
                  </form>
                  </Box>
                <Box>
                    <Box className='contact-second-grid' sx={{mt: 2}}>
                      <Box>
                        <Typography variant="h4" gutterBottom='true' className="second-grid-header">Adres</Typography>
                        <Typography variant="p" color="#444">Wielopolska 62, 39-200 Dębica</Typography>
                      </Box>
                      <Box>
                        <Typography variant="h4" gutterBottom='true' className="second-grid-header">Godziny otwarcia</Typography>
                        <Typography variant="p" color="#444">Poniedizalek piaąßek 8:00-12:00</Typography>
                      </Box>
                      <Box>
                        <Typography variant="h4" gutterBottom='true' className="second-grid-header">Kontakt</Typography>
                        <Typography variant="p" color="#444">Telefon</Typography>
                        <Typography variant="p" color="#444">E-mail</Typography>

                      </Box>
                      <Box>
                        <Typography variant="h4" gutterBottom='true' className="second-grid-header">Social Media</Typography>
                        <Typography variant="p" color="#444">E-mail</Typography>
                      </Box>
                    </Box>
                </Box>
         
            </Box>
           
        </Container>
      );
}

export default Why;