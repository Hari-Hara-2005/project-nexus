import React from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
const navLinks = [
  { title: "Home", path: "/home" },
  { title: "About Us", path: "/about" },
  { title: "Shop", path: "/pizza" },
  { title: "Contact Us", path: "/contact" },
];
const ScrollToTop = () => {
  window.scrollTo(0, 0);
};
const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#1A1A1A", color: "white", px: { xs: 2, md: 6 } }}>
      <Box sx={{ py: 5 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
          >
            <Typography variant="h6" gutterBottom>
              Elevate bites, build community, deliver culinary excellence with
              FastFood TNC
            </Typography>
            <Box display="flex" alignItems="center" mt={2}>
              <HomeIcon />
              <Typography sx={{ ml: 2 }}>
                4XX7 Middle Street. Thanjavur, India 39495.
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mt={1}>
              <PhoneIcon />
              <Typography sx={{ ml: 2 }}>(406) 5XX-012X</Typography>
            </Box>
            <Box display="flex" alignItems="center" mt={1}>
              <EmailIcon />
              <Typography sx={{ ml: 2 }}>exampleX@gmail.com</Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-easing="ease-in-sine"
          >
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            {navLinks.map((item, index) => (
              <Typography
                key={index}
                sx={{
                  mb: 1,
                  "& a": {
                    color: "#fff",
                    textDecoration: "none",
                    "&:hover": {
                      color: "#FFB700",
                      transition: "color 0.3s ease",
                    },
                  },
                }}
              >
                <Link to={item.path} onClick={ScrollToTop}>
                  {item.title}
                </Link>
              </Typography>
            ))}
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            data-aos="fade-right"
            data-aos-duration="2500"
            data-aos-easing="ease-in-sine"
          >
            <Typography variant="h6" gutterBottom>
              Opening Hours
            </Typography>
            <Typography>Monday to Friday</Typography>
            <Typography>10:00 AM to 12:00 PM</Typography>
            <Typography>Saturday</Typography>
            <Typography>12:00 PM to 6:00 PM</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            data-aos="fade-right"
            data-aos-duration="3000"
            data-aos-easing="ease-in-sine"
          >
            <Typography variant="h6" gutterBottom>
              Newsletter Subscribe
            </Typography>
            <Typography gutterBottom>
              Stay in the Loop: Unlock Exclusive Offers, Culinary Insights, and
              More.
            </Typography>
            <Box display="flex" mt={2}>
              <TextField
                variant="outlined"
                placeholder="Your Email"
                size="small"
                fullWidth
                sx={{
                  bgcolor: "white",
                  borderRadius: "4px",
                  mr: 1,
                }}
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#FFB700",
                  "&:hover": {
                    bgcolor: "#FFB700",
                    transition: "background-color 0.3s ease",
                  },
                }}
              >
                →
              </Button>
            </Box>
            <Box mt={2} display="flex" justifyContent="flex-start">
              {[FacebookIcon, TwitterIcon, PinterestIcon, YouTubeIcon].map(
                (Icon, index) => (
                  <IconButton
                    key={index}
                    color="inherit"
                    sx={{
                      mr: 1,
                      "&:hover": {
                        color: "#FFB700",
                        transition: "color 0.3s ease",
                      },
                    }}
                  >
                    <Icon />
                  </IconButton>
                )
              )}
            </Box>
          </Grid>
        </Grid>

        <Box textAlign="center" mt={5}>
          <Typography variant="body2">
            Copyright © 2024 FastFood TNC | Designed and Developed by{" "}
            <a
              href="https://harihara.vercel.app/"
              style={{
                color: "#fff",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Hari Hara
            </a>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
