import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Grid } from '@mui/material';
import { Stack } from '@mui/material';
import portfolioImg1 from '../assets/portfolio1.jpg';
import portfolioImg2 from '../assets/portfolio2.jpg';
import portfolioImg3 from '../assets/portfolio3.jpg';
import portfolioImg4 from '../assets/portfolio4.jpg';
import portfolioImg5 from '../assets/portfolio5.jpg';
import portfolioImg6 from '../assets/portfolio6.jpg';

export const PortfolioSection = () => {
  return (
    <section className="py-28">
      <Container>
        <Stack alignItems="center" spacing={2}>
          <Typography color="#4986FC" sx={{ textTransform: 'uppercase' }}>
            Recent Portfolio
          </Typography>
          <Typography variant="h4" sx={{ textAlign: 'center' }}>
            Our Exceptional Work Quantity
          </Typography>
          <Grid container spacing={3}>
            <PortfolioItem img={portfolioImg1} />
            <PortfolioItem img={portfolioImg2} />
            <PortfolioItem img={portfolioImg3} />
            <PortfolioItem img={portfolioImg4} />
            <PortfolioItem img={portfolioImg5} />
            <PortfolioItem img={portfolioImg6} />
          </Grid>
        </Stack>
      </Container>
    </section>
  );
};

const PortfolioItem = ({ img }) => {
  return (
    <Grid item xs={12} md={4}>
      <Card className="relative">
        <CardMedia sx={{ height: 250 }} image={img} title="portfolio image" />
        <CardContent className="absolute bottom-5 left-3">
          <Typography
            fontSize={13}
            fontWeight={600}
            color="white"
            sx={{ textTransform: 'uppercase' }}
          >
            Web Design
          </Typography>
          <Typography variant="h5" fontWeight={600} color="white">
            Creative Design
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
