import { Container, ImageList, ImageListItem, Typography ,Box} from "@mui/material";
import ImagesHero from "../components/ImagesHero/ImagesHero";
import ImagesGallery from "../components/ImagesGallery/ImagesGallery";
import Section from "../components/Section";
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