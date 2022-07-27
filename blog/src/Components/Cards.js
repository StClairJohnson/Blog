import React from "react"
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import { styled } from '@mui/material/styles';

const Item = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'left',
}));

function Cards(props) {

    return (
  <div style={{ padding: 30 }} >
    <Box sx={{ flexGrow: 1 }}>
    <Grid item xs={15} container spacing={1}>
      <Item>
      <Stack direction="column" spacing={2}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              Track Stuff
            </Typography>
            <Typography variant="subtitle1" paragraph>
            I participate in running sports at my school. Find out more about my struggles
            and successes when it comes to running!
            </Typography>
            <Typography variant="subtitle1" paragraph>
            <Link to="/expenses">Continue Reading...</Link>
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image="https://static.wikia.nocookie.net/2c0fe3dc-6dae-4b7e-ba08-a1bc08044711"
          />
        </Card>
      </CardActionArea>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              Cartoons and Videogames
            </Typography>
            <Typography variant="subtitle1" paragraph>
            I enjoy watching cartoons and playing videogames. Learn more about my top
            Favorite in each category! 
            </Typography>
            <Typography variant="subtitle1" paragraph>
            <Link to="/invoices">Continue Reading...</Link>
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image="https://static.wikia.nocookie.net/2c0fe3dc-6dae-4b7e-ba08-a1bc08044711"
          />
        </Card>
      </CardActionArea>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              Memes
            </Typography>
            <Typography variant="subtitle1" paragraph>
              These are just a few memes that I found funny...
            </Typography>
            <Typography variant="subtitle1" paragraph>
            <Link to="/profits">Continue Reading...</Link>
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image="https://i.imgflip.com/63amo8.png"
          />
        </Card>
      </CardActionArea>
      </Stack>
      </Item>
    </Grid>
    </Box> 
  </div>  
    );
};

export default Cards;   