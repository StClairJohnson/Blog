import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InterestHeader from './InterestHeader';
import MainFeaturedPost from './MainFeaturedPost';
import InterestMain from './InterestMain';
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
  title: 'My Favorite Cartoon and Videogame',
  description:
    "Here is where I discuss my favorite cartoons and videogames and give a brief explanation of them. Read the article below to find out more!",
  image: 'https://wallpaperaccess.com/full/2098172.jpg',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const posts = [post1, post2, post3];

const theme = createTheme();


export default function Invoices () {
  return (
    <div style={{ backgroundImage: `url("https://wallpaperaccess.com/full/1201180.jpg")`}}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <InterestHeader title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
    <Grid container spacing={5} sx={{ mt: 3 }}>
    
            <InterestMain title="From the firehose" posts={posts}/>
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