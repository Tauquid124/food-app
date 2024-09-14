"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
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
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setData(response.data.foods);
        console.log(response.data.foods);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (food: Food) => {
    // Retrieve existing cart from localStorage
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // Add new food item to cart
    existingCart.push(food);
    
    // Save updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(existingCart));
    
    console.log(`Added ${food.title} to cart`);
  };

  return (
    <Container>
      <Grid container spacing={4}>
        {data.map((food) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={food.code}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={food.imageUrl}
                alt={food.title}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {food.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {food.description}
                </Typography>
                <Typography variant="h6" component="div">
                  ${food.price.toFixed(2)}
                </Typography>
                <Button variant="contained" onClick={() => handleAddToCart(food)}>Add to Cart</Button>
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
  );
};

export default Food;
