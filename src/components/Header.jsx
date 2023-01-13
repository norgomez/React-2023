import React from 'react'
import { Grid, Typography } from '@mui/material'


function Header() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography>
          "Hello, my name is [Name] and I am a [profession/field of study]. I am passionate about [hobbies/interests] and have experience in [relevant skills/experiences]. I am always looking to learn and grow in my career and personal life. Thanks for stopping by!"
          </Typography>

        </Grid>

        <Grid item xs={6}>
        <Typography>
          "Hello, my name is [Name] and I am a [profession/field of study]. I am passionate about [hobbies/interests] and have experience in [relevant skills/experiences]. I am always looking to learn and grow in my career and personal life. Thanks for stopping by!"
          </Typography>
        </Grid>
  
      </Grid>


    </>
  )
}

export default Header