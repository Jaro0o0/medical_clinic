import AboutHero from "../components/About/AboutHero/AboutHero";
import AboutMain from "../components/About/AboutMain/AboutMain";
import AboutHistoryTeam from "../components/About/AboutHistoryTeam/AboutHistoryTeam";
import AboutValues from "../components/About/AboutValues/AboutValues";
import AboutStats from "../components/About/AboutStats/AboutStats";
import AboutCTA from "../components/About/AboutCTA/AboutCTA";
import Section from '../components/Common/Section/Section'


function About() {
    return (  
        <>
            <AboutHero/>
            <Section> 
                <AboutMain/>
            </Section>
            <AboutStats/>
            <AboutValues/>
            <Section> 
                <AboutHistoryTeam/>
            </Section>
            <AboutCTA/>
        </>
    );
}

export default About;
