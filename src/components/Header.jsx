import React from 'react';
import { Container, Typography,Grid, Button } from '@mui/material';




const Header = () => {
  return (
    <div>
      <Container maxWidth='sm' sx={{mt: 5}}>
        <Typography variant='h3' align='center' color='textPrimary' gutterBottom> 
            Engineering Wiki
        </Typography>
      </Container>

      <Grid container>
        <Grid item xs={6} md={6} lg={6} xl={6}>
          <Typography align='center'>
          Hi there! My name is [Your Name] and I am a [Your Job/Profession] based in [Your Location]. I have always been passionate about [Your Passion/Interests] and have been fortunate enough to turn my passions into my career. In my free time, you can find me [Your Hobbies/Activities] or spending time with my loved ones. I am excited to connect with others who share similar interests and to learn and grow together. Thank you for visiting my page and taking the time to learn a little bit more about me.
          </Typography>
        </Grid>
      </Grid>

      <Button
        onClick={() => {
          alert('clicked');
        }}
      >
        Click me
      </Button>


      <Grid>
        <Grid item>
          <Button variant='contained'>
            About
          </Button>
          <Button variant='outline'>
            Contact
          </Button>
        </Grid>
      </Grid>
    </div>
  
  )
}

export default Header;