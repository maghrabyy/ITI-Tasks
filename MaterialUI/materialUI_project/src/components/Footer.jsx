import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Button } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';
import MapIcon from '@mui/icons-material/Map';

export const Footer = () => {
  return (
    <footer className="bg-[#141B25] py-20 mt-28">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={3}>
            <Stack spacing={3}>
              <Typography fontWeight={600} fontSize={22} color="white">
                MaghTech
              </Typography>
              <Typography color="white">
                Far far away, behind the word mountains, far from the countries.
              </Typography>
              <Stack direction="row" spacing={1}>
                <Avatar sx={{ backgroundColor: '#4986FC' }}>
                  <XIcon />
                </Avatar>
                <Avatar sx={{ backgroundColor: '#4986FC' }}>
                  <FacebookIcon />
                </Avatar>
                <Avatar sx={{ backgroundColor: '#4986FC' }}>
                  <InstagramIcon />
                </Avatar>
              </Stack>
            </Stack>
          </Grid>
          <FooterItem
            title="Explore"
            links={['About', 'Contact', 'Portfolio', 'Blog']}
          />
          <FooterItem
            title="Info"
            links={[
              'Join Us',
              'Blog',
              'Privacy & Policy',
              'Terms & Conditions',
            ]}
          />
          <FooterItem
            title="Company"
            links={['About Us', 'Blog', 'Contact', 'Careers']}
          />
          <Grid item xs={6} lg={3}>
            <Stack spacing={2}>
              <Typography fontWeight={600} fontSize={22} color="white">
                Have a question?
              </Typography>
              <Stack direction="row" spacing={2}>
                <MapIcon sx={{ color: '#4986FC' }} />
                <Typography color="gray">
                  203 Fake St. Mountain View, San Francisco, California, USA
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <PhoneIcon sx={{ color: '#4986FC' }} />
                <Typography color="gray">+2 392 3929 210</Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <SendIcon sx={{ color: '#4986FC' }} />
                <Typography color="gray" className="truncate">
                  info@yourdomain.com
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
        <Typography
          color="gray"
          className="pt-28"
          sx={{ textAlign: { xs: 'center', md: 'start' } }}
        >
          Copyright ©2024 All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

const FooterItem = ({ title, links }) => {
  return (
    <Grid item xs={6} lg={2}>
      <Stack spacing={3} alignItems="start">
        <Typography fontWeight={600} fontSize={22} color="white">
          {title}
        </Typography>
        <Stack spacing={1}>
          {links.map((link) => (
            <Button
              key={link}
              startIcon={<KeyboardArrowRightIcon />}
              sx={{ color: 'white', justifyContent: 'start', fontSize: 12 }}
            >
              {link}
            </Button>
          ))}
        </Stack>
      </Stack>
    </Grid>
  );
};
