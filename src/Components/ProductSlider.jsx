import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination,EffectFade } from 'swiper/modules';
import { Box, Button, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import 'swiper/css/effect-fade';
const slideData = [
  {
    title: "Discover Delight at Fastfood TNC",
    subtitle: "Your Go-To Spot for Quick and Tasty Eats!",
    description: "Where quick eats and quality collide, crafting a taste sensation. Speed meets flavor in every bite, promising a culinary journey that's as swift as it is delicious.",
    imgSrc: '/Assets/burger.png',
  },
  {
    title: "Discover Delight at Fastfood TNC",
    subtitle: "Your Go-To Spot for Quick and Tasty Eats!",
    description: "Where quick eats and quality collide, crafting a taste sensation. Speed meets flavor in every bite, promising a culinary journey that's as swift as it is delicious.",
    imgSrc: '/Assets/wepik-export.png',
  },
  {
    title: "Discover Delight at Fastfood TNC",
    subtitle: "Your Go-To Spot for Quick and Tasty Eats!",
    description: "Where quick eats and quality collide, crafting a taste sensation. Speed meets flavor in every bite, promising a culinary journey that's as swift as it is delicious.",
    imgSrc: '/Assets/pizza.png',
  },
  {
    title: "Discover Delight at Fastfood TNC",
    subtitle: "Your Go-To Spot for Quick and Tasty Eats!",
    description: "Where quick eats and quality collide, crafting a taste sensation. Speed meets flavor in every bite, promising a culinary journey that's as swift as it is delicious.",
    imgSrc: '/Assets/chicken.png',
  },
  {
    title: "Discover Delight at Fastfood TNC",
    subtitle: "Your Go-To Spot for Quick and Tasty Eats!",
    description: "Where quick eats and quality collide, crafting a taste sensation. Speed meets flavor in every bite, promising a culinary journey that's as swift as it is delicious.",
    imgSrc: '/Assets/pasta image.png',
  },
];

export default function ProductSlider() {
  const theme = createTheme({
    typography: {
      fontFamily: `'Jost', sans-serif`,
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Swiper
          direction={'vertical'}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          effect="fade" 
          modules={[Pagination  ]} 
          className="customSwiper"
        >
          {slideData.map((slide, index) => (
            <SwiperSlide key={index}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', px: [5,5,5,4,10], py: [5,5,5,4,8] }}>
                <Box sx={{ width: '100%', textAlign: 'start' }}>
                  <Typography sx={{ color: '#FFB700', fontWeight: 'bold', fontSize: '24px', mb: 1 }}>
                    {slide.title}
                  </Typography>
                  <Typography sx={{ color: '#fff', fontWeight: 'bold', lineHeight: '80px', fontSize: '64px', mb: 4 }}>
                    {slide.subtitle}
                  </Typography>
                  <Typography sx={{ fontSize: '16px', lineHeight: '28px', color: '#C7C7C7' }}>
                    {slide.description}
                  </Typography>
                  <Button
                    href="/cart"
                    variant="contained"
                    endIcon={<ArrowRightAltIcon />}
                    sx={{
                      bgcolor: "#FFB700",
                      textTransform: 'none',
                      color: '#000',
                      fontWeight: 'bold',
                      borderRadius: '50px',
                      border: '2px solid #FFB700',
                      px: [3],
                      my: 5,
                      '&:hover': {
                        bgcolor: "transparent",
                        color: '#FFB700',
                      },
                    }}
                  >
                    Order now
                  </Button>
                </Box>
                <Box >
                  <img src={slide.imgSrc} style={{ width: '42rem' }} alt={slide.title} />
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </ThemeProvider>
      <style>
        {`
          /* Custom Swiper styles with increased specificity */
          .customSwiper {
            margin-top: 5rem !important;
            width: 80% !important;
            height: 80% !important;
          }

          @media (max-width: 1280px) { 
            .customSwiper {
              width: 95% !important;
              margin-top: 2rem !important;
            }
          }

          @media (max-width: 960px) { 
            .customSwiper {
              width: 95% !important;
              height: 70% !important;
              margin-top: 4rem !important;
            }
          }

          @media (max-width: 600px) { /* For mobile devices */
            .customSwiper {
              width: 100% !important;
              height: 60% !important;
              margin-top: 3rem !important;
            }
          }

          .customSwiper .swiper-slide {
            text-align: center !important;
            font-size: 18px !important;
            background: transparent !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
          }

          .customSwiper .swiper-pagination-bullet {
            width: 20px !important;
            height: 20px !important;
            border: 2px solid #fff !important;
            background-color: rgba(255, 255, 255, 0.4) !important;
            opacity: 1 !important;
            transition: background-color 0.3s ease !important;
            margin: 20px 0 !important;
          }

          .customSwiper .swiper-pagination-bullet.swiper-pagination-bullet-active {
            background-color: #FFB700 !important;
          }

          .customSwiper .swiper-pagination-bullet:hover {
            background-color: #FFB700 !important;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            } 
          }

          .customSwiper .swiper-slide {
            animation: fadeIn 0.5s ease forwards !important;
          }
        `}
      </style>
    </>
  );
}
