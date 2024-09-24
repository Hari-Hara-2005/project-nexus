import React, { useEffect, useRef } from "react";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { styled } from '@mui/system';
import { Player } from '@lordicon/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import LOCK from '../Icons/lock.json';
import TRUCk from '../Icons/truck.json';
import QUALITY from '../Icons/quality.json';
import COINS from '../Icons/coins.json';
import Navbar from "../Components/Navbar";
import SlotCounter from 'react-slot-counter';
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ChefCard from "../Components/ChefCards";
import Faq from "../Components/Faq";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
export const About = () => {
    const lockRef = useRef(null);
    const truckRef = useRef(null);
    const qualityRef = useRef(null);
    const coinsRef = useRef(null);

    useEffect(() => {
        lockRef.current?.playFromBeginning();
        truckRef.current?.playFromBeginning();
        qualityRef.current?.playFromBeginning();
        coinsRef.current?.playFromBeginning();
    }, []);



    const FeatureContainer = styled(Box)(({ theme }) => ({
        backgroundImage: `url(${"Assets/bg-5.png"})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: theme.spacing(2),
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23)',
        borderRadius: theme.spacing(1),
        color: '#fff',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
        },
    }));

    const FeatureItem = styled(Grid)(({ theme }) => ({
        textAlign: 'center',
        padding: theme.spacing(2),
        borderColor: 'rgba(255, 255, 255, 0.2)',
        '& svg': {
            color: '#f00',
            transition: 'transform 0.3s, color 0.3s',
        },
        '&:hover svg': {
            transform: 'scale(1.2)',
            color: '#fff',
        },
        '&:hover p': {
            color: '#f00',
        },
        [theme.breakpoints.down('md')]: {
            '&:nth-of-type(1), &:nth-of-type(2)': {
                borderBottom: '2px solid rgba(255, 255, 255, 0.2)',
            },
            '&:nth-of-type(1), &:nth-of-type(3)': {
                borderRight: '2px solid rgba(255, 255, 255, 0.2)',
            },
        },
        [theme.breakpoints.up('md')]: {
            '&:nth-of-type(1), &:nth-of-type(3)': {
                borderRight: '2px solid rgba(255, 255, 255, 0.2)',
            },
            '&:not(:nth-of-type(4))': {
                borderRight: '2px solid rgba(255, 255, 255, 0.2)',
            },
        },
    }));

    const theme = createTheme({
        typography: {
            fontFamily: `'Jost', sans-serif`,
        },
    });
    useEffect(() => {
        document.title = "About";
    }, []);

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
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Navbar color="#fff" />
                    <Box>
                        <Typography
                            sx={{
                                color: "#fff",
                                fontWeight: "bold",
                                fontSize: ["20px", "22px", "36px"],
                                my: 1,
                                textAlign: 'center'
                            }}
                        >
                            About Us
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                            <Link to="/"><Typography
                                sx={{
                                    color: "#9A9EA1",
                                    fontWeight: "bold",
                                    fontSize: '18px',
                                }}
                            >
                                Home
                            </Typography></Link>
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
                                About us
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{}}>
                    <Box sx={{ py: [10], px: [2, 5, 15, 5, 2], display: 'flex', justifyContent: 'center', flexDirection: ['column', 'row'] }}>
                        <Box
                            sx={{
                                position: 'relative',
                                width: { xs: "90%", sm: "90%", md: "90%", lg: "50%", xl: "30%" },
                                height: { xs: "19rem", sm: "18rem", md: "25rem", lg: "25rem", xl: "25rem" },
                            }}
                        >
                            <img
                                data-aos="zoom-out"
                                data-aos-duration="2000"
                                src="/Assets/shopimg.jpg"
                                alt="Store Image"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '3px',
                                    borderTopLeftRadius: '15%',
                                }}
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    display: 'flex',
                                    flexDirection: ['column', 'column', 'row'],
                                    bgcolor: 'white',
                                    color: '#fff',
                                    width: ['38%', '38%', '40rem'],
                                    right: ['-11%', '-11%', '-90%', '-50%', "-90%"],
                                    bottom: ['5%', '5%', '-8%', '-8%', "-5%"],
                                    boxShadow: 3,
                                    borderRadius: '2px',
                                    px: [2, 2, 5],
                                    py: 2
                                }}
                            >
                                <Box sx={{
                                    borderRight: ['none', 'none', '2px solid #92553D'],
                                    borderBottom: ['2px solid #92553D', 'none'], px: [0, 0, 5], pb: [2, 2, 0],
                                }}>
                                    <Typography variant="h6" component="div" sx={{ mb: -1, color: '#92553D', fontWeight: 600 }}>
                                        <SlotCounter value={11} animateOnVisible={{ triggerOnce: false, rootMargin: '0px 0px -100px 0px' }} duration={5} />+
                                    </Typography>
                                    <Typography variant="h6" component="div" sx={{ color: '#000', fontWeight: 600, fontSize: 15 }}>
                                        Stores
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    borderRight: ['none', 'none', '2px solid #92553D'],
                                    borderBottom: ['2px solid #92553D', 'none'], px: [0, 0, 5], pb: [2, 2, 0], ml: [0, 0, 4]
                                }}>
                                    <Typography variant="h6" component="div" sx={{ mb: -1, color: '#92553D', fontWeight: 600, }}>
                                        <SlotCounter value={45000} animateOnVisible={{ triggerOnce: false, rootMargin: '0px 0px -100px 0px' }} duration={5} />+
                                    </Typography>
                                    <Typography variant="h6" component="div" sx={{ color: '#000', fontWeight: 600, fontSize: 15, lineHeight: [1.3, 1.5] }}>
                                        Happy Customers
                                    </Typography>
                                </Box>
                                <Box sx={{ ml: [0, 0, 4], pt: [2, 0, 0] }}>
                                    <Typography variant="h6" component="div" sx={{ mb: -1, color: '#92553D', fontWeight: 600, }}>
                                        <SlotCounter value={1000} animateOnVisible={{ triggerOnce: false, rootMargin: '0px 0px -100px 0px' }} duration={5} />+
                                    </Typography>
                                    <Typography variant="h6" component="div" sx={{ color: '#000', fontWeight: 600, fontSize: 15, lineHeight: [1.3, 1.5] }}>
                                        Order Delivered
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            sx={{ width: ["100%", "100%", "100%", "40%", "25%"], px: [2, 7, 5], textAlign: 'justify' }}>
                            <Typography sx={{
                                fontSize: ['1.5rem', '1.5rem', '1.5rem'],
                                fontWeight: '600',
                                color: ' #FFB700',
                                py: 1
                            }}>
                                Hey, We Aren't That Far!
                            </Typography>
                            <Typography>
                                Explore our premium selection of dry fruits, nuts, chocolates, and more. Whether you're looking for a healthy snack or a delicious treat, we offer the finest quality products to satisfy your cravings. Freshness and flavor are just a click away !                        </Typography>
                            <Typography sx={{
                                fontSize: ['1rem', '1.2rem', '1rem'],
                                fontWeight: '600',
                                color: ' #FFB700',
                                py: 1
                            }}>
                                Click To Shop!
                            </Typography>
                            <Button
                                href="/cart"
                                variant="contained"
                                endIcon={<ArrowRightAltIcon />}
                                sx={{
                                    bgcolor: "#FFB700",
                                    textTransform: "none",
                                    color: "#000",
                                    fontWeight: "bold",
                                    borderRadius: "50px",
                                    border: "2px solid #FFB700",
                                    px: [2, 3],
                                    my: [2, 2],
                                    "&:hover": {
                                        bgcolor: "transparent",
                                        color: "#FFB700",
                                    },
                                }}
                            >
                                Order now
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ px: [2, 10], py: [0, 5] }} >
                    <FeatureContainer>
                        <Grid container spacing={0} justifyContent="center" data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"  data-aos-duration="2000">
                            <FeatureItem item xs={6} md={3}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Player
                                        ref={truckRef}
                                        trigger="loop"
                                        size={window.innerWidth < 600 ? 70 : 96}
                                        icon={TRUCk}
                                        colors='primary:red,secondary:white'
                                        onComplete={() => truckRef.current?.playFromBeginning()}
                                    />
                                </Box>
                                <Typography>Free Shiping Purchase Upto ₹200 </Typography>
                            </FeatureItem>
                            <FeatureItem item xs={6} md={3}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Player
                                        ref={lockRef}
                                        trigger="loop"

                                        size={window.innerWidth < 600 ? 70 : 96}
                                        icon={LOCK}
                                        colors='primary:red,secondary:white'
                                        onComplete={() => lockRef.current?.playFromBeginning()}
                                    />
                                </Box>
                                <Typography>Pay On Delivery</Typography>
                            </FeatureItem>
                            <FeatureItem item xs={6} md={3}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Player
                                        ref={qualityRef}
                                        trigger="loop"

                                        size={window.innerWidth < 600 ? 70 : 96}
                                        icon={QUALITY}
                                        colors='primary:red,secondary:white'
                                        onComplete={() => qualityRef.current?.playFromBeginning()}
                                    />
                                </Box>
                                <Typography>100% Quality Guaranteed</Typography>
                            </FeatureItem>
                            <FeatureItem item xs={6} md={3}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Player
                                        ref={coinsRef}
                                        trigger="loop"

                                        size={window.innerWidth < 600 ? 70 : 96}
                                        icon={COINS}
                                        colors='primary:red,secondary:white'
                                        onComplete={() => coinsRef.current?.playFromBeginning()}
                                    />
                                </Box>
                                <Typography>Reward Points On Every Purchase</Typography>
                            </FeatureItem>
                        </Grid>
                    </FeatureContainer>
                    <Box sx={{ py: 15 }}>
                        <Box sx={{ mb: 5 }}>
                            <Typography data-aos="zoom-in-up" data-aos-duration="2000" sx={{ fontSize: ['30px', '46px'], fontWeight: 600, color: '#010f1c', textAlign: 'center' }}>Our expert chef</Typography>
                            <Typography data-aos="zoom-in-up" data-aos-duration="2500" sx={{ fontSize: '16px', color: '#A0A5AA', textAlign: 'center', lineHeight: 1.8, fontWeight: '500' }}>Unmatched Flavors, Quality, and Community Connection.</Typography>
                        </Box>
                        <ChefCard />
                    </Box>
                </Box>
                <Box
                    sx={{
                        backgroundImage: `url(${"Assets/bg-6.png"})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        height: 'auto',
                    }}
                >
                    <Box sx={{ py: 5 }}>
                        <Typography data-aos="zoom-in-up" data-aos-duration="2000" sx={{ fontSize: ['30px', '46px'], fontWeight: 600, color: '#010f1c', textAlign: 'center' }}>Our expert chef</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Typography data-aos="zoom-in-up" data-aos-duration="2500" sx={{ fontSize: '16px', color: '#A0A5AA', textAlign: 'center', lineHeight: 1.8, fontWeight: '500', width: ['90%', '90%', '35%'] }}>Dictumst vel enim massa neque lacus eu lorem suscipit. Habitasse aliquet elit ultricies in facilisi. Habitasse aliquet elit ultricies in facilisi.</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ px: [5, 5, 10], py: 5 }}>
                        <Faq />
                    </Box>
                </Box>
            </ThemeProvider>
            <Footer />
        </>
    );
};