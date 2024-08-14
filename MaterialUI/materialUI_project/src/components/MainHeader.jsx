import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import PublicIcon from '@mui/icons-material/Public';
import headerImg from '../assets/header.jpg';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { ServicesCards } from './Services';
import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { IconButton } from '@mui/material';
import { Button } from '@mui/material';
import { useDrawerToggler } from '../context/DrawerTogglerContext';

export const Header = () => {
  const { drawerToggleHandler } = useDrawerToggler();

  return (
    <header className="pt-1 pb-4 min-h-screen space-y-4 bg-black bg-opacity-80 relative mb-[250vh] sm:mb-[130vh] md:mb-[115vh] lg:mb-[50vh]">
      <div
        style={{
          backgroundImage: `url(${headerImg})`,
          backgroundSize: 'cover',
        }}
        className="bg-img top-0 left-0 -z-10 absolute h-full w-full"
      ></div>
      <Container>
        <Stack direction="row" justifyContent="space-between">
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <PhoneIcon sx={{ color: 'white', fontSize: 14 }} />
            <EmailIcon sx={{ color: 'white', fontSize: 14 }} />
          </Stack>
          <Stack
            sx={{ display: { xs: 'none', md: 'flex' } }}
            direction="row"
            spacing={1}
            className="text-white"
          >
            <Typography fontSize={13}>
              <span className="text-gray-300">phone no:</span> [+20] 01282807419
            </Typography>
            <Typography fontSize={13}>
              <span className="text-gray-300">or email us:</span>{' '}
              mahmoud.elmaghraby11@gmail.com
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} className="icons">
            <FacebookIcon sx={{ color: 'white', fontSize: 14 }} />
            <XIcon sx={{ color: 'white', fontSize: 14 }} />
            <InstagramIcon sx={{ color: 'white', fontSize: 14 }} />
            <PublicIcon sx={{ color: 'white', fontSize: 14 }} />
          </Stack>
        </Stack>
      </Container>
      <nav className="border-y border-y-gray-600/50">
        <Container className="text-white">
          <Stack direction="row" justifyContent={'space-between'}>
            <Typography fontWeight={600} variant="h4" className="py-4">
              MaghTech
            </Typography>
            <IconButton
              onClick={() => drawerToggleHandler(true)}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <MenuIcon sx={{ color: 'white' }} />
            </IconButton>
            <Stack direction="row" sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Typography
                fontWeight={600}
                className="px-3 flex items-center cursor-pointer select-none hover:text-white/80 border-x border-x-gray-600/50"
              >
                Home
              </Typography>
              <Typography
                fontWeight={600}
                className="px-3 flex items-center cursor-pointer select-none hover:text-white/80 border-r border-r-gray-600/50"
              >
                About
              </Typography>
              <Typography
                fontWeight={600}
                className="px-3 flex items-center cursor-pointer select-none hover:text-white/80 border-r border-r-gray-600/50"
              >
                Services
              </Typography>
              <Typography
                fontWeight={600}
                className="px-3 flex items-center cursor-pointer select-none hover:text-white/80 border-r border-r-gray-600/50"
              >
                Portfolio
              </Typography>
              <Typography
                fontWeight={600}
                className="px-3 flex items-center cursor-pointer select-none hover:text-white/80 border-r border-r-gray-600/50"
              >
                Blog
              </Typography>
              <Typography
                fontWeight={600}
                className="px-3 flex items-center cursor-pointer select-none hover:text-white/80 border-r border-r-gray-600/50"
              >
                Contact
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </nav>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Stack
              justifyContent="center"
              alignItems="center"
              className="h-[200px]"
            >
              <PlayCircleIcon
                className="text-blue-600 cursor-pointer hover:text-blue-500"
                sx={{ fontSize: '6rem' }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack className="text-white" spacing={2}>
              <Typography
                fontWeight={600}
                className=" tracking-widest uppercase"
              >
                Welcome to MaghTech
              </Typography>
              <Typography
                sx={{ fontSize: { xs: 30, md: 40 } }}
                fontWeight={600}
                className=" uppercase"
              >
                We create website the way you want with MaghTech
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At quia
                voluptatum fugit, quibusdam quaerat maxime rem.
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button variant="contained">Learn More</Button>
                <Button
                  variant="contained"
                  color="inherit"
                  sx={{ color: 'black' }}
                >
                  Portfolio
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <ServicesCards />
    </header>
  );
};
