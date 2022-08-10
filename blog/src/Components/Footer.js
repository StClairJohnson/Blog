import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack'
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
      primary: {
        main: '#ffffff',
        contrastText: '#000000'
      },
      secondary: {
        main: '#616161',
        contrastText: '#000000'
      },
  },
}
);

function Footer(props) {

  return (
  <ThemeProvider theme={theme}>
    <Box component="footer" sx={{ py: 6 }} style={{backgroundColor: "#212121", color: '#fff'}}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Follow me on all of my Social Medias!
        </Typography>
        <Stack direction="row">
        <Stack direction="column">
        <Typography
          variant="h6"
          align="left"
          color="secondary"
          component="p"
        >
          Contact Info
        </Typography>
        <Typography
          variant="subtitle1"
          align="left"
          color="primary"
          component="p"
        >
          Phone: 1-800-588-2300
        </Typography>
        <Typography
          variant="subtitle1"
          align="left"
          color="primary"
          component="p"
        >
          Email: idontanswer@gmail.com
        </Typography>
        </Stack>
        <Typography noWrap>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
        </Typography>
        <Stack direction="column">
        <Typography
          variant="h6"
          align="left"
          color="secondary"
          component="p"
        >
          Social Media
        </Typography>
        <Typography
          variant="subtitle1"
          align="left"
          color="primary"
          component="p"
        >
          Instagram: @notamodel
        </Typography>
        <Typography
          variant="subtitle1"
          align="left"
          color="primary"
          component="p"
        >
          TikTok: @absolutelynot
        </Typography>
        <Typography
          variant="subtitle1"
          align="left"
          color="primary"
          component="p"
        >
          Twitter:@never_ever
        </Typography>
        </Stack>
        </Stack>
        <Copyright />
      </Container>
    </Box>
    </ThemeProvider>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;