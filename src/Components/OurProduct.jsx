import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  Grid,
  Stack,
  Skeleton,
} from "@mui/material";
import { styled } from "@mui/system";
import StarIcon from "@mui/icons-material/Star";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";

const dates = [
  {
    id: 1,
    name: "Cashew",
    rating: 5,
    originalPrice: "₹200.00",
    price: "₹365.00",
    image: "Assets/hamburger.jpg",
  },
  {
    id: 2,
    name: "Cashew Splits",
    rating: 4,
    originalPrice: "₹200.00",
    price: "₹425.00",
    image: "/Assets/pizza.jpg",
  },
  {
    id: 3,
    name: "Roasted Cashew",
    rating: 4,
    originalPrice: "₹200.00",
    price: "₹425.00",
    image: "/Assets/tall-glass.jpg",
  },
  {
    id: 4,
    name: "Roasted Cashew",
    rating: 3,
    originalPrice: "₹200.00",
    price: "₹800.00",
    image: "/Assets/pasta-cheese.avif",
  },
  {
    id: 4,
    name: "Roasted Cashew",
    rating: 3,
    originalPrice: "₹200.00",
    price: "₹800.00",
    image: "/Assets/pasta-plate.avif",
  },
  {
    id: 4,
    name: "Roasted Cashew",
    rating: 3,
    originalPrice: "₹200.00",
    price: "₹800.00",
    image: "/Assets/shawarma.jpg",
  },
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
  flexDirection: "column",
}));

const StyledMedia = styled(CardMedia)`
  height: 250px;

  @media (min-width: 900px) {
    height: 300px;
  }
`;

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

const ProductCard = ({ product, isLoading }) => {
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
          <StyledMedia component="img" src={product.image} alt={product.name} />
        </Box>
      )}
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
                    {product.price}
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
                    {product.originalPrice}
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </>
        )}
      </CardContent>
    </StyledCard>
  );
};

const OurProduct = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500); 
  }, []);

  return (
    <Box sx={{ textAlign: "center", px: [1.5, 3, 0], py: [5], zIndex: 30 }}>
      <Grid container spacing={6} justifyContent="center" alignItems="center">
        {dates.map((date) => (
          <Grid data-aos="fade-right"  data-aos-duration="3000" item key={date.id} xs={12} sm={6} md={3.8} lg={3.6}>
            <ProductCard product={date} isLoading={isLoading} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurProduct;
