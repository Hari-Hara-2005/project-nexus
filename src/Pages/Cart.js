import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Box, Typography, Button } from '@mui/material';
import { removeFromCart, clearCart } from '../redux/cartSlice';
import CartItemCard from '../Pages/CartItemCard.js';
import Navbar from '../Components/Navbar.jsx';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from '../Components/Footer.jsx';
const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };



    const handleClearCart = () => {
        dispatch(clearCart());
    };
    const theme = createTheme({
        typography: {
            fontFamily: `'Jost', sans-serif`,
        },
    });

    useEffect(() => {
        document.title = "Cart";
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
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
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
                            Cart
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                            <Link to="/home" style={{ textDecoration: "none" }}>
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
                                Cart
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ textAlign: 'center', px: [2, 3, 0], py: [15], zIndex: 30 }}>
                    <Grid container spacing={6} justifyContent="center" alignItems="center" >
                        {cartItems.map((item) => (
                            <Grid item key={item.id} xs={12} sm={6} md={3.8} lg={3.6} data-aos="zoom-in-up"
                                data-aos-duration="2500">
                                <CartItemCard
                                    product={item}
                                    isLoading={false}
                                    cartMode={true}
                                    onRemove={() => handleRemoveFromCart(item.id)}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, gap: '5rem', mb: 5 }}>
                    {cartItems.length > 0 && (
                        <Button variant="contained" sx={{
                            bgcolor: "#92553D", textTransform: 'none', borderRadius: '10px', px: [4], py: 1.5, fontSize: 15, fontWeight: 600, '&:hover': {
                                bgcolor: "#282828"
                            }
                        }} color="primary" onClick={handleClearCart}>
                            Clear Cart
                        </Button>
                    )}
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: "#92553D", textTransform: 'none', borderRadius: '10px', px: [4], py: 1.5, fontSize: 15, fontWeight: 600, '&:hover': {
                                bgcolor: "#282828"
                            }
                        }}
                        disabled={cartItems.length === 0}
                    >
                        Buy Now
                    </Button>
                </Box>
            </ThemeProvider>
            <Footer />
        </>
    );
};

export default Cart;