import HomeAbout from "../components/Home/HomeAbout/HomeAbout";
import Hero from "../components/Home/Hero/Hero";
import WhyUs from "../components/Home/WhyUs/WhyUs";
import Section from "../components/Common/Section/Section";
import Testimonials from "../components/Home/Testimonials/Testimonials";
import Specializations from "../components/Home/Specializations/Specializations";


function Home() {
    return (  
        <>
            
           <Hero/>
            
            <Section>
                 <HomeAbout/>
            </Section>
            <Section>
                <Specializations/>
            </Section>
            <Section>
                <WhyUs/>
            </Section>
            
            <Section>
                <Testimonials/>
            </Section>
            
        
            
            

           
        </>
    );
}

export default Home;
