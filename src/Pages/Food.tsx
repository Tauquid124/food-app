"use client";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, Grid, Button, Box } from "@mui/material";
import { Container } from "@mui/system";
import { useRouter } from "next/router";
import Link from "next/link";



interface Food {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  foodTags: string;
  code: number;
  isAvailable: boolean;
  category: string;
  rating: number;
}
const Food = () => {
  const [data, setData] = useState<Food[]>([]);
  const router = useRouter();

  const apiUrl = "http://localhost:8080/api/v1/food/getall";

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setData(response.data.foods); // Update state with fetched data
        console.log(response.data.foods);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once on mount

  const handleAddToCart = (foods: Food) => {
    // You can implement cart logic here or navigate to the cart page
     router.push('/cart');
    console.log(`Added ${foods.title} to cart`);
  };
  
  return (
    <Container>
      <Grid container spacing={4}>
        {data.map((foods) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={foods.code}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={foods.imageUrl}
                alt={foods.title}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {foods.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {foods.description}
                </Typography>
                <Typography variant="h6" component="div">
                  ${foods.price.toFixed(2)}
                </Typography>
                <Button variant="contained"onClick={() => handleAddToCart(foods)} >Add to Cart</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}

      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Link href="/Cart">
     <Button variant="contained">Go to Cart</Button>
   </Link>
        </Box>
    </Container>
     
  )
};

export default Food;
