import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Paper from "@mui/material/Paper"
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import InterestText from "./InterestText"

function InterestMain(props) {

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
      }}
    >
      <Typography variant="h3" gutterBottom>
        My Interests...
      </Typography>
      <Divider />
      <Paper variant="outlined" sx={{p: 2, width: 1000, marginBottom: 2}}>
        <InterestText>
        </InterestText>
      </Paper>
        
    </Grid>
  );
}

InterestMain.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default InterestMain;