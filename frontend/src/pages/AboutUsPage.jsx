import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Box, Typography, Paper, Container, Divider } from '@mui/material';
import { Hub, Lightbulb, People, Code, VerifiedUser, Storage, Security, Update, EmojiObjects } from '@mui/icons-material';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
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
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary', fontFamily: 'sans-serif', py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}>
            About Our Decentralized Idea/Innovation Hub 💡
          </Typography>
          <Typography variant="h5" sx={{ color: 'text.secondary', textAlign: 'center', mb: 6 }}>
            Fostering a transparent, community-driven ecosystem for innovation.
          </Typography>
        </motion.div>

        <Paper elevation={2} sx={{ p: { xs: 3, md: 6 }, borderRadius: 2 }}>
          <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>

            <motion.div variants={itemVariants}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                <Hub sx={{ verticalAlign: 'middle', mr: 1 }} /> Introduction
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
                The Decentralized Idea/Innovation Hub is a platform designed to democratize the innovation process. It enables users to submit ideas, validate them through community voting, and pledge virtual resources, fostering a collaborative environment for project development. Our vision is to harness collective intelligence to identify, refine, and champion innovative concepts, from nascent startup ideas to enhancements for open-source projects.
              </Typography>
              <Divider sx={{ my: 4 }} />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                <VerifiedUser sx={{ verticalAlign: 'middle', mr: 1 }} /> Core Principles of Decentralization
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 2 }}>
                We leverage blockchain principles to ensure transparency and trust without the overhead of a full blockchain network. This is achieved through:
              </Typography>
              <ul>
                <li><Typography sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}><strong>Cryptographic Hashing:</strong> Every critical action (votes, pledges, submissions) is cryptographically hashed to create a unique "digital fingerprint," ensuring data integrity and immutability.</Typography></li>
                <li><Typography sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}><strong>Merkle Trees:</strong> We use Merkle trees (hash trees) for verifiable logs. This allows for efficient and secure verification of the contents of our data structures, making the entire history of actions tamper-proof.</Typography></li>
                <li><Typography sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}><strong>Distributed Ledger Technology (DLT) Principles:</strong> We apply DLT principles to provide a single source of truth for all critical actions, ensuring that records are permanent, time-stamped, and visible for verification by all participants.</Typography></li>
              </ul>
              <Divider sx={{ my: 4 }} />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                <Code sx={{ verticalAlign: 'middle', mr: 1 }} /> Architectural Design
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 2 }}>
                Our platform is built on a modern, robust technology stack designed for scalability and a rich user experience:
              </Typography>
              <ul>
                <li><Typography sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}><strong>Backend:</strong> Java with the Spring Boot framework for efficient and powerful RESTful APIs.</Typography></li>
                <li><Typography sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}><strong>Frontend:</strong> React for a dynamic and responsive user interface, styled with Material-UI.</Typography></li>
                <li><Typography sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}><strong>Database:</strong> PostgreSQL for its strong support for data integrity and transactional capabilities.</Typography></li>
              </ul>
              <Divider sx={{ my: 4 }} />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                <EmojiObjects sx={{ verticalAlign: 'middle', mr: 1 }} /> Key Features and Goals
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 2 }}>
                Our primary goals are to:
              </Typography>
              <ul>
                <li><Typography sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}><People sx={{ verticalAlign: 'middle', mr: 1, fontSize: '1.2rem' }} /><strong>Democratize Innovation:</strong> Provide an inclusive space for everyone to contribute and evaluate ideas.</Typography></li>
                <li><Typography sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}><Lightbulb sx={{ verticalAlign: 'middle', mr: 1, fontSize: '1.2rem' }} /><strong>Foster Collaboration:</strong> Enable users to pledge skills and time to bring ideas to life.</Typography></li>
                <li><Typography sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}><Storage sx={{ verticalAlign: 'middle', mr: 1, fontSize: '1.2rem' }} /><strong>Efficient Idea Selection:</strong> Use community consensus to identify high-potential ideas.</Typography></li>
              </ul>
              <Divider sx={{ my: 4 }} />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                <Security sx={{ verticalAlign: 'middle', mr: 1 }} /> Challenges and Our Solutions
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 2 }}>
                We are actively working on solving key challenges to ensure a fair and secure platform:
              </Typography>
              <ul>
                <li><Typography sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}><strong>Secure Voting:</strong> We are designing a tamper-proof voting system that prevents manipulation, such as Sybil attacks, through identity validation and other defense mechanisms.</Typography></li>
                <li><Typography sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}><Update sx={{ verticalAlign: 'middle', mr: 1, fontSize: '1.2rem' }} /><strong>Real-time Updates:</strong> We use Server-Sent Events (SSE) to provide real-time updates for vote counts and idea traction, creating a dynamic and engaging user experience.</Typography></li>
                <li><Typography sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}><strong>User Reputation:</strong> We are building a karma system to incentivize positive contributions and grant privileges based on a user's reputation.</Typography></li>
              </ul>
            </motion.div>

          </motion.section>
        </Paper>
      </Container>
    </Box>
  );
};

export default AboutUsPage;
