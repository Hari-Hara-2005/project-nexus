import React, { useEffect, useState } from 'react';
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
import { Link } from 'react-router-dom';

const Home = () => {
  const theme = createTheme({
    typography: {
      fontFamily: `'Jost', sans-serif`,
    },
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 600 && window.innerWidth < 960);
  const handleResize = () => {
    setIsMobile(window.innerWidth < 600);
    setIsTablet(window.innerWidth >= 600 && window.innerWidth < 960);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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


    for (const [key, value] of Object.entries(formData)) {
      if (!value) {
        newErrors[key] = 'This field is required';
      }
    }

    if (Object.keys(newErrors).length === 0) {

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
  const ScrollToTop = () => {
    window.scrollTo(0, 0);
  };
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
            height: ['120vh', '100vh', '100vh'],
            width: '100%',
          }}
        >
          <Navbar color="#fff" />
          <ProductSlider />
        </Box>
        <Box sx={{ px: [1.5, 1.5, 1, 4, 10] }}>
          <Box sx={{ py: [5, 5, 5, 10], display: 'grid', gap: 2, justifyContent: 'center', gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(4, 1fr)', 'repeat(8 , 2fr)', 'repeat(8, 2fr)'] }}>
            {slideData.map((slide, index) => (
              <Link to={slide.link} style={{ textDecoration: "none",color: 'grey' }} onClick={ScrollToTop}>
                <Box key={index} >
                  <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }} data-aos="zoom-in" data-aos-duration="2000" >
                    <img src={slide.imgSrc} alt={slide.title} style={{ width: '50%' }} />
                  </Box>
                  <Typography sx={{ color: 'grey', textAlign: 'center', fontSize: '18px', fontWeight: 500 }}>{slide.title}</Typography>
                </Box>
              </Link>))};
          </Box>
          <Box>
            <Box>
              <Typography data-aos="zoom-in-up" data-aos-duration="2000" sx={{ fontSize: ['30px', '46px'], fontWeight: 600, color: '#010f1c', textAlign: 'center', }}>Best Selling Items</Typography>
              <Box data-aos="zoom-in-up" data-aos-duration="2500" sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography sx={{ fontSize: '16px', color: '#A0A5AA', textAlign: 'center', lineHeight: 1.8, width: ['95%','95%', '50%'], fontWeight: '500' }}>Inspect background group content align export move. Background prototype arrange team inspect clip.Vector comment link frame link group.</Typography>
              </Box>
            </Box>
            <Box>
              <BestProductSlider />
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1, px: [1, 1, 2, 4], py: [10, 10, 10, 15] }}>
            <Grid container spacing={2.5}>
              <Grid item size={{ xs: 12, md: 8 }}>
                <Box
                  data-aos={isMobile || isTablet ? "fade-up-right" : "fade-right"}
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="2000"
                  sx={{
                    backgroundImage: 'url("/Assets/bg image-3.png")',
                    backgroundPosition: 'right bottom',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100%',
                    bgcolor: '#E25B00',
                    height: ['430px', '500px', '500px', '580px'],
                    borderRadius: ['10px', '10px', '10px', '15px'],
                    padding: [4, 4, 5, 10],
                    color: '#fff',
                    display: 'flex',
                    alignItems: ['top', 'top', 'top', 'center'],
                  }}
                >
                  <Box sx={{ width: { xs: '100%', md: '650px' } }}>
                    <Typography sx={{ fontWeight: 'semi-bold', color: '#FFCC40', fontFamily: 'Anton, sans-serif', letterSpacing: 1, fontSize: ['40px', '60px', '100px'] }}>
                      50% off
                    </Typography>
                    <Typography sx={{ fontWeight: 'semi-bold', color: '#fff', fontFamily: 'Anton, sans-serif', letterSpacing: 1, fontSize: ['24px', '40px', '36px'], textTransform: 'uppercase' }}>
                      A sweet and savory twist, served with chipotle mayo
                    </Typography>
                    <Button
                      href="/pizza"
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
              <Grid item size={{ xs: 12, md: 4 }}>
                <Box
                  data-aos={isMobile || isTablet ? "fade-down-right" : "fade-left"}
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="2000"
                  sx={{
                    backgroundImage: 'url("/Assets/bg image-2.png")',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: ['260px', '400px', '500px', '580px'],
                    borderRadius: ['10px', '10px', '10px', '15px'],
                    padding: [4, 4, 4, 7],
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'end',
                  }}
                >
                  <Box>
                    <Typography sx={{ fontWeight: 'semi-bold', color: '#FFCC40', fontFamily: 'Anton, sans-serif', letterSpacing: 1, fontSize: '20px', textTransform: 'uppercase' }}>
                      Bite into joy
                    </Typography>
                    <Typography sx={{ fontWeight: 'semi-bold', color: '#fff', fontFamily: 'Anton, sans-serif', letterSpacing: 1, fontSize: ['40px', '40px', '55px', '70px'], lineHeight: 1.2 }}>
                      Burger TNC Where Every Offer Delights!
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item size={{ xs: 12, md: 4 }} sx={{ width: '100%' }}>
                <Box
                  data-aos={isMobile || isTablet ? "fade-up" : "fade-right"}
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="2000"
                  sx={{
                    backgroundImage: 'url("/Assets/delivery bike.png")',
                    backgroundPosition: 'left bottom',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: ['80%', '50%', '80%'],
                    bgcolor: '#FEAC02',
                    height: ['500px', '500px', '500px', '580px'],
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
                        fontSize: ['40px', '50px', '50px', '60px'],
                        textTransform: 'uppercase',
                        textAlign: 'right',
                      }}
                    >
                      Super-Fast<br /> Delivery <br />for Online<br /> Orders!
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item size={{ xs: 12, md: 8 }} sx={{ width: '100%' }}>
                <Box
                  data-aos={isMobile || isTablet ? "fade-up-right" : "fade-left"}
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="2000"
                  sx={{
                    backgroundImage: 'url("/Assets/bg image-1.png")',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: ['450px', '450px', '500px', '580px'],
                    borderRadius: '15px',
                    padding: [4, 4, 4, 7],
                    color: '#fff',
                    display: 'flex',
                    alignItems: ['top', 'top', 'top', 'center'],
                  }}
                >
                  <Box sx={{ width: { xs: '100%', md: '650px' } }}>
                    <Typography
                      sx={{
                        fontWeight: 'semi-bold',
                        color: '#E25B00',
                        fontFamily: 'Anton, sans-serif',
                        letterSpacing: 1,
                        fontSize: ['30px', '50px', '70px'],
                        textTransform: 'uppercase',
                      }}
                    >
                      Spicy
                    </Typography>
                    <Typography sx={{ fontWeight: 'semi-bold', color: '#fff', fontFamily: 'Anton, sans-serif', letterSpacing: 1, fontSize: ['30px', '40px', '50px'], textTransform: 'uppercase' }}>
                      Limited-Time Special
                    </Typography>
                    <Typography sx={{ fontWeight: 'semi-bold', color: '#fff', fontFamily: 'Anton, sans-serif', letterSpacing: 1, fontSize: ['24px', '30px', '36px'], textTransform: 'uppercase' }}>
                      Double the Delight!
                    </Typography>
                    <Typography sx={{ fontWeight: 'semi-bold', color: '#FFCC40', fontFamily: 'Anton, sans-serif', letterSpacing: 1, fontSize: ['36px', '40px', '44px'], textTransform: 'uppercase', py: 4 }}>
                      50% off
                    </Typography>
                    <Button
                      href="/pizza"
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
              <Typography data-aos="zoom-in-up" data-aos-duration="2000" sx={{ fontSize: ['30px', '46px'], fontWeight: 600, color: '#010f1c', textAlign: 'center' }}>Best Selling Items</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography data-aos="zoom-in-up" data-aos-duration="2500" sx={{ fontSize: '16px', color: '#A0A5AA', textAlign: 'center', lineHeight: 1.8, width: ['95%','95%','50%'], fontWeight: '500' }}>Inspect background group content align export move. Background prototype arrange team inspect clip.Vector comment link frame link group.</Typography>
              </Box>
            </Box>
            <Box sx={{ py: [1, 1, 1, 1, 5] }}>
              <OurProduct />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: '#1A1A1A',
            height: 'auto',
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
              gap: [2, 4, 10],
              flexWrap: 'wrap',
              px: [2, 4],
            }}
          >
            <Box
              sx={{
                bgcolor: '#fff',
                width: ['100%', '100%', '100%', '680px'],
                height: ['auto', 'auto', 'auto', '729px'],
                p: [2, 5, 8],
                mb: [4, 0],
              }}
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Typography
                sx={{
                  mb: [4, 6, 8],
                  fontWeight: '600',
                  fontSize: ['18px', '22px', '24px'],
                  width: ['100%', '80%', '65%'],
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

            <Box
              data-aos={isMobile || isTablet ? "fade-up" : "fade-left"}
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1500"
              sx={{ width: ['100%', '100%', '100%', '594px'], textAlign: 'left' }}>
              <Typography
                sx={{
                  color: '#FFB700',
                  fontWeight: 'bold',
                  fontSize: ['20px', '24px'],
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
                  fontSize: ['32px', '40px', '46px'],
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
        <Box sx={{ px: [4, 4, 5, 4, 10] }}>
          <Box sx={{ py: [7, 7, 7] }}>
            <Box sx={{ mb: 8 }}>
              <Typography data-aos="zoom-in-up" data-aos-duration="2000" sx={{ fontSize: ['30px', '46px'], fontWeight: 600, color: '#010f1c', textAlign: 'center' }}>Why Choose Fastfood TNC?</Typography>
              <Typography data-aos="zoom-in-up" data-aos-duration="2500" sx={{ fontSize: '16px', color: '#A0A5AA', textAlign: 'center', lineHeight: 1.8, fontWeight: '500' }}>Unmatched Flavors, Quality, and Community Connection.</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', columnGap: 14 }}>
              {reasons.map((reason, index) => (
                <Box data-aos="zoom-in" data-aos-duration="2500" key={index} sx={{ mb: [8, 0] }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: [2, 2, 5] }}>
                    <img src={reason.icon} alt={reason.title} style={{ width: '30%' }} />
                  </Box>
                  <Box sx={{ width: ['100%', '264px'], height: ['100%', '228px'], textAlign: 'center' }}>
                    <Typography sx={{ fontSize: '18px', mb: 2, fontWeight: ['600', '500'] }}>
                      {reason.title}
                    </Typography>
                    <Typography sx={{ fontSize: '16px', color: '#8A9197', fontWeight: '500', lineHeight: 1.6 }}>
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
            <Typography data-aos="zoom-in-up" data-aos-duration="2000" sx={{ fontSize: '46px', fontWeight: 600, color: '#010f1c', textAlign: 'center', color: '#fff' }}>Testimonials</Typography>
            <Typography data-aos="zoom-in-up" data-aos-duration="2500" sx={{ fontSize: '16px', color: '#A0A5AA', textAlign: 'center', lineHeight: 1.8, fontWeight: '500' }}>Elevating Your Dining Experience</Typography>
          </Box>
          <CustomerReview />
        </Box>
        <Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </>
  )
}

export default Home
