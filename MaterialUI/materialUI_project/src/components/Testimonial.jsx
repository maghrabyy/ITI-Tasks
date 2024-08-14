import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { Avatar } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import avatarImg1 from '../assets/ceo1.jpg';
import avatarImg2 from '../assets/ceo2.jpg';
import avatarImg3 from '../assets/ceo3.jpg';
import avatarImg4 from '../assets/ceo4.jpg';

export const Testimonial = () => {
  return (
    <section className="relative">
      <Grid container>
        <Grid
          item
          xs={6}
          sx={{
            backgroundColor: '#6751E8',
            paddingTop: '5rem',
            paddingLeft: '4rem',
            minHeight: { xs: '240vh', md: '100vh' },
          }}
        >
          <Typography
            fontWeight={600}
            textTransform="uppercase"
            color="white"
            fontSize={13}
          >
            Testimonial
          </Typography>
          <Typography fontWeight={600} variant="h4" color="white">
            What Our Clients Says
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ backgroundColor: '#F9FAFF' }}></Grid>
      </Grid>
      <Container className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <Grid container spacing={2}>
          <TestimonialItem img={avatarImg1} />
          <TestimonialItem img={avatarImg2} />
          <TestimonialItem img={avatarImg3} />
          <TestimonialItem img={avatarImg4} />
        </Grid>
      </Container>
    </section>
  );
};

const TestimonialItem = ({ img }) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card>
        <CardContent>
          <Stack spacing={2}>
            <Stack direction="row">
              <StarIcon sx={{ color: '#28DF99', fontSize: 20 }} />
              <StarIcon sx={{ color: '#28DF99', fontSize: 20 }} />
              <StarIcon sx={{ color: '#28DF99', fontSize: 20 }} />
              <StarIcon sx={{ color: '#28DF99', fontSize: 20 }} />
              <StarIcon sx={{ color: '#28DF99', fontSize: 20 }} />
            </Stack>
            <Typography color="gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              voluptatem illo fuga esse possimus excepturi odit voluptas
              quisquam perspiciatis sint.
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar
                src={img}
                sx={{ width: 80, height: 80 }}
                alt="client testimonial"
              ></Avatar>
              <Stack spacing={1}>
                <Typography fontWeight={600} color="#578FFC">
                  Roger Scott
                </Typography>
                <Typography
                  fontWeight={600}
                  fontSize={12}
                  color="#28DF99"
                  textTransform="uppercase"
                >
                  Marketing Manager
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};
