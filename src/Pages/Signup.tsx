"use client";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [answer,setAnswer]= useState("");

  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password, username, address, phone,answer }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // Optional: Store token in localStorage or a cookie
        // localStorage.setItem('token', data.token);

        // Redirect to home page
        router.push("/");
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An unexpected error occurred");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 8,
        }}
      >
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="Username"
            label="Username"
            name="Username"
            autoComplete="Username"
            autoFocus
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="Address"
            label="Address"
            id="Address"
            autoComplete="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="phonenumber"
            label="phonenumber"
            id="phonenumber"
            autoComplete="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
             <TextField
            margin="normal"
            required
            fullWidth
            name="answer"
            label="enter yuor childhood teacher name"
            id="answer"
            autoComplete="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <Link href="/Reset">Forget password? Reset</Link>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Link href="/Login">Already have an account? Login</Link>
        </Box>
      </Box>
      {error && <p>{error}</p>}
    </Container>
  );
}
