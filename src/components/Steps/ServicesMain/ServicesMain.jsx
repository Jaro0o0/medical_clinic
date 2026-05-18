import { Box, Typography, Container, Paper } from "@mui/material";
import ServiceImg from '../../../assets/careers.jpg'
import './ServicesMain.css'
import { motion } from "framer-motion";

function ServicesMain() {
    const items = [
        {
            title: 'Masaż częściowy kręgosłupa',
            price: '70zł',
            img: ServiceImg,
            description: 'Skupiony na wybranym odcinku kręgosłupa, niweluje napięcia i ból.'
        },
        {
            title: 'Masaż całościowy kręgosłupa',
            price: '100zł',
            img: ServiceImg,
            description: 'Kompleksowy masaż wszystkich odcinków kręgosłupa dla pełnej regeneracji.'
        },
        {
            title: 'Masaż kończyn – 1 okolica',
            price: '70zł',
            img: ServiceImg,
            description: 'Relaksuje i usprawnia krążenie w wybranej kończynie.'
        },
        {
            title: 'Masaż limfatyczny ręczny',
            price: '80zł',
            img: ServiceImg,
            description: 'Pobudza krążenie limfy, redukuje obrzęki i wspomaga detoksykację.'
        },
        {
            title: 'Laser',
            price: '15zł',
            img: ServiceImg,
            description: 'Zastosowanie wiązki laserowej w celu przyspieszenia gojenia i redukcji stanu zapalnego.'
        },
        {
            title: 'Ultradźwięki',
            price: '15zł',
            img: ServiceImg,
            description: 'Fala akustyczna docierająca do głębokich tkanek, działająca przeciwbólowo.'
        },
        {
            title: 'Sollux',
            price: '15zł',
            img: ServiceImg,
            description: 'Naświetlanie promieniowaniem podczerwonym, które rozgrzewa i poprawia ukrwienie.'
        },
        {
            title: 'Pole magnetyczne',
            price: '15zł',
            img: ServiceImg,
            description: 'Stymuluje regenerację tkanek i kości za pomocą pola o niskiej częstotliwości.'
        },
        {
            title: 'Elektroterapia',
            price: '15zł',
            img: ServiceImg,
            description: 'Leczenie prądami o różnej częstotliwości w celu uśmierzenia bólu i stymulacji mięśni.'
        },
        {
            title: 'Krioterapia',
            price: '25zł',
            img: ServiceImg,
            description: 'Leczenie zimnem, które zmniejsza obrzęki, ból i przyspiesza regenerację.'
        },
        {
            title: 'Ćwiczenia w odciążeniu',
            price: '15zł',
            img: ServiceImg,
            description: 'Ćwiczenia wykonywane w specjalnym systemie podwieszek, nieobciążające stawów.'
        },
        {
            title: 'Terapia indywidualna',
            price: '60zł',
            img: ServiceImg,
            description: 'Personalizowana praca z terapeutą dopasowana do specyficznych potrzeb pacjenta.'
        },
        {
            title: 'Drenaż limfatyczny mechaniczny – 30 min',
            price: '50zł',
            img: ServiceImg,
            description: 'Sekwencyjny masaż uciskowy wspomagający układ limfatyczny.'
        },
        {
            title: 'Drenaż limfatyczny mechaniczny – 40 min',
            price: '70zł',
            img: ServiceImg,
            description: 'Wydłużona sesja drenażu mechanicznego dla lepszych efektów terapeutycznych.'
        },
        {
            title: 'Drenaż limfatyczny mechaniczny – 60 min',
            price: '80zł',
            img: ServiceImg,
            description: 'Pełna sesja drenażu mechanicznego zapewniająca maksymalne odprężenie i drenaż.'
        },
    ];

    return (
        <Container>
            <Box className='cards' sx={{
                gridTemplateColumns: {
                    xs: '1fr',
                    sm: '1fr',
                    md: '1fr 1fr 1fr'
                }
            }}>
                {items.map((card, index) => (
                    <Paper className='card' component={motion.div}
                        initial={{ y: 50 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.5, delay: 0.02 }}
                        viewport={{ once: true }}
                        elevation={5}
                        key={index}
                    >
                        <Box className='services-card-img-box'>
                            <img src={card.img} className='services-card-img' alt={card.title} />
                        </Box>
                        <Box className='services-card-text-box'>
                            <Typography variant="h4" gutterBottom>{card.title}</Typography>
                            <Typography variant="p">{card.description}</Typography>
                        </Box>
                        <Typography variant="p">Cena: {card.price}</Typography>
                    </Paper>
                ))}
            </Box>
        </Container>
    );
}

export default ServicesMain;
