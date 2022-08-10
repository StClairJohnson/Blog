import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TrackHeader from './TrackHeader';
import MainFeaturedPost from './MainFeaturedPost';
import TrackMain from './TrackMain';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';


const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  title: 'My Track and Running Sport Experiences',
  description:
    " This section is about my track experience. Reac the article below to find out more about the trials and trivulations of my journey!",
  image: 'https://images.unsplash.com/photo-1538370965046-79c0d6907d47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80',
  imageText: 'main image description',

};

const posts = [post1, post2, post3];

const theme = createTheme();

export default function Expenses() {
  return (
    <div style={{ backgroundImage: `url("https://i.pinimg.com/736x/04/f7/de/04f7de7633af090750cb1e54ed4006f6.jpg")`}} >
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <TrackHeader title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
    <Grid container spacing={5} sx={{ mt: 3 }}>
            <TrackMain title="About My Track Life" posts={posts}/>
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Follow me on all my social media accounts"
      />
    </ThemeProvider>
    </div>
  );
  }