import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import Footer from './Footer';
import Cards from "./Cards"


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
  title: 'A Blog About the Life of St.Clair...',
  description:
    "Hello! I am St.Clair Johnson and I made this blog to highlight my interests, hobbies, and things that make me chuckle. I am 16 years old and I am a rising senior in high school at the time this blog was created and i plan on studying computer science in college and maybe getting a career in software development. Click around and learn more about me!",
  image: 'https://thumbs.dreamstime.com/b/light-green-wallpaper-background-repeated-figures-patterns-abstract-modern-print-geometric-shapes-light-green-wallpaper-183396925.jpg',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const cards =[
  {
    
  }
]

const theme = createTheme();

export default function Blog() {
  return (
    <div style={{backgroundImage: 'url("https://wallpapers.com/images/high/3d-green-geometric-shapes-hqfoouame09gxmf9.jpg")'}}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {cards.map((post) => (
              <Cards key={post.title} post={post} />
            ))}
          </Grid>
    <Grid container spacing={5} sx={{ mt: 3 }}>
    
          </Grid>
        </main>
      </Container>
      <Footer
        className="footer"
        title="Footer"
        description="Follow me on all my social media accounts"
      />
    </ThemeProvider>
    </div>
  );
}