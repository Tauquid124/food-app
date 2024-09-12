
"use client";
import React from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Reset = () => {
    const [email, setEmail] = useState("");
    const [answer,setAnswer]=useState("");
    const [newpassword, setNewPassword] = useState("");
    const [error, setError] = useState('')
    const router = useRouter();
  

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')
    
        try {
            const response = await fetch('http://localhost:8080/api/v1/user/resetPassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email,answer,newpassword }),
            })
            const result = await response.json()
    
            if (response.ok && result.success) {
                // Redirect to home page
                router.push('/')
            } else {
                setError('Invalid email or password')
            }
        } catch (err) {
            console.error(err)
            setError('Something went wrong. Please try again later.')
        }
    }
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
        Reset Password
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
          name="answer"
          label="Enter your childhood teacher name"
          type="answer"
          id="answer"
          autoComplete="answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="newpassword"
          label="Enter new-Password"
          type="newpassword"
          id="newpassword"
          autoComplete="new-password"
          value={newpassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Reset
        </Button>
        <Link href="/Signup">Back to SignUp page? Sign Up</Link>
      </Box>
    </Box>
    {error && <p>{error}</p>}
  </Container>
  )
}


export default Reset;