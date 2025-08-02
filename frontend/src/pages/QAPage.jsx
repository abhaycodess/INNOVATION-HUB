import React from 'react';
import { Box, Typography, Container, Paper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

const qnaData = [
  {
    question: "What is We-code?",
    answer: "We-code is a decentralized platform for developers to collaborate on projects, share ideas, and build their reputations."
  },
  {
    question: "How do I get started?",
    answer: "To get started, you can create an account, browse existing projects, or create your own. You can also participate in discussions and contribute to other projects."
  },
  {
    question: "Is We-code free to use?",
    answer: "Yes, We-code is free to use for all users. We believe in open access to technology and collaboration."
  },
  {
    question: "How is my data protected?",
    answer: "We use cryptographic hashing and Merkle trees to ensure the integrity and security of your data. Your contributions are securely recorded and verifiable."
  },
  {
    question: "Can I use We-code for private projects?",
    answer: "Currently, We-code is focused on public and open-source projects to foster a collaborative community. We may introduce features for private projects in the future."
  }
];

const QAPage = () => {
  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary', fontFamily: 'sans-serif', py: 8, mt: 8 }}>
      <Container maxWidth="lg">
        <div>
          <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}>
            Frequently Asked Questions
          </Typography>
          <Typography variant="h5" sx={{ color: 'text.secondary', textAlign: 'center', mb: 6 }}>
            Here are some of the most common questions we get.
          </Typography>
        </div>

        <Paper elevation={2} sx={{ p: { xs: 3, md: 6 }, borderRadius: 2 }}>
          <section>
            {qnaData.map((item, index) => (
              <div key={index}>
                <Accordion sx={{ mb: 2, '&:before': { display: 'none' }, borderRadius: 1, boxShadow: 'none', border: '1px solid #e0e0e0' }}>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls={`panel${index}a-content`}
                    id={`panel${index}a-header`}
                    sx={{ '&:hover': { bgcolor: '#f5f5f5' } }}
                  >
                    <Typography variant="h6">{item.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ bgcolor: '#fafafa' }}>
                    <Typography variant="body1">{item.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            ))}
          </section>
        </Paper>
      </Container>
    </Box>
  );
};

export default QAPage;
