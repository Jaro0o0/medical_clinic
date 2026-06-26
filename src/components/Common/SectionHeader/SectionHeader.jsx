import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "../../../animations/animations";

function SectionHeader({ overline, title, description, sx }) {
    return (
        <Box
            component={motion.div}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            sx={{
                mb: { xs: 4, md: 6 },
                textAlign: "center",
                ...sx,
            }}
        >
            <Typography
                variant="overline"
                color="secondary"
                sx={{ fontWeight: 800, letterSpacing: 2 }}
            >
                {overline}
            </Typography>
            <Typography variant="h2" gutterBottom>
                {title}
            </Typography>
            {description && (
                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ maxWidth: 560, mx: "auto" }}
                >
                    {description}
                </Typography>
            )}
        </Box>
    );
}

export default SectionHeader;
