import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
import { Accordion } from '@mui/material';
import { AccordionSummary } from '@mui/material';
import { AccordionDetails } from '@mui/material';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import faqImg from '../assets/FaqImg.jpg';

export const FrequentlyAskedQuestions = () => {
  return (
    <section className="pb-28">
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Stack spacing={2}>
              <img src={faqImg} alt="Frequently Asked Questions" />
              <Typography fontWeight={600} variant="h3">
                Why Choose Us For Your Next Project?
              </Typography>
              <Card>
                <CardContent>
                  <Typography fontWeight={600}>Creative Ideas</Typography>
                  <Typography>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <Typography fontWeight={600}>Creative Ideas</Typography>
                  <Typography>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Stack spacing={2}>
              <Typography
                fontWeight={600}
                textTransform="uppercase"
                fontSize={13}
                color="#4986FC"
              >
                Frequently Asked Questions
              </Typography>
              <Typography variant="h4">Frequently Asked Questions</Typography>
              <AccordionItem title="How To Fix a Problem?" />
              <AccordionItem title="How To Manage Your Website?" />
              <AccordionItem title="How To Grow Your Investments Funds?" />
              <AccordionItem title="What Are Those Requirements For Businesses?" />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

const AccordionItem = ({ title }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography fontWeight={600}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>Far far away, behind the word mountains</Typography>
        <Typography>Consonantia, there live the blind texts</Typography>
        <Typography>
          When she reached the first hills of the Italic Mountains
        </Typography>
        <Typography>
          Bookmarksgrove, the headline of Alphabet Village
        </Typography>
        <Typography>Separated they live in Bookmarksgrove right</Typography>
      </AccordionDetails>
    </Accordion>
  );
};
