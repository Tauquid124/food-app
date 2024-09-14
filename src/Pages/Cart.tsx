"use client";
import React, { useState, useEffect } from "react";
import { Container, Typography, Box, Button, Grid, Card, CardContent, CardMedia } from "@mui/material";
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

const Cart = () => {
  const [cart, setCart] = useState<Food[]>([]);

  useEffect(() => {
    // Retrieve cart data from localStorage
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(storedCart);
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Cart</Typography>
      <Grid container spacing={4}>
        {cart.map((food: Food) => (
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
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
     <Link href={'/Food'}>  <Button variant="contained">Back</Button></Link> 
      </Box>
    </Container>
  );
};

export default Cart;
