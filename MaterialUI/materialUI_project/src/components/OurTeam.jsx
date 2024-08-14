import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { Button } from '@mui/material';
import { Card } from '@mui/material';
import { CardMedia } from '@mui/material';
import { CardContent } from '@mui/material';
import { IconButton } from '@mui/material';
import staffImg1 from '../assets/staff1.jpg';
import staffImg2 from '../assets/staff2.jpg';
import staffImg3 from '../assets/staff3.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';

export const OurTeamSection = () => {
  return (
    <section className="bg-[#141b25] pt-20 pb-36">
      <Container>
        <Grid container spacing={3} alignItems="end">
          <Grid item xs={12} md={3}>
            <Stack spacing={1}>
              <Typography
                sx={{
                  textTransform: 'uppercase',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                Team & Staff
              </Typography>
              <Typography
                sx={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                Our Team
              </Typography>

              <Typography sx={{ color: 'gray' }}>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country{' '}
              </Typography>
              <Button variant="contained">View All Stuff</Button>
            </Stack>
          </Grid>
          <TeamCard img={staffImg1} />
          <TeamCard img={staffImg2} />
          <TeamCard img={staffImg3} />
        </Grid>
      </Container>
    </section>
  );
};

const TeamCard = ({ img }) => {
  return (
    <Grid item xs={12} md={3}>
      <Card sx={{ backgroundColor: '#1D2736' }}>
        <CardMedia
          sx={{ height: 280, objectPosition: 'center' }}
          image={img}
          title="Staff"
        />
        <CardContent>
          <Stack spacing={2} alignItems="center">
            <Typography color="white" fontWeight={600}>
              Lloyd Wilson
            </Typography>
            <Typography color="#4986FC">Web Developer</Typography>
            <Stack direction="row" spacing={2}>
              <IconButton>
                <FacebookIcon className="text-white hover:text-white/80" />
              </IconButton>
              <IconButton>
                <XIcon className="text-white hover:text-white/80" />
              </IconButton>
              <IconButton>
                <InstagramIcon className="text-white hover:text-white/80" />
              </IconButton>
              <IconButton>
                <GoogleIcon className="text-white hover:text-white/80" />
              </IconButton>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};
