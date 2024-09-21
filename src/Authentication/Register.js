import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  IconButton,
  Grid as Grid2,
} from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import CircleIcon from '@mui/icons-material/Circle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Swal from 'sweetalert2';
import { auth } from './firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { doc, setDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const minLength = 6;
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return password.length >= minLength && hasLowerCase && hasNumber && hasSpecialChar;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');
    setFullNameError('');

    let valid = true;

    if (!fullName) {
      setFullNameError('Full Name is required');
      valid = false;
    }

    if (!email) {
      setEmailError('Email is required');
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email');
      valid = false;
    }

    if (!password) {
      setPasswordError('Password is required');
      valid = false;
    } else if (!validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters long and include letters, numbers, and special characters');
      valid = false;
    }

    if (!confirmPassword) {
      setConfirmPasswordError('Confirm Password is required');
      valid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      valid = false;
    }

    if (valid) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;


        const userRef = doc(db, 'users', user.uid);
        await setDoc(userRef, {
          fullName: fullName,
          email: user.email,
        });

        Swal.fire({
          icon: 'success',
          title: 'Registration Successful',
          text: `Welcome, ${fullName}`,
          showConfirmButton: true,
        });

        console.log(`User registered with name: ${fullName}`);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: 'This Email Id Already Used',
          showConfirmButton: true,
        });
      }
    }
  };

  const theme = createTheme({
    typography: {
      fontFamily: `'Open Sans', sans-serif`,
    },
  });
  useEffect(() => {
    document.title = "Register";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          height: ['100%', '100%', '100vh'],
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: ['#fff', '#fff', '#C4D9E8'],
          zIndex: -5,
        }}
      >

        <Box
          sx={{
            position: 'absolute',
            backgroundColor: ['#fff', '#fff', '#113B79'],
            width: ['100%', '100%', '70%', '65%', '50%'],
            height: '100vh',
            zIndex: 1,
          }}
        ></Box>

        <Card
          sx={{
            width: ['100%', '100%', '90%', '80%', '65%'],
            borderRadius: ['0', '0', '40px'],
            padding: ['0', '0', '15px 10px', '25px 50px'],
            boxShadow: ['0', '0', 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'],
            overflow: 'hidden',
            zIndex: 3,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '20px',
            }}
          >
            <Typography variant="h4" fontWeight="bold" sx={{ color: '#113B79' }}>
              Register
            </Typography>
            <Button
              variant="outlined"
              color="inherit"
              href='/'
              sx={{ borderRadius: '20px', textTransform: 'none', fontWeight: 'bold', px: 4 }}
            >
              Login
            </Button>
          </Box>

          <CardContent>
            <Grid2 container spacing={0}>
              <Grid2
                item
                xs={12}
                md={6}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',

                }}
              >
                <img
                  src="./Assets/login.png"
                  alt="Login Illustration"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </Grid2>

              <Grid2
                item
                xs={12}
                md={6}
                sx={{
                  px: [0.5, 2, 2, 4],
                  py: [2, 5, 5, 5, 5],
                  order: { xs: 2, md: 1 },
                }}
              >
                <Box sx={{ display: ['flex'], justifyContent: 'space-between' }}>
                  <Typography gutterBottom sx={{ fontWeight: 'bold', letterSpacing: 0.2, fontSize: 'large' }}>
                    Create your account
                  </Typography>
                  <Box sx={{ my: 0.5, display: ['none', 'block'] }} >
                    <Typography variant="body2" align="center" sx={{ color: 'grey', fontWeight: 'bold' }}>
                      Login with
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.2 }}>
                      <IconButton sx={{ color: '#CCCCCC' }}>
                        <FacebookRoundedIcon sx={{ fontSize: '2rem' }} />
                      </IconButton>
                      <IconButton sx={{ color: '#CCCCCC' }}>
                        <LinkedInIcon sx={{ fontSize: '2rem' }} />
                      </IconButton>
                      <IconButton sx={{ color: '#CCCCCC' }}>
                        <GoogleIcon sx={{ fontSize: '1.8rem' }} />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>

                <TextField
                  label="Full Name"
                  fullWidth
                  margin="normal"
                  variant="filled"
                  autoComplete="off"
                  autoCapitalize="off"
                  sx={{
                    bgcolor: '#f5f5f5',
                    '& .MuiFilledInput-root': {
                      '&:before': { borderBottomColor: 'black' },
                      '&:after': { borderBottomColor: 'black' },
                    },
                    '& .MuiInputLabel-root': { color: 'grey' },
                    '& .MuiInputLabel-root.Mui-focused': { color: 'black' },
                  }}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  error={!!fullNameError}
                  helperText={fullNameError}
                />

                <TextField
                  label="Your Email"
                  fullWidth
                  margin="normal"
                  variant="filled"
                  autoComplete="off"
                  autoCapitalize="off"
                  sx={{
                    bgcolor: '#f5f5f5',
                    '& .MuiFilledInput-root': {
                      '&:before': { borderBottomColor: 'black' },
                      '&:after': { borderBottomColor: 'black' },
                    },
                    '& .MuiInputLabel-root': { color: 'grey' },
                    '& .MuiInputLabel-root.Mui-focused': { color: 'black' },
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={!!emailError}
                  helperText={emailError}
                />

                <TextField
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  fullWidth
                  margin="normal"
                  variant="filled"
                  sx={{
                    bgcolor: '#f5f5f5',
                    '& .MuiFilledInput-root': {
                      '&:before': { borderBottomColor: 'black' },
                      '&:after': { borderBottomColor: 'black' },
                    },
                    '& .MuiInputLabel-root': { color: 'grey' },
                    '& .MuiInputLabel-root.Mui-focused': { color: 'black' },
                  }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={!!passwordError}
                  helperText={passwordError}
                  InputProps={{
                    endAdornment: (
                      <IconButton onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    ),
                  }}
                />

                <TextField
                  label="Confirm Password"
                  type={showPassword ? 'text' : 'password'}
                  fullWidth
                  margin="normal"
                  variant="filled"
                  sx={{
                    bgcolor: '#f5f5f5',
                    '& .MuiFilledInput-root': {
                      '&:before': { borderBottomColor: 'black' },
                      '&:after': { borderBottomColor: 'black' },
                    },
                    '& .MuiInputLabel-root': { color: 'grey' },
                    '& .MuiInputLabel-root.Mui-focused': { color: 'black' },
                  }}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  error={!!confirmPasswordError}
                  helperText={confirmPasswordError}
                  InputProps={{
                    endAdornment: (
                      <IconButton onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    ),
                  }}
                />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: [5, 8], mt: 5 }}>
                  <Button
                    variant="outlined"
                    fullWidth
                    href="/"
                    sx={{
                      py: 1.5,
                      borderRadius: '25px',
                      borderColor: 'black',
                      color: 'black',
                      fontWeight: 'bold',
                      '&:hover': {
                        backgroundColor: '#FF4081',

                        borderColor: 'black',
                        color: '#fff',
                        borderColor: 'transparent'
                      },
                    }}
                  >
                    Login
                  </Button>

                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                      py: 1.5,
                      borderRadius: '25px',
                      backgroundColor: '#FF4081',
                      color: 'white',
                      fontWeight: 'bold',
                      '&:hover': {
                        backgroundColor: '#D13B71',
                        boxShadow: '0px 4px 12px rgba(255, 64, 129, 0.3)',
                      },
                    }}
                    onClick={handleRegister}
                  >
                    Register
                  </Button>
                </Box>
              </Grid2>
            </Grid2>
          </CardContent>
          <Box
            sx={{
              display: ['block', 'flex'],
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: ['5px', '16px'],
              backgroundColor: '#fff',
            }}
          >
            <Box sx={{ display: 'flex', gap: 5, my: 1, justifyContent: 'center' }}>
              <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'grey', display: ['none', 'block'] }}>
                © Copyright @Maha's 2024
              </Typography>
              <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'grey' }}>
                Terms & Conditions
              </Typography>
              <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'grey' }}>
                Privacy Policy
              </Typography>
              <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'grey' }}>
                Help
              </Typography>
            </Box>
            <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'grey', display: ['block', 'none'], textAlign: 'center' }}>
              © Copyright @Maha's 2024
            </Typography>
            <Box sx={{ display: ['none', 'flex'], justifyContent: 'center' }}>
              <IconButton sx={{ color: '#FF34A0' }}>
                <CircleIcon sx={{ fontSize: '0.7rem' }} />
              </IconButton>
              <IconButton sx={{ color: '#5A94CF' }}>
                <CircleIcon sx={{ fontSize: '0.7rem' }} />
              </IconButton>
              <IconButton sx={{ color: '#041960' }}>
                <CircleIcon sx={{ fontSize: '0.7rem' }} />
              </IconButton>
            </Box>
          </Box>
        </Card>
      </Box>
    </ThemeProvider>
  );
};

export default Register;
