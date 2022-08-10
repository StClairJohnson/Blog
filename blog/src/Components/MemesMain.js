import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Paper from "@mui/material/Paper"
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

function MemesMain(props) {

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
      }}
    >
      <Paper variant="outlined" sx={{p: 2, width: 1150, height: 500, marginBottom: 2}}>
        <Stack direction="column">
        <Stack direction="row">
            <img className="horizontal-photo" src="https://cdn.memes.com/up/77351541623932026/i/1633099122989.png" alt="pain"/>
            <img className="horizontal-photo" src="https://cdn.memes.com/up/62993621603564147/i/1604268483278.jpg" alt="pain"/>
            <img className="vertical-photo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrUlVj311JZl4l1ZzeQ5gnd8uw7KjOThDi8Q&usqp=CAU" alt="pain"/>
            <img className="vertical-photo" src="https://i.imgflip.com/3i5z6w.jpg" alt="pain"/>
            </Stack>
            <Stack direction="row">
            <img className="horizontal-photo" src="https://pm1.narvii.com/6124/bcac6fbe92e9d4496d4b8d716d1392880088b89c_hq.jpg" alt="pain"/>
            <img className="vertical-photo" src="data:image/jpeg;base64,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" alt="pain"/>
            <img className="horizontal-photo" src="https://qph.cf2.quoracdn.net/main-qimg-17695131ccbab9294e902b78e26a8a8d-lq" alt="pain"/>
        </Stack>
        <Typography>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </Typography>
        <Link href="https://youtu.be/dQw4w9WgXcQ">Click Here</Link>
        </Stack>
      </Paper>
        
    </Grid>
  );
}

MemesMain.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default MemesMain;