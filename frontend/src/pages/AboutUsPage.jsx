import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Box, Typography, Grid, Paper, Container } from '@mui/material';
import { Hub, Lightbulb, People, Code, VerifiedUser, Storage } from '@mui/icons-material';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const AboutUsPage = () => {
  return (
    <Box sx={{
      bgcolor: 'background.default',
      color: 'text.primary',
      overflowX: 'hidden',
      fontFamily: 'sans-serif',
    }}>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box
          sx={{
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            p: 4,
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          }}
        >
          <Container maxWidth="md">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Hub sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
            </motion.div>
            <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
              Welcome to the Decentralized Idea/Innovation Hub 🚀
            </Typography>
            <Typography variant="h5" sx={{ color: 'text.secondary' }}>
              A community-driven platform for transparent and collaborative innovation.
            </Typography>
          </Container>
        </Box>
      </motion.div>

      <Container sx={{ py: 8 }}>
        {/* Concept and Vision Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                <Lightbulb sx={{ fontSize: 40, verticalAlign: 'middle', mr: 1 }} /> Concept and Vision
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                We are a public ecosystem for ideation, moving beyond traditional centralized models. Our platform harnesses collective intelligence to identify, refine, and champion innovative concepts, from startup ideas to open-source project enhancements.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.img
                src="/team-illustration.svg"
                alt="Team working on ideas"
                style={{ maxWidth: '100%', height: 'auto' }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </Grid>
          </Grid>
        </motion.section>

        {/* Goals Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{ marginTop: '6rem' }}
        >
          <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
            Our Goals 🎯
          </Typography>
          <Grid container spacing={4}>
            {[
              { icon: <People sx={{ fontSize: 50 }} />, title: 'Democratize Innovation', description: 'Provide an accessible space for anyone to submit and evaluate ideas.' },
              { icon: <Code sx={{ fontSize: 50 }} />, title: 'Foster Collaboration', description: 'Enable direct resource pledging to transform ideas into projects.' },
              { icon: <VerifiedUser sx={{ fontSize: 50 }} />, title: 'Ensure Transparency', description: 'Implement verifiable actions through blockchain-like principles for trust.' },
              { icon: <Storage sx={{ fontSize: 50 }} />, title: 'Efficient Idea Selection', description: 'Streamline prioritizing high-potential ideas via community consensus.' },
            ].map((goal, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Paper elevation={3} sx={{ p: 3, textAlign: 'center', borderRadius: 2, height: '100%', '&:hover': { transform: 'translateY(-10px)', transition: 'transform 0.3s' } }}>
                    <Box sx={{ color: 'primary.main', mb: 2 }}>{goal.icon}</Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>{goal.title}</Typography>
                    <Typography variant="body2">{goal.description}</Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.section>

        {/* Core Principles Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{ marginTop: '6rem', textAlign: 'center' }}
        >
          <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
            Core Principles 🛡️
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', mb: 4, maxWidth: '800px', margin: 'auto' }}>
            We leverage blockchain principles like cryptographic hashing and Merkle trees to create verifiable, immutable logs of all critical actions, ensuring transparency and resistance to manipulation without the overhead of a full blockchain.
          </Typography>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Box
              component="img"
              src="/login-bg.svg"
              alt="Blockchain illustration"
              sx={{ maxWidth: '100%', height: 'auto', maxHeight: 400, mt: 4 }}
            />
          </motion.div>
        </motion.section>

        {/* Technology Stack Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{ marginTop: '6rem', textAlign: 'center' }}
        >
          <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 4 }}>
            Our Technology Stack 💻
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {['Java/Spring Boot', 'React', 'PostgreSQL'].map((tech, index) => (
              <Grid item key={index}>
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Paper elevation={2} sx={{ p: 3, borderRadius: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Code sx={{ color: 'primary.main' }} />
                    <Typography variant="h6">{tech}</Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.section>
      </Container>
    </Box>
  );
};

export default AboutUsPage;
