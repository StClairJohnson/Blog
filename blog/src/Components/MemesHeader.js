import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home'
import { Link } from "react-router-dom"
import MuiLink from "@mui/material/Link"
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormGroup } from '@mui/material';

function MemesHeader(props) {

  const theme = createTheme({
    palette: {
        primary: {
          main: '#fff9c4',
          contrastText: '#000000'
        },
        secondary: {
          main: '#ffffff',
          contrastText: '#000000'
        },
    },
}
);

  return (
    <ThemeProvider theme={theme}>
    <React.Fragment>
      <AppBar
       position="absolute"
       color="primary"
       elevation={0}
       sx={{
         position: 'relative',
         borderBottom: (t) => `1px solid ${t.palette.divider}`,
         
       }}
      >
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <MuiLink href="https://www.youtube.com/c/CoryxKenshin">
        <Button size="small" variant="contained" style={{color: '#fff', backgroundColor: '#ff1744'}}>
          Subscribe
          </Button>
          </MuiLink>
        <Typography
          component="h2"
          className="title"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ width: 200 }}
          style={{backgroundColor: '#000000', color: '#ffffff'}}
        >
          St.Clair's Blog
        </Typography>
        <FormGroup className="left-buttons" sx={{display: 'inline'}}>
        <IconButton>
        <Link to="/"><HomeIcon style={{color: '#000000'}} /></Link>
        </IconButton>
        <Link to="/signup">
        <Button variant="outlined" size="small" style={{color: '#fff', backgroundColor: '#ffa726'}}>
          Sign up
        </Button>
        </Link>
        </FormGroup>
      </Toolbar>
      </AppBar>
    </React.Fragment>
    </ThemeProvider>
  );
}

MemesHeader.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default MemesHeader;