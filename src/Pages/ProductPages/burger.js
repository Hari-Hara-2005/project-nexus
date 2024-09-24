import React, { useState, useEffect } from "react";
import {
    Card,
    CardContent,
    CardMedia,
    IconButton,
    Typography,
    Grid,
    Box,
    Stack,
    Button,
    Skeleton,
    Select,
    MenuItem,
    InputLabel,
} from "@mui/material";
import { styled } from "@mui/system";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShareIcon from "@mui/icons-material/Share";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";
import Navbar from "../../Components/Navbar";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { burgers } from "../../utility/data"
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Link } from "react-router-dom";
import ProductNavbar from "../../Components/ProductNavbar";
import Footer from "../../Components/Footer";
const valueOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
];
const StyledCard = styled(Card)(({ theme }) => ({
    backgroundColor: "#fff",
    color: "#92553D",
    fontWeight: 900,
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
    transition: "transform 0.5s, box-shadow 0.5s",
    "&:hover": {
        transform: "scale(1.05)",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
    },
    borderRadius: 16,
    position: "relative",
    display: "flex",
    flexDirection: "row", // Default for mobile
    [theme.breakpoints.up("sm")]: {
        flexDirection: "column", // Change to column for larger screens
    },
}));

const StyledMedia = styled(CardMedia)`
  height: 220px;

  @media (min-width: 600px) {
    height: 350px;
  }
`;

const IconContainer = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: 15,
    right: 15,
    display: "flex",
    flexDirection: "column",
    gap: 10,

    [theme.breakpoints.down("sm")]: {
        width: "8%",
    },
}));

const RatingStars = ({ rating, size }) => (
    <Box display="flex" alignItems="center" sx={{ py: 1.5 }}>
        {[...Array(5)].map((_, index) => (
            <StarIcon
                key={index}
                sx={{
                    color: index < rating ? "orange" : "rgba(255, 215, 0, 0.6)",
                    fontSize: size,
                }}
            />
        ))}
    </Box>
);
const theme = createTheme({
    typography: {
        fontFamily: `'Jost', sans-serif`,
    },
});
const ProductCard = ({ product, isLoading }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(
            addToCart({
                id: product.id,
                name: product.name,
                image: product.image,
                price,
                originalPrice,
                selectedValue,
            })
        );
        toast.success("Successfully added to cart!", {
            position: "bottom-left",
            autoClose: 3000,
        });
    };

    const [liked, setLiked] = useState(false);
    const [selectedValue, setSelectedValue] = useState("1"); // Default to 1pocket
    const [price, setPrice] = useState(0); // Default price
    const [originalPrice, setOriginalPrice] = useState(0); // Default original price

    useEffect(() => {
        if (product && product.prices && product.prices[selectedValue]) {
            setPrice(product.prices[selectedValue].currentPrice);
            setOriginalPrice(product.prices[selectedValue].originalPrice);
        }
    }, [product, selectedValue]);

    const handleLikeClick = () => {
        setLiked(!liked);
    };

    const handleValueChange = (e) => {
        const newValue = e.target.value;
        setSelectedValue(newValue);
    };





    return (
        <StyledCard>
            {isLoading ? (
                <Skeleton
                    variant="rectangular"
                    animation="wave"
                    width="100%"
                    height={260}
                />
            ) : (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Box sx={{ width: ["11rem", "40rem"], height: ["100%", "25rem"], overflow: "hidden" }}>
                        <Box
                            component="img"
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover", // or "contain" if you want to keep aspect ratio
                            }}
                            src={product.image}
                            alt={product.name}
                        />
                    </Box>
                </Box>
            )}
            <IconContainer>
                {isLoading ? (
                    <>
                        <Skeleton
                            variant="circular"
                            animation="wave"
                            width={40}
                            height={40}
                        />
                        <Skeleton
                            variant="circular"
                            animation="wave"
                            width={40}
                            height={40}
                        />
                        <Skeleton
                            variant="circular"
                            animation="wave"
                            width={40}
                            height={40}
                        />
                    </>
                ) : (
                    <>
                        <IconButton
                            aria-label="add to favorites"
                            sx={{
                                color: liked ? "red" : "#fff",
                                bgcolor: "#92553D",
                                "&:hover": {
                                    bgcolor: "#212121",
                                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
                                },
                            }}
                            onClick={handleLikeClick}
                        >
                            <FavoriteIcon sx={{ fontSize: ["0.8rem", "1.5rem"] }} />
                        </IconButton>
                        <IconButton
                            aria-label="share"
                            sx={{
                                color: "#fff",
                                bgcolor: "#92553D",
                                "&:hover": {
                                    bgcolor: "#212121",
                                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
                                },
                            }}
                        >
                            <ShareIcon sx={{ fontSize: ["0.8rem", "1.5rem"] }} />
                        </IconButton>
                        <IconButton
                            aria-label="add to cart"
                            sx={{
                                color: "#fff",
                                bgcolor: "#92553D",
                                "&:hover": {
                                    bgcolor: "#212121",
                                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
                                },
                            }}
                        >
                            <ShoppingCartIcon sx={{ fontSize: ["0.8rem", "1.5rem"] }} />
                        </IconButton>
                    </>
                )}
            </IconContainer>
            <CardContent>
                {isLoading ? (
                    <>
                        <Skeleton variant="text" animation="wave" width="80%" />
                        <Skeleton variant="text" animation="wave" width="60%" />
                        <Skeleton variant="text" animation="wave" width="40%" />
                        <Skeleton variant="rectangular" width="100%" height={50} />
                    </>
                ) : (
                    <>
                        <Typography
                            component="div"
                            sx={{
                                textAlign: "start",
                                fontWeight: [700, 600],
                                letterSpacing: 1,
                                fontSize: ["0.8rem", "1.3rem"],
                            }}
                        >
                            {product.name}
                        </Typography>
                        <Typography
                            variant="body2"
                            component="div"
                            sx={{ textAlign: "start", letterSpacing: 1, py: 1 }}
                        >
                            <Select
                                value={selectedValue}
                                displayEmpty
                                style={{ height: 40 }}
                                onChange={handleValueChange}
                                sx={{
                                    fontSize: ["1rem", "1rem"],
                                    minWidth: 100,
                                    letterSpacing: 0.5,
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {
                                            borderColor: "#ccc",
                                        },
                                        "&:hover fieldset": {
                                            borderColor: "#92553D",
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderColor: "#92553D",
                                        },
                                    },
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#ccc",
                                    },
                                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#92553D !important",
                                    },
                                }}
                            >
                                <MenuItem value="" disabled>
                                    Select
                                </MenuItem>
                                {valueOptions.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Typography>

                        <Typography
                            color={"#92553D"}
                            sx={{
                                textAlign: "start",
                                fontWeight: 600,
                                fontSize: "0.8rem",
                                letterSpacing: 0.5,
                                mt: 1,
                                display: "flex",
                            }}
                        >
                            <VerifiedIcon sx={{ fontSize: "1rem" }} />
                            Fast Food TNC
                        </Typography>
                        <Stack
                            direction={["column", "row"]}
                            justifyContent={"space-between"}
                        >
                            <Box>
                                <RatingStars rating={product.rating} size="1.2rem" />
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                    <Typography
                                        color={"#282828"}
                                        sx={{
                                            textAlign: "start",
                                            fontWeight: 700,
                                            fontSize: "1rem",
                                            letterSpacing: 0.5,
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        {price}
                                        <LocalOfferOutlinedIcon sx={{ fontSize: "0.9rem" }} />
                                    </Typography>
                                    <Typography
                                        color={"gray"}
                                        sx={{
                                            textAlign: "start",
                                            fontWeight: 600,
                                            fontSize: "0.9rem",
                                            letterSpacing: 0.5,
                                            textDecoration: "line-through",
                                        }}
                                    >
                                        {originalPrice}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                sx={{ display: ["flex"], alignItems: "center", mt: [1.5, 0] }}
                            >
                                <Box sx={{ mt: [0, 2] }}>
                                    <Box
                                        sx={{
                                            display: ["flex"],
                                            alignItems: "center",
                                            mt: [0, 1.5],
                                        }}
                                    >
                                        <Button
                                            variant="contained"
                                            startIcon={<ShoppingCartOutlinedIcon />}
                                            sx={{
                                                bgcolor: "#92553D",
                                                textTransform: "none",
                                                borderRadius: "50px",
                                                px: [2.5],
                                                "&:hover": {
                                                    bgcolor: "#282828",
                                                },
                                            }}
                                            onClick={handleAddToCart}
                                        >
                                            Add to cart
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Stack>
                    </>
                )}
            </CardContent>
        </StyledCard>
    );
};

const Burger = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2500);
    }, []);

    useEffect(() => {
        document.title = "Burgers";
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
                            Burgers
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                            <Link to="/home">
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
                                Burgers
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ mt: 5 }}>
                        <ProductNavbar />
                    </Box>
                </Box>
                <Box sx={{ textAlign: "center", px: [2, 3, 0], zIndex: 30 }}>
                    <Grid container spacing={6} justifyContent="center" alignItems="center" sx={{ py: 10 }}>
                        {burgers.map((burger) => (
                            <Grid item key={burger.id} xs={12} sm={6} md={3.8} lg={3.3} data-aos="zoom-in-up"
                                data-aos-duration="2500">
                                <ProductCard product={burger} isLoading={isLoading} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Footer />
            </ThemeProvider>
        </>
    );
};

export default Burger;


