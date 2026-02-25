import About from "../components/About";
import Hero from "../components/Hero";
import Offer from "../components/Offer";
import Section from "../components/Section";
import Footer from "../components/Footer";
import Why from "../components/Why";
import Faq from "../components/Faq";
import { Typography } from "@mui/material";
import Testimonies from "../components/Testimonies";
import Services from "../components/Services/Services";


function Home() {
    return (  
        <>
            
           <Hero/>
            
            <Section>
                 <About/>
            </Section>
            <Section>
                <Services/>
            </Section>
            <Section>
                <Offer/>
            </Section>
            
            <Section>
                <Testimonies/>
            </Section>
            
        
            
            

           
        </>
    );
}

export default Home;