import { Container, ImageList, ImageListItem, Typography ,Box} from "@mui/material";
import ImagesHero from "../components/Images/ImagesHero/ImagesHero";
import ImagesGallery from "../components/Images/ImagesGallery/ImagesGallery";
import Section from "../components/Common/Section/Section";
import { motion } from "framer-motion";



function Images() {
    return (  
        <>
            <ImagesHero/>
            <Section>
                  <ImagesGallery/>
            </Section>
            
           
        </>
        
        
    );
}

export default Images;