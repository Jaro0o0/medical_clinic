import { useState } from "react";
import {
    Container,
    ImageList,
    ImageListItem,
    Box,
    Typography,
    Dialog,
    IconButton,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import { motion } from "framer-motion";
import SectionHeader from "../../Common/SectionHeader/SectionHeader";
import "./ImagesGallery.css";

import img1 from "../../../assets/imgs/image00001.jpeg";
import img2 from "../../../assets/imgs/image00002.jpeg";
import img3 from "../../../assets/imgs/image00003.jpeg";
import img4 from "../../../assets/imgs/IMG_2059.jpeg";
import img5 from "../../../assets/imgs/IMG_2067.jpeg";
import img6 from "../../../assets/imgs/IMG_2072.jpeg";
import img7 from "../../../assets/imgs/IMG_2077.jpeg";
import img8 from "../../../assets/imgs/IMG_2085.jpeg";
import img9 from "../../../assets/imgs/IMG_2171.jpeg";
import img10 from "../../../assets/imgs/IMG_2062.jpeg";

const itemData = [
    { img: img1, title: "Sprzęt 1", cols: 2, rows: 2 },
    { img: img10, title: "Sprzęt 2", cols: 1, rows: 1 },
    { img: img3, title: "Wnętrze 1", cols: 1, rows: 1 },
    { img: img4, title: "Sprzęt 3", cols: 2, rows: 2 },
    { img: img5, title: "Sprzęt 4", cols: 1, rows: 1 },
    { img: img6, title: "Sprzęt 5", cols: 1, rows: 1 },
    { img: img7, title: "Sprzęt 6", cols: 2, rows: 2 },
    { img: img8, title: "Sprzęt 7", cols: 1, rows: 1 },
    { img: img9, title: "Sprzęt 8", cols: 1, rows: 1 },
    { img: img2, title: "Sprzęt 9", cols: 3, rows: 2 },
];

function ImagesGallery() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.down("md"));
    const [lightboxItem, setLightboxItem] = useState(null);

    const cols = isMobile ? 1 : isTablet ? 2 : 3;
    const rowHeight = isMobile ? 300 : isTablet ? 400 : 500;

    return (
        <Container maxWidth="xl">
            <Box sx={{ py: { xs: 4, md: 8 } }}>
                <SectionHeader
                    overline="Wnętrze i sprzęt"
                    title="Zajrzyj do naszego gabinetu"
                    description="Nowoczesne pomieszczenia i profesjonalny sprzęt — wszystko w jednym miejscu."
                />

                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <ImageList
                        sx={{
                            width: "100%",
                            height: "auto",
                            overflow: "hidden",
                            margin: 0,
                        }}
                        cols={cols}
                        gap={isMobile ? 12 : 24}
                        variant="quilted"
                        rowHeight={rowHeight}
                    >
                        {itemData.map((item, index) => {
                            const itemCols = isMobile ? 1 : Math.min(item.cols || 1, cols);
                            const itemRows = isMobile ? 1 : item.rows || 1;

                            return (
                                <ImageListItem
                                    key={index}
                                    cols={itemCols}
                                    rows={itemRows}
                                    className="gallery-item"
                                    onClick={() => setLightboxItem(item)}
                                >
                                    <img
                                        src={item.img}
                                        className="images-gallery-img"
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                    <Box className="gallery-item-overlay">
                                        <Box className="gallery-item-overlay-content">
                                            <ZoomInIcon className="gallery-zoom-icon" />
                                            <Typography
                                                variant="subtitle1"
                                                className="gallery-item-title"
                                            >
                                                {item.title}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </ImageListItem>
                            );
                        })}
                    </ImageList>
                </Box>
            </Box>

            <Dialog
                open={Boolean(lightboxItem)}
                onClose={() => setLightboxItem(null)}
                maxWidth="lg"
                fullWidth
                className="gallery-lightbox"
                slotProps={{
                    backdrop: { className: "gallery-lightbox-backdrop" },
                }}
            >
                {lightboxItem && (
                    <Box className="gallery-lightbox-content">
                        <IconButton
                            className="gallery-lightbox-close"
                            onClick={() => setLightboxItem(null)}
                            aria-label="Zamknij podgląd"
                        >
                            <CloseIcon />
                        </IconButton>
                        <img
                            src={lightboxItem.img}
                            alt={lightboxItem.title}
                            className="gallery-lightbox-img"
                        />
                        <Typography
                            variant="subtitle1"
                            className="gallery-lightbox-caption"
                        >
                            {lightboxItem.title}
                        </Typography>
                    </Box>
                )}
            </Dialog>
        </Container>
    );
}

export default ImagesGallery;
