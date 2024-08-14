import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useDrawerToggler } from '../context/DrawerTogglerContext';

const pages = ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'];

function FixedNavbar() {
  const [displayNavbar, setDisplayNavbar] = useState(false);
  const { drawerToggleHandler } = useDrawerToggler();
  document.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
      setDisplayNavbar(true);
    } else {
      setDisplayNavbar(false);
    }
  });
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'white',
        display: displayNavbar ? 'block' : 'none',
      }}
    >
      <Container>
        <Toolbar disableGutters>
          {/* Logo */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            color="black"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.05rem',
              textDecoration: 'none',
            }}
          >
            MaghTech
          </Typography>

          {/* Nav Menu */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              ml: 'auto',
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Hamburger button */}
          <Box sx={{ ml: 'auto', display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => drawerToggleHandler(false)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default FixedNavbar;
