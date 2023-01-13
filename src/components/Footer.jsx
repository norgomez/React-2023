import React from 'react';
import { Container, Divider, Typography, Grid } from '@mui/material';


const Footer = () => {
  return (
    <>
      <Divider>Copyright 2022</Divider>
      <Container maxWidth='sm' sx={{mt: 5}}>

        <Typography variant='h6' align='center' color='textPrimary' >
          Footer Information.
        </Typography>

        <Grid container sx={{mt: 1}}  spacing={2}>
          
          

          <Grid item>
          Copyright [Your Name] [Current Year] | All Rights Reserved | [Contact Information]
          </Grid>



        </Grid>
      </Container>
    </>
  )
}

export default Footer;