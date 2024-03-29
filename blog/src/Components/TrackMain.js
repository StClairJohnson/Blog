import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Paper from "@mui/material/Paper"
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import TrackText from "./TrackText"

function TrackMain(props) {

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
      }}
    >
      <Typography variant="h3" gutterBottom sx={{color: '#fff'}}>
        About My Track Life...
      </Typography>
      <Divider />
      <Paper variant="outlined" sx={{p: 2, width: 1000, marginBottom: 2}}>
        <TrackText>
        </TrackText>
        </Paper>
    </Grid>
  );
}

TrackMain.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default TrackMain;