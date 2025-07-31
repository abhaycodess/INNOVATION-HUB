import React from 'react';
import Slider from "react-slick"; // Import the slider
import { Box, Container, Typography, Paper } from '@mui/material';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import HowToVoteOutlinedIcon from '@mui/icons-material/HowToVoteOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import { Fade } from "react-awesome-reveal";

const features = [
  {
    icon: <LightbulbOutlinedIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Democratize Innovation',
    description: 'Provide an inclusive space for anyone to submit and evaluate innovative ideas.',
  },
  {
    icon: <HowToVoteOutlinedIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Foster Collaboration',
    description: 'Enable users to pledge skills and time, transforming abstract ideas into projects.',
  },
  {
    icon: <VerifiedUserOutlinedIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Ensure Transparency',
    description: 'Leverage cryptographic principles to create an immutable, verifiable record of all actions.',
  },
];

const FeaturesSection = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.paper', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" gutterBottom>A New Way to Innovate</Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Our platform is built on three core principles.
        </Typography>
        
        <Slider {...settings}>
          {features.map((feature, index) => (
            <Box key={index} sx={{ px: 2, pb: 2 }}>
              <Paper
                sx={{
                  p: 4,
                  textAlign: 'center',
                  height: '100%',
                  minHeight: '260px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                {feature.icon}
                <Typography variant="h6" component="h3" sx={{ mt: 2, mb: 1 }}>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default FeaturesSection;