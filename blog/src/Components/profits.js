import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MemesHeader from './MemesHeader';
import MemesMain from './MemesMain';
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

const posts = [post1, post2, post3];

const theme = createTheme();

export default function Profits() {
  return (
    <div style={{ backgroundImage: `url("https://i.pinimg.com/originals/3e/3c/b7/3e3cb7be3fc4a4593b5fb0139ca227de.png")`}} >
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <MemesHeader title="Blog" sections={sections} />
        <main>
    <Grid container spacing={5} sx={{ mt: 3 }}>
            <MemesMain title="About My Track Life" posts={posts}/>
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