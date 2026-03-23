import About from "../components/Home/About/About";
import Hero from "../components/Home/Hero/Hero";
import Offer from "../components/Home/Offer/Offer";
import Section from "../components/Common/Section/Section";
import Testimonies from "../components/Home/Testimonies/Testimonies";
import Services from "../components/Home/Services/Services";


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