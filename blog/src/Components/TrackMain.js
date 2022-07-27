import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import TrackText from "./TrackText"

function Main(props) {

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
      }}
    >
      <Typography variant="h6" gutterBottom>
        About My Track Life...
      </Typography>
      <Divider />
        <TrackText>
        </TrackText>
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;