"use client";
import { Box, Typography, Card, CardMedia, Grid } from '@mui/material';
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Category {
  title: string;
  imgUrl: string;
}

export const Cards = () => {
  const [data, setData] = useState<Category[]>([]);
  const apiUrl = "http://localhost:8080/api/v1/category/getAll";

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setData(response.data.categories); // Update state with fetched data
        console.log(response.data.categories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <Box 
    sx={{
      marginTop: { xs: '4rem', sm: '6.75rem' }, // Adjust margin-top for different screen sizes
      gap: { xs: '2rem', sm: '3.38rem' },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh',
      width: '100%',
    }}
  >
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
        maxWidth: { xs: '100%', sm: '80.63rem' }, // Adjust maxWidth for different screen sizes
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Typography
        variant="h2"
        sx={{ 
          color: '#000000', 
          fontSize: { xs: '2rem', sm: '4.00rem' }, // Adjust fontSize for different screen sizes
          fontWeight: 400 
        }}
      >
        What’s on your mind
      </Typography>
    </Box>
    <Box
      sx={{
        padding: { xs: '0.5rem', sm: '1.00rem' }, // Adjust padding for different screen sizes
        borderRadius: '20px',
        backgroundColor: '#f1bfbf',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
        gap: { xs: '0.5rem', sm: '1.00rem' },
        width: { xs: '95%', sm: '85%' }, // Adjust width for different screen sizes
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1.00rem',
                }}
              >
                <Link href={'/Food'}>
                  <Card
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '1.00rem',
                      backgroundColor: '#f1bfbf',
                    }}
                  >
                    <CardMedia
                      component="img"
                      alt={item.title}
                      src={item.imgUrl}
                      sx={{
                        borderRadius: '50%',
                        width: { xs: '150px', sm: '200px' }, // Adjust width for different screen sizes
                        height: { xs: '75px', sm: '100px' }, // Adjust height for different screen sizes
                      }}
                    />
                    <Typography
                      sx={{
                        color: '#000000',
                        fontSize: { xs: '1rem', sm: '1.25rem' }, // Adjust fontSize for different screen sizes
                        fontWeight: 400,
                        paddingLeft: '1.00rem',
                        textAlign: 'center',
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Card>
                </Link>
              </Box>
            </Grid>
          ))
        ) : (
          <Typography>No data available</Typography>
        )}
      </Grid>
    </Box>
  </Box>
  );
};
