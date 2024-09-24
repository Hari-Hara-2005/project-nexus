import React, { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, Card, CardContent, Typography, Box, Button, TextField } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Footer from '../Components/Footer';

const theme = createTheme({
    typography: {
        fontFamily: `'Jost', sans-serif`,
    },
});

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
            bgcolor: '#fff',
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


const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        guests: '',
        date: '',
        message: '',
    });
    const [errors, setErrors] = useState({});

    const contactInfo = [
        {
            icon: <HomeIcon style={{ fontSize: '40px' }} />,
            title: 'Visit our Restaurant',
            content: (
                <>
                    93X Hilgard Ave, Los Street <br /> 900XX, India.
                </>
            ),
        },
        {
            icon: <PhoneIcon style={{ fontSize: '40px' }} />,
            title: 'Contact number',
            content: (
                <>
                    + 123 456 7XX 000 <br /> + 2XX 000 111 00
                </>
            ),
        },
        {
            icon: <MailOutlineIcon style={{ fontSize: '40px' }} />,
            title: 'Mail Us',
            content: (
                <>
                    example@gmail.com <br /> tnc@contact-us.com
                </>
            ),
        },
    ];



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
                        height: ['372px'],
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Navbar color="#fff" />
                    <Box >
                        <Typography
                            sx={{
                                color: "#fff",
                                fontWeight: "bold",
                                fontSize: ["20px", "22px", "36px"],
                                my: 1,
                                textAlign: 'center'
                            }}
                        >
                            Contact
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                            <Link to="/">
                                <Typography
                                    sx={{
                                        color: "#9A9EA1",
                                        fontWeight: "bold",
                                        fontSize: '18px',
                                    }}
                                >
                                    Home
                                </Typography>
                            </Link>
                            <ArrowRightAltIcon sx={{
                                color: "#9A9EA1",
                                fontWeight: "bold",
                                fontSize: '36px',
                            }} />
                            <Typography
                                sx={{
                                    color: "#9A9EA1",
                                    fontWeight: "bold",
                                    fontSize: '18px',
                                }}
                            >
                                Contact
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ pt: 5 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography data-aos="zoom-in-up" data-aos-duration="2000" sx={{ fontSize: ['30px', '46px'], fontWeight: 600, color: '#010f1c', textAlign: 'center', lineHeight: 1.4, mb: 2, width: ['90%', '90%', '90%', '90%', '40%'] }}>Let's Connect and Create Memorable Experiences Together</Typography>
                    </Box>
                    <Typography data-aos="zoom-in-up" data-aos-duration="2500" sx={{ fontSize: '16px', color: '#A0A5AA', textAlign: 'center', lineHeight: 1.8, fontWeight: '500', }}>Reach Out for Reservations, Inquiries, or Just to Say Hello –We're Here to Serve You.</Typography>
                </Box>
                <Box sx={{ flexGrow: 1, px: [3, 3, 10, 10, 36], py: 5 }}>
                    <Grid container spacing={10} justifyContent="center"
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2500">
                        {contactInfo.map((info, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card
                                    sx={{
                                        minHeight: '250px',
                                        textAlign: 'center',
                                        backgroundColor: '#FFF8E1',
                                        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
                                        padding: '20px',
                                    }}
                                >
                                    <CardContent>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                marginBottom: '15px',
                                            }}
                                        >
                                            {info.icon}
                                        </Box>
                                        <Typography variant="h6" component="div" gutterBottom>
                                            {info.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {info.content}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box sx={{ pt: 5 }}>
                    <Typography data-aos="zoom-in-up" data-aos-duration="2000" sx={{ fontSize: ['30px', '46px'], fontWeight: 600, color: '#010f1c', textAlign: 'center', lineHeight: 1.4, my: 8 }}>Get in Touch with FastFood TNC</Typography>
                </Box>
                <Box
                    sx={{ pb: 10 }}
                    data-aos="fade-down"
                     data-aos-duration="2500"
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
                                bgcolor: '#FFF8E6',
                                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
                                width: ['100%', '100%', '100%', '680px'],
                                height: ['auto', 'auto', 'auto', '729px'],
                                p: [2, 5, 8],
                                mb: [4, 0],
                            }}
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
                                <Box sx={{ display: 'flex', gap: [2, 3, 5], mt: [3, 4], flexDirection: ['column'] }}>
                                    <CustomTextField label="Number of Guests" required fullWidth />
                                    <CustomTextField label="Message" required fullWidth multiline rows={4} />
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
                    </Box>
                </Box>
                <Footer />
            </ThemeProvider>
        </>
    );
};

export default ContactUs;
