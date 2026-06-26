import { Container, Typography, Box, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import SectionHeader from "../../Common/SectionHeader/SectionHeader";
import './ContactForm.css'
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';


function ContactForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = (data) => {
        const loadingToast = toast.loading('Wysyłanie wiadomości...');
       
        
        emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, data, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
            .then(() => {
                toast.success('Wiadomość została wysłana pomyślnie!', { id: loadingToast });
                reset();
            })
            .catch(() => {
                toast.error('Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.', { id: loadingToast });
            });
    }
    
    return (
        <Container sx={{ position: "relative", py: { xs: 4, md: 8 } }}>
            <SectionHeader
                overline="Formularz kontaktowy"
                title="Skontaktuj się z nami"
                description="Napisz do nas lub skorzystaj z danych kontaktowych — odpowiemy jak najszybciej."
            />

            <Box sx={{
                display: 'grid', 
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, 
                gap: '3rem',
                mt: 4 
            }}>
                {/* Formularz */}
                <Box>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            id="name"
                            sx={{ mt: 2, mb: 2 }}
                            label="Imię"
                            variant="outlined"
                            fullWidth
                            required
                            {...register('name', { required: true })}
                        />
                        <TextField
                            id="lastname"
                            sx={{ mt: 2, mb: 2 }}
                            label="Nazwisko"
                            variant="outlined"
                            fullWidth
                            required
                            {...register('lastname')}
                        />
                        <TextField
                            id="email"
                            sx={{ mt: 2, mb: 2 }}
                            label="E-mail"
                            variant="outlined"
                            fullWidth
                            required
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            {...register('email',
                              {required: "Email jest wymagany",
                                  pattern: {
                                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                      message: "Nieprawidłowy email"
                                    }
                              }
                            )}
                        />
                        <TextField
                            id="message"
                            sx={{ mt: 2, mb: 2 }}
                            label="Wiadomość"
                            variant="outlined"
                            fullWidth
                            required
                            multiline
                            rows={4}
                            {...register('message')}
                        />
                        <Button variant="contained" size="large" type="submit">Wyślij</Button>
                    </form>
                </Box>

                {/* Dane kontaktowe */}
                <Box>
                    <Box sx={{ 
                        display: 'grid', 
                        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, 
                        gap: '2rem',
                        mt: { xs: 0, md: 2 }
                    }}>
                        <Box>
                            <Typography variant="h4" gutterBottom className="second-grid-header">Adres</Typography>
                            <Typography variant="body1" color="#444" sx={{ whiteSpace: 'nowrap' }}>Wielopolska 62, 39-200 Dębica</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h4" gutterBottom className="second-grid-header">Godziny otwarcia</Typography>
                            <Typography variant="body1" color="#444" sx={{ whiteSpace: 'nowrap' }}>Poniedziałek - Piątek 8:00 - 18:00</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h4" gutterBottom className="second-grid-header">Kontakt</Typography>
                            <Typography variant="body1" color="#444" sx={{ whiteSpace: 'nowrap' }}>Tel: +48 123 456 789</Typography>
                            <Typography variant="body1" color="#444" sx={{ whiteSpace: 'nowrap' }}>E-mail: kormedickontakt@gmail.com</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default ContactForm;
