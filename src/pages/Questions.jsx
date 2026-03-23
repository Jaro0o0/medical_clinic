import Faq from "../components/Questions/Faq/Faq";
import QuestionsHero from "../components/Questions/QuestionsHero/QuestionsHero";
import Section from '../components/Common/Section/Section'

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