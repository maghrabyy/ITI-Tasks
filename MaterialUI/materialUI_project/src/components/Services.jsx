import { Grid } from '@mui/material';
import { Stack } from '@mui/material';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import designImg from '../assets/design.png';
import codingImg from '../assets/coding.png';
import brandingImg from '../assets/branding.png';
import seoImg from '../assets/seo.png';

export const ServicesCards = () => {
  return (
    <Container className="absolute lg:-bottom-[250px] left-1/2 -translate-x-1/2">
      <Grid container spacing={1}>
        <ServicesCard img={designImg} title="UX / UI Design" />
        <ServicesCard img={codingImg} title="Development" />
        <ServicesCard img={brandingImg} title="Branding" />
        <ServicesCard img={seoImg} title="Search Optimization" />
      </Grid>
    </Container>
  );
};

const ServicesCard = ({ title, img }) => {
  return (
    <Grid item xs={12} sm={6} lg={3}>
      <Card className="py-2">
        <CardContent>
          <Stack spacing={2}>
            <img src={img} alt="SEO" className="w-16" />

            <Typography fontWeight={600} sx={{ fontSize: { xs: 18, md: 24 } }}>
              {title}
            </Typography>
            <Typography>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};
