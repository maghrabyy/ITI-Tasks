import { TextField } from '@mui/material';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { Container } from '@mui/material';
import { Button } from '@mui/material';
import workspaceImg from '../assets/workspace2.jpg';
import { InputAdornment } from '@mui/material';

export const NewsLetter = () => {
  return (
    <Container className="py-8 relative bg-blue-500 bg-opacity-70">
      <div
        className="absolute top-0 left-0 h-full w-full -z-10"
        style={{
          backgroundImage: `url(${workspaceImg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>
      <Stack alignItems="center" spacing={2}>
        <Typography
          textTransform="uppercase"
          textAlign="center"
          color="white"
          sx={{ fontSize: { xs: 18, sm: 24 } }}
        >
          Subscribe to our Newsletter
        </Typography>
        <Typography
          color="white"
          textAlign="center"
          sx={{ fontSize: { xs: 13, sm: 18 } }}
        >
          A small river named Duden flows by their place
        </Typography>
        <Stack
          sx={{
            flexDirection: { xs: 'column', md: 'row' },
            minWidth: { md: '500px' },
            gap: { xs: '4px', md: 0 },
          }}
        >
          <TextField
            variant="filled"
            label="Email Address"
            placeholder="Enter email address."
            sx={{
              flexGrow: 1,
              borderRadius: 16,
              input: { color: 'black', backgroundColor: 'white' },
            }}
            InputLabelProps={{
              sx: {
                color: 'black',
                '&.Mui-focused': { color: 'black' },
              },
            }}
            InputProps={{
              disableUnderline: true,
              endAdornment: (
                <InputAdornment
                  position="end"
                  // sx={{ display: { xs: 'none', sm: 'block' } }}
                >
                  <Button sx={{ color: 'white' }}>Subscribe</Button>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Stack>
    </Container>
  );
};
