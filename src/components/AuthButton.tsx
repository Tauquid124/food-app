import React from 'react';
import Button from '@mui/material/Button';
import { useAuth } from '../context/AuthContext';

const AuthButton: React.FC = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <Button
      variant="contained"
      color={isAuthenticated ? 'secondary' : 'primary'}
      onClick={isAuthenticated ? logout : login}
    >
      {isAuthenticated ? 'Logout' : 'Login'}
    </Button>
  );
};

export default AuthButton;
