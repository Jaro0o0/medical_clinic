import OfferHero from '../components/Offer/OfferHero/OfferHero';
import OfferCatalog from '../components/Offer/OfferCatalog/OfferCatalog';
import Section from '../components/Common/Section/Section'


function Offer() {
    return (  
        <>
            <OfferHero/>
            <Section>
                 <OfferCatalog/>
            </Section>
          
        </>
    );
}

export default Offer;
