import React from 'react'
import { Box, CardMedia, } from '@mui/material';


export const Hero = () => {
  return (
    <Box sx={{width:'100%',height:"795px",display:"flex"}}>
    <CardMedia
      component="img"  
      image="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg" // Replace with your image URL
    
    />
</Box>
    
  )  
}
