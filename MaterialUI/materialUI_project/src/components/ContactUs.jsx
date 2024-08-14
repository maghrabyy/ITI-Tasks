import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';
import PublicIcon from '@mui/icons-material/Public';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { Stack } from '@mui/material';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import workspaceImg from '../assets/workspace.jpg';

export const ContactUs = () => {
  return (
    <section className="min-h-screen py-14">
      <Container>
        <Grid container spacing={3} className="py-24">
          <ContactItem
            icon={<LocationOnIcon />}
            title="Address"
            data="198 West 21th Street, Suite 721 New York NY 10016"
          />
          <ContactItem
            icon={<PhoneIcon />}
            title="Phone"
            data="+ 1235 2355 98"
          />
          <ContactItem
            icon={<SendIcon />}
            title="Email"
            data="info@yoursite.com"
          />
          <ContactItem
            icon={<PublicIcon />}
            title="Website"
            data="yoursite.com"
          />
        </Grid>
        <Card>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={7}>
              <CardContent>
                <Stack className="md:ps-8 md:pt-8" spacing={2}>
                  <Typography variant="h4">Contact Us</Typography>
                  <Stack direction="row" spacing={2}>
                    <TextField
                      sx={{ flexGrow: 1 }}
                      id="standard-basic"
                      label="Full Name"
                      placeholder="Name"
                      variant="standard"
                    />
                    <TextField
                      sx={{ flexGrow: 1 }}
                      id="standard-basic"
                      label="Email Address"
                      placeholder="Email"
                      variant="standard"
                    />
                  </Stack>
                  <TextField
                    sx={{ flexGrow: 1 }}
                    id="standard-basic"
                    label="Subject"
                    placeholder="Subject"
                    variant="standard"
                  />
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Message"
                    placeholder="Message"
                    multiline
                    rows={6}
                  />
                  <Button
                    variant="contained"
                    sx={{ textTransform: 'uppercase', alignSelf: 'start' }}
                  >
                    Send Message
                  </Button>
                </Stack>
              </CardContent>
            </Grid>
            <Grid item xs={12} md={6} lg={5}>
              <CardMedia
                sx={{ height: 500 }}
                image={workspaceImg}
                title="workspace - contact us"
              />
            </Grid>
          </Grid>
        </Card>
      </Container>
    </section>
  );
};

const ContactItem = ({ icon, title, data }) => {
  return (
    <Grid item xs={6} sm={3}>
      <Stack alignItems="center" spacing={1}>
        <Avatar sx={{ width: 60, height: 60, backgroundColor: '#4986FC' }}>
          {icon}
        </Avatar>
        <Typography textAlign="center">
          <span className="font-bold text-black">{title}:</span> {data}
        </Typography>
      </Stack>
    </Grid>
  );
};
