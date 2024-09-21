import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardMedia, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Facebook, Twitter, Pinterest, LinkedIn } from "@mui/icons-material";

// Replacing industryData with chefs array
const chefs = [
  {
    name: "Wade Warren",
    title: "Burger Specialist",
    imageUrl: "Assets/chef-1.png",
  },
  {
    name: "Chef Emma",
    title: "Pastry Chef",
    imageUrl: "Assets/chef-2.png",
  },
  {
    name: "John Doe",
    title: "Pizza Master",
    imageUrl: "Assets/chef-3.png",
  },
  {
    name: "John Doe",
    title: "Pizza Master",
    imageUrl: "Assets/chef-4.png",
  },
  {
    name: "Wade Warren",
    title: "Burger Specialist",
    imageUrl: "Assets/chef-1.png",
  },
  {
    name: "Chef Emma",
    title: "Pastry Chef",
    imageUrl: "Assets/chef-2.png",
  },
  {
    name: "John Doe",
    title: "Pizza Master",
    imageUrl: "Assets/chef-3.png",
  },
  {
    name: "John Doe",
    title: "Pizza Master",
    imageUrl: "Assets/chef-4.png",
  },
];

const SliderCard = ({ name, title, imageUrl }) => (
  <Card
    sx={{
      position: "relative",
      width: 380,
      borderRadius: "15px",
      overflow: "hidden",
      transition: "transform 0.3s ease-in-out",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
      "&:hover": {
        transform: "scale(1.05)",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
        "& .hover-details": {
          opacity: 1,
        },
      },
    }}
  >
    <CardMedia
      sx={{
        height: 450,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      image={imageUrl}
      title={name}
    />
    <Box
      className="hover-details"
      sx={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        color: "#fff",
        p: 2,
        opacity: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      <Typography variant="h6">{name}</Typography>
      <Typography variant="body2">{title}</Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
        <IconButton sx={{ color: "#fff" }}>
          <Facebook />
        </IconButton>
        <IconButton sx={{ color: "#fff" }}>
          <Twitter />
        </IconButton>
        <IconButton sx={{ color: "#fff" }}>
          <Pinterest />
        </IconButton>
        <IconButton sx={{ color: "#fff" }}>
          <LinkedIn />
        </IconButton>
      </Box>
    </Box>
    <style>
      {`
                    .swiper {
                        width: 100%;
                        height: 100%;
                    }

                    .swiper-slide {
                        text-align: center;
                        font-size: 18px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .swiper-slide img {
                        display: block;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    .swiper {
                        margin-left: auto;
                        margin-right: auto;
                    }

                    .swiper-button-next,
                    .swiper-button-prev {
                        background-color: #f5f5f7;
                        border-radius: 100%;
                        padding: 2rem;
                        height: 4rem;
                        width: 4rem;
                        color: gray;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .swiper-button-next:after {
                        font-size: 1.5rem;
                        font-weight: 900;
                        text-align: center;
                        margin-left: 6.5px;
                        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
                        -webkit-text-stroke: 3px gray;
                        text-stroke: 3px #F44247;
                    }

                    .swiper-button-prev:after {
                        font-size: 1.5rem;
                        font-weight: 900;
                        text-align: center;
                        margin-left: -5px;
                        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
                        -webkit-text-stroke: 3px gray;
                        text-stroke: 3px #F44247;
                    }

                    @media (max-width: 800px) {
                        .swiper-button-next,
                        .swiper-button-prev {
                            display:none;
                            padding: 1rem;
                            height: 2rem;
                            width: 2rem;
                        }

                        .swiper-button-next:after {
                            font-size: 1rem;
                            margin-left: 0.3rem;
                            -webkit-text-stroke: 0.1125rem #F44247;
                            text-stroke: 0.1125rem #F44247;
                        }

                        .swiper-button-prev:after {
                            font-size: 1rem;
                            margin-left: -0.5rem;
                            -webkit-text-stroke: 0.1125rem #F44247;
                            text-stroke: 0.1125rem #F44247;
                        }
                    }
                `}
    </style>
  </Card>
);

const ChefCard = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1700) {
        setSlidesPerView(4);
      } else if (window.innerWidth >= 1280) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 700) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  return (
    <Box sx={{ width: "100%", height: "35rem" }}>
      <Swiper
        slidesPerView={slidesPerView}
        navigation={true}
        spaceBetween={20}
        loop={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="mySwiper"
      >
        {chefs.map((chef, index) => (
          <SwiperSlide key={index}>
            <SliderCard {...chef} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
export default ChefCard;
