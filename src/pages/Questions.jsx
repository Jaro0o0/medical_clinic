import Faq from "../components/Faq";
import QuestionsHero from "../components/QuestionsHero/QuestionsHero";
import Section from '../components/Section'

function questions() {
    return ( 
        <>
        
        <QuestionsHero/>
        <Section>
             <Faq></Faq>
        </Section>
       
        </>
     );
}

export default questions;