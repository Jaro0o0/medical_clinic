import OurHero from "../components/OurHero/OurHero";
import OurMain from "../components/OurMain/OurMain";
import OurSecond from "../components/OurSecond/OurSecond";
import Section from '../components/Section'


function Our() {
    return (  
        <>
            
            <OurHero/>
           <Section> 
                <OurMain/>
            </Section>
              <Section> 
                <OurSecond/>
            </Section>
        </>
    );
}

export default Our;