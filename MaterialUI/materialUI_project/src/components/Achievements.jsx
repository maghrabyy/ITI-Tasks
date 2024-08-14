import { Container } from '@mui/material';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
import achievementBG from '../assets/achievements.jpg';
import projectImg from '../assets/project.png';
import staffImg from '../assets/staff.png';
import serviceImg from '../assets/service.png';
import customerImg from '../assets/customer.png';

export const Achievements = () => {
  return (
    <section className="py-24 relative bg-blue-600 bg-opacity-70">
      <div
        style={{
          backgroundImage: `url(${achievementBG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
        className="bg-img top-0 left-0 -z-10 absolute h-full w-full"
      ></div>
      <Container>
        <Grid container direction="row" spacing={3}>
          <AchievementItem
            img={projectImg}
            estimation="4,800"
            title="Projects Completed"
          />
          <AchievementItem
            img={staffImg}
            estimation="1,000"
            title="Our Staff"
          />
          <AchievementItem
            img={serviceImg}
            estimation="350"
            title="Services Provided"
          />
          <AchievementItem
            img={customerImg}
            estimation="7,650"
            title="Happy Customers"
          />
        </Grid>
      </Container>
    </section>
  );
};

const AchievementItem = ({ img, estimation, title }) => {
  return (
    <Grid item xs={6} md={3}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Box
          sx={{
            backgroundColor: 'white',
            padding: '0.4rem',
            borderRadius: '0.5rem',
          }}
        >
          <img src={img} alt={title} className="w-14 object-contain" />
        </Box>
        <Stack>
          <Typography fontWeight={600} variant="h4" color="white">
            {estimation}
          </Typography>
          <Typography
            fontWeight={600}
            sx={{ textTransform: 'uppercase' }}
            color="white"
          >
            {title}
          </Typography>
        </Stack>
      </Stack>
    </Grid>
  );
};
