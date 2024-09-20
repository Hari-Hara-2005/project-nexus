import React, { useState } from 'react';
import { Box, Button, Card, CardContent, Typography, Paper, TextField, InputLabel, Select, MenuItem, FormControl } from "@mui/material";
import { styled } from '@mui/material/styles'
import Navbar from "../Components/Navbar"
import ProductSlider from "../Components/ProductSlider"
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import BestProductSlider from "../Components/BestProductSlider";
import Grid from '@mui/material/Grid2';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import OurProduct from "../Components/OurProduct";
import { reasons, slideData } from "../utility/data";
import CustomerReview from '../Components/CustomerReview';
import Footer from '../Components/Footer';

const Home = () => {
  const theme = createTheme({
    typography: {
      fontFamily: `'Jost', sans-serif`,
    },
  });

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#e25b00',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

  const [person, setperson] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '',
    date: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setperson(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    // Check for required fields
    for (const [key, value] of Object.entries(formData)) {
      if (!value) {
        newErrors[key] = 'This field is required';
      }
    }

    if (Object.keys(newErrors).length === 0) {
      // Handle successful submission here
      console.log('Form submitted', formData);
    } else {
      setErrors(newErrors);
    }
  };

  const CustomTextField = ({ label, required = false }) => (
    <TextField
      label={label}
      required={required}
      variant="filled"
      fullWidth
      InputProps={{
        disableUnderline: true,
      }}
      sx={{
        bgcolor: '#f5f5f5',
        '& .MuiFilledInput-root': {
          borderBottom: '1px solid black',
          '&:hover': {
            borderBottom: '1px solid black',
          },
          '&.Mui-focused': {
            borderBottom: '2px solid black',
          },
        },
        '& .MuiInputLabel-root': {
          color: 'grey',
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: 'black',
        },
      }}
    />
  );
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            backgroundImage: `url(${"/Assets/background_img.png"})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height:['120vh','100vh'],
            width: '100%',
          }}
        > <Navbar color="#fff" />
          <ProductSlider />
        </Box>
        <Box sx={{ px: [1.5, 5, 5, 4, 10] }}>
          <Box sx={{ py: [5, 10], display: 'grid', gap: 2, justifyContent: 'center', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(8, 2fr)' } }}>
            {slideData.map((slide, index) => (
              <Box key={index} >
                <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
                  <img src={slide.imgSrc} alt={slide.title} style={{ width: '50%' }} />
                </Box>
                <Typography sx={{ color: 'c7c7c7', textAlign: 'center', fontSize: '18px', fontWeight: 500 }}>{slide.title}</Typography>
              </Box>))};
          </Box>
          <Box>
            <Box>
              <Typography sx={{ fontSize: ['30px', '46px'], fontWeight: 600, color: '#010f1c', textAlign: 'center', }}>Best Selling Items</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography sx={{ fontSize: '16px', color: '#A0A5AA', textAlign: 'center', lineHeight: 1.8, width: '95%',fontWeight:'500' }}>Inspect background group content align export move. Background prototype arrange team inspect clip.Vector comment link frame link group.</Typography>
              </Box>
            </Box>
            <Box>
              <BestProductSlider />
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1, px: [1, 4], py: [10, 15] }}>
            <Grid container spacing={2.5}>
              {/* First Box: 50% Off Promo */}
              <Grid item xs={12} md={8}>
                <Box
                  sx={{
                    backgroundImage: 'url("/Assets/bg image-3.png")',
                    backgroundPosition: 'right bottom',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100%',
                    bgcolor: '#E25B00',
                    height: ['430px', '580px'],
                    borderRadius: ['10px', '15px'],
                    padding: [4, 10],
                    color: '#fff',
                    display: 'flex',
                    alignItems: ['top', 'center'],
                  }}
                >
                  <Box sx={{ width: { xs: '100%', md: '650px' } }}>
                    <Typography sx={{ fontWeight: 'semi-bold', color: '#FFCC40', fontFamily: 'Anton, sans-serif', letterSpacing: 1, fontSize: { xs: '40px', md: '100px' } }}>
                      50% off
                    </Typography>
                    <Typography sx={{ fontWeight: 'semi-bold', color: '#fff', fontFamily: 'Anton, sans-serif', letterSpacing: 1, fontSize: { xs: '24px', md: '36px' }, textTransform: 'uppercase' }}>
                      A sweet and savory twist, served with chipotle mayo
                    </Typography>
                    <Button
                      href="/cart"
                      variant="contained"
                      endIcon={<ShoppingBagOutlinedIcon />}
                      sx={{
                        bgcolor: "#FFCC40",
                        textTransform: "none",
                        color: "#000",
                        fontWeight: "bold",
                        borderRadius: "50px",
                        border: "2px solid #FFCC40",
                        px: { xs: 2, md: 3 },
                        mt: [3, 8],
                        "&:hover": {
                          bgcolor: "transparent",
                          color: "#FFCC40",
                        },
                      }}
                    >
                      Order Now
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    backgroundImage: 'url("/Assets/bg image-2.png")',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: ['260px', '580px'],
                    borderRadius: ['10px', '15px'],
                    padding: [4, 7],
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'end',
                  }}
                >
                  <Box>
                    <Typography sx={{ fontWeight: 'semi-bold', color: '#FFCC40', fontFamily: 'Anton, sans-serif', letterSpacing: 1, fontSize: '20px', textTransform: 'uppercase' }}>
                      Bite into joy
                    </Typography>
                    <Typography sx={{ fontWeight: 'semi-bold', color: '#fff', fontFamily: 'Anton, sans-serif', letterSpacing: 1, fontSize: ['40px', '70px'], lineHeight: 1.2 }}>
                      Burger TNC Where Every Offer Delights!
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={4} sx={{ width: '100%' }}>
                <Box
                  sx={{
                    backgroundImage: 'url("/Assets/delivery bike.png")',
                    backgroundPosition: 'left bottom',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '80%',
                    bgcolor: '#FEAC02',
                    height: ['500px', '580px'],
                    borderRadius: '15px',
                    padding: 5,
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'top',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 'semi-bold',
                        color: '#fff',
                        fontFamily: 'Anton, sans-serif',
                        letterSpacing: 1,
                        lineHeight: 1.3,
                        fontSize: { xs: '40px', md: '60px' },
                        textTransform: 'uppercase',
                        textAlign: 'right',
                      }}
                    >
                      Super-Fast<br /> Delivery <br />for Online<br /> Orders!
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={8} sx={{ width: '100%' }}>
                <Box
                  sx={{
                    backgroundImage: 'url("/Assets/bg image-1.png")',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: ['450px', '580px'],
                    borderRadius: '15px',
                    padding: [4, 7],
                    color: '#fff',
                    display: 'flex',
                    alignItems: ['top', 'center'],
                  }}
                >
                  <Box sx={{ width: { xs: '100%', md: '650px' } }}>
                    <Typography
                      sx={{
                        fontWeight: 'semi-bold',
                        color: '#E25B00',
                        fontFamily: 'Anton, sans-serif',
                        letterSpacing: 1,
                        fontSize: { xs: '30px', md: '70px' },
                        textTransform: 'uppercase',
                      }}
                    >
                      Spicy
                    </Typography>
                    <Typography sx={{ fontWeight: 'semi-bold', color: '#fff', fontFamily: 'Anton, sans-serif', letterSpacing: 1, fontSize: { xs: '30px', md: '50px' }, textTransform: 'uppercase' }}>
                      Limited-Time Special
                    </Typography>
                    <Typography sx={{ fontWeight: 'semi-bold', color: '#fff', fontFamily: 'Anton, sans-serif', letterSpacing: 1, fontSize: { xs: '24px', md: '36px' }, textTransform: 'uppercase' }}>
                      Double the Delight!
                    </Typography>
                    <Typography sx={{ fontWeight: 'semi-bold', color: '#FFCC40', fontFamily: 'Anton, sans-serif', letterSpacing: 1, fontSize: { xs: '36px', md: '44px' }, textTransform: 'uppercase', py: 4 }}>
                      50% off
                    </Typography>
                    <Button
                      href="/cart"
                      variant="contained"
                      endIcon={<ShoppingBagOutlinedIcon />}
                      sx={{
                        bgcolor: "#E25B00",
                        textTransform: "none",
                        color: "#000",
                        fontWeight: "bold",
                        borderRadius: "50px",
                        border: "2px solid #E25B00",
                        px: { xs: 2, md: 3 },
                        "&:hover": {
                          bgcolor: "transparent",
                          color: "#E25B00",
                        },
                      }}
                    >
                      Order Now
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Box>
              <Typography sx={{ fontSize: ['30px', '46px'], fontWeight: 600, color: '#010f1c', textAlign: 'center' }}>Best Selling Items</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography sx={{ fontSize: '16px', color: '#A0A5AA', textAlign: 'center', lineHeight: 1.8, width: '95%',fontWeight:'500' }}>Inspect background group content align export move. Background prototype arrange team inspect clip.Vector comment link frame link group.</Typography>
              </Box>
            </Box>
            <Box>
              <OurProduct />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: '#1A1A1A',
            height: ['auto', '100vh'],
            display: 'flex',
            justifyContent: 'center',
            alignItems: ['middle', 'center'],
            backgroundImage: ['none', 'url("/Assets/chicken-2.png")'],
            backgroundPosition: 'right bottom',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '28%',
            py: 15
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: [2, 4, 10], // Adjust gap on different screen sizes
              flexWrap: 'wrap',
              px: [2, 4], // Add padding for smaller screens
            }}
          >
            <Box
              sx={{
                bgcolor: '#fff',
                width: ['100%', '100%', '680px'], // Full width on small screens, custom size on larger screens
                height: ['auto', 'auto', '729px'], // Adjust height for responsiveness
                p: [2, 5, 8], // Responsive padding
                mb: [4, 0], // Add margin for small screens
              }}
            >
              <Typography
                sx={{
                  mb: [4, 6, 8], // Adjust margin bottom for different screen sizes
                  fontWeight: '600',
                  fontSize: ['18px', '22px', '24px'], // Responsive font size
                  width: ['100%', '80%', '65%'], // Responsive width
                }}
              >
                Seamless Reservations for Unforgettable Dining Moments
              </Typography>
              <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', gap: [2, 3, 5], flexDirection: ['column', 'row'] }}>
                  <CustomTextField label="Your Name" required fullWidth />
                  <CustomTextField label="Your Email" required fullWidth />
                </Box>
                <Box sx={{ display: 'flex', gap: [2, 3, 5], mt: [3, 4], flexDirection: ['column', 'row'] }}>
                  <CustomTextField label="Phone Number" required fullWidth />
                  <CustomTextField label="Reservation Date" required fullWidth />
                </Box>
                <Box sx={{ display: 'flex', gap: [2, 3, 5], mt: [3, 4], flexDirection: ['column', 'row'] }}>
                  <CustomTextField label="Reservation Time" required fullWidth />
                  <FormControl fullWidth variant="filled">
                    <InputLabel id="person-label">Person</InputLabel>
                    <Select
                      labelId="person-label"
                      id="person-select"
                      value={person}
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value={1}>1 Person</MenuItem>
                      <MenuItem value={2}>2 Person</MenuItem>
                      <MenuItem value={3}>3 Person</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={{ mt: [3, 4] }}>
                  <TextField
                    label="Your Message"
                    name="message"
                    multiline
                    rows={4}
                    variant="filled"
                    fullWidth
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    error={!!errors.message}
                    helperText={errors.message}
                    InputProps={{
                      disableUnderline: true,
                    }}
                    sx={{
                      bgcolor: '#f5f5f5',
                      '& .MuiFilledInput-root': {
                        borderBottom: '1px solid black',
                        '&:hover': {
                          borderBottom: '1px solid black',
                        },
                        '&.Mui-focused': {
                          borderBottom: '2px solid black',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'grey',
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: 'black',
                      },
                    }}
                  />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', my: [5, 5] }}>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    sx={{
                      bgcolor: "#FFB700",
                      textTransform: "none",
                      color: "#000",
                      fontWeight: "bold",
                      border: "1px solid #FFB700",
                      py: 1.5,
                      "&:hover": {
                        bgcolor: "transparent",
                        borderColor: '#282828',
                      },
                    }}
                  >
                    Request Reservation
                  </Button>
                </Box>
              </form>
            </Box>

            <Box sx={{ width: ['100%', '100%', '594px'], textAlign: 'left' }}> {/* Full width on small screens */}
              <Typography
                sx={{
                  color: '#FFB700',
                  fontWeight: 'bold',
                  fontSize: ['20px', '24px'], // Responsive font size
                  mb: 1,
                }}
              >
                Reserve your table
              </Typography>
              <Typography
                sx={{
                  color: '#fff',
                  fontWeight: '600',
                  lineHeight: 1.3,
                  fontSize: ['32px', '40px', '46px'], // Responsive font size
                  mb: [3, 4],
                }}
              >
                Elevate Your Dining Experience with a Reserved Table at FastFood TNC
              </Typography>
              <Typography
                sx={{
                  fontSize: '16px',
                  lineHeight: '28px',
                  color: '#C7C7C7',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ px: [4, 5, 5, 4, 10] }}>
          <Box sx={{ py: [7,10 ]}}>
            <Box sx={{ mb: 8 }}>
              <Typography sx={{ fontSize: ['30px', '46px'], fontWeight: 600, color: '#010f1c', textAlign: 'center' }}>Why Choose Fastfood TNC?</Typography>
              <Typography sx={{ fontSize: '16px', color: '#A0A5AA', textAlign: 'center', lineHeight: 1.8 ,fontWeight:'500'}}>Unmatched Flavors, Quality, and Community Connection.</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', columnGap: 14 }}>
              {reasons.map((reason, index) => (
                <Box key={index} sx={{ mb: [8, 0] }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: [2, 5] }}>
                    <img src={reason.icon} alt={reason.title} style={{ width: '30%' }} />
                  </Box>
                  <Box sx={{ width: ['100%', '264px'], height: ['100%', '228px'], textAlign: 'center' }}>
                    <Typography sx={{ fontSize: '18px', mb: 2, fontWeight:['600','500'] }}>
                      {reason.title}
                    </Typography>
                    <Typography sx={{ fontSize: '16px', color: '#8A9197',fontWeight:'500', lineHeight: 1.6 }}>
                      {reason.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        <Box sx={{ bgcolor: '#1A1A1A', pt: 5 }}>
          <Box>
            <Typography sx={{ fontSize: '46px', fontWeight: 600, color: '#010f1c', textAlign: 'center', color: '#fff' }}>Testimonials</Typography>
            <Typography sx={{ fontSize: '16px', color: '#A0A5AA', textAlign: 'center', lineHeight: 1.8 ,fontWeight:'500'}}>Elevating Your Dining Experience</Typography>
          </Box>
          <CustomerReview />
        </Box>
        {/* <Box>
          <Footer />
        </Box> */}
      </ThemeProvider>
    </>
  )
}

export default Home
