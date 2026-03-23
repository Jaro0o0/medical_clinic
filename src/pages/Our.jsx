import OurHero from "../components/Our/OurHero/OurHero";
import OurMain from "../components/Our/OurMain/OurMain";
import OurSecond from "../components/Our/OurSecond/OurSecond";
import Section from '../components/Common/Section/Section'


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