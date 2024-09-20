import React from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import Grid from "@mui/material/Grid2";
const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#1A1A1A", color: "white" }}>
      {/* Image Section */}
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Grid container spacing={0} sx={{ maxWidth: "1200px", width: "100%" }}>
          <Grid item xs={12} sm={3}>
            <img
              src="https://via.placeholder.com/300" // Replace with your image URLs
              alt="food 1"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <img
              src="https://via.placeholder.com/300"
              alt="food 2"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={12} sm={3} sx={{ position: "relative" }}>
            <img
              src="https://via.placeholder.com/300"
              alt="food 3"
              style={{ width: "100%", height: "auto" }}
            />
            {/* Instagram Icon Overlay */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "rgba(0, 0, 0, 0.5)",
                color: "white",
              }}
            >
              <InstagramIcon sx={{ fontSize: 50 }} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <img
              src="https://via.placeholder.com/300"
              alt="food 4"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Footer Section */}
      <Box sx={{ py: 5 }}>
        <Grid container spacing={4} justifyContent="center">
          {/* Address Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Elevate bites, build community, deliver culinary excellence with
              FastFood TNC
            </Typography>
            <Box display="flex" alignItems="center" mt={2}>
              <HomeIcon />
              <Typography sx={{ ml: 2 }}>
                4XX7 Washington Ave. Manchester, Kentucky 39495.
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

          {/* Quick Links */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>
              Quick Link
            </Typography>
            <Typography>Home</Typography>
            <Typography>About Us</Typography>
            <Typography>Shop</Typography>
            <Typography>Blog</Typography>
            <Typography>Licensing</Typography>
          </Grid>

          {/* Opening Hours */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Opening Hours
            </Typography>
            <Typography>Monday to Friday</Typography>
            <Typography>10:00 AM to 12:00 PM</Typography>
            <Typography>Saturday</Typography>
            <Typography>12:00 PM to 6:00 PM</Typography>
          </Grid>

          {/* Newsletter Subscribe */}
          <Grid item xs={12} md={3}>
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
                sx={{ bgcolor: "white", borderRadius: "4px", mr: 1 }}
              />
              <Button variant="contained" color="warning">
                <Typography>→</Typography>
              </Button>
            </Box>
            <Box mt={2}>
              <IconButton color="inherit">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit">
                <PinterestIcon />
              </IconButton>
              <IconButton color="inherit">
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" mt={5}>
          <Typography variant="body2">
            Copyright © 2024 FastFood TNC | Designed by ThemeNcode LLC | Powered
            By Webflow
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
