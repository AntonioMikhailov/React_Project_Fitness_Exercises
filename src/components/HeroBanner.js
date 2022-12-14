import React from 'react'
import heroBanner from '../assets/images/banner.jpg'
import {Box,  Typography, Button} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
export default function HeroBanner() {
  const theme = createTheme({
    palette: {
      red: {
       main: '#000',
      },
    },
  }); 
  return (
   <Box sx={{
    mt: {lg: '212px', xs: '70px'},
    ml:{sm: '50px'}
   }} position='relative' p='20px'  maxWidth='1500px'>
<Typography color='#ff2625' fontWeight='600' fontSize='26px'>
  Fitness Club
</Typography>
<Typography className={'s1-title'}   fontWeight='700'
sx={{fontSize: {lg: '84px', xs: '40px'}}}
mb='23px' mt='30px' lineHeight='90%'
>
<span>No</span> Pain – <br /><span>No</span> Gain
</Typography>
<Typography fontSize='22px' lineHeight={'35px'} mb={4}>
Check out most effective exercices
</Typography>
 <ThemeProvider theme={theme}>
<NavLink to="/exercises">
<Button 
 variant='contained'   sx={{backgroundColor: '#ff2625', }} >Explore Exercises</Button>
</NavLink>
</ThemeProvider>
<Typography 
fontWeight='700'
color='#ff2625'
sx={{
  opacity: 0.1,
  display: {lg: 'block', xs: 'none'}
}}
fontSize='200px'
>
  Exercise
</Typography>
<img src={heroBanner} alt="img"  className='hero-banner-img' />
</Box>
  )
}
