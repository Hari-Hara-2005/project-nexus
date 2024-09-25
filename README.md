# FastFood TNC

FastFood TNC is a delicious fast food restaurant website offering a variety of items such as burgers, pizzas, and more. Customers can order online for delivery or takeout through the website.

## Live Demo

Check out the live site here: [FastFood TNC](https://project-nexus-hari-haras-projects.vercel.app/)

## Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop views.
- **Swiper Slider**: Dynamic and interactive slider showcasing featured fast food items.
- **SEO Optimized**: Open Graph tags, Twitter card, and structured data for improved search engine visibility.
- **Social Sharing**: Shareable content via social media platforms like Twitter and Facebook.
- **AOS Animations**: Smooth animations for a better user experience.
- **Order Now Feature**: Direct call-to-action buttons for easy ordering.
- **Firebase Authentication**: Secure login and registration functionality for users.
- **Cart with Local Storage**: Add and store items in the cart, with local storage to persist items across sessions.

## Technologies Used

- **React**
- **Material UI**
- **Swiper**
- **AOS (Animate on Scroll)**
- **Firebase Authentication**
- **Local Storage for Cart**
- **JavaScript**
- **Frontend**: React.js, Material UI, AOS (Animate On Scroll) for animations
- **Backend**: Firebase for handling user data
- **Hosting**: Vercel

## Installation and Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/Hari-Hara-2005/project-nexus
    cd restaurant
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

4. Open `http://localhost:3000` in your browser to view the project.

## Meta Information

- **Website Name**: FastFood TNC
- **Description**: Delicious fast food restaurant offering burgers, pizzas, and more. Order online for delivery or takeout.
- **Keywords**: fast food, restaurant, burgers, pizzas, takeout, delivery, snacks
- **Author**: Hari Hara

## Social Sharing

FastFood TNC supports sharing on social media through Open Graph and Twitter Cards.

- **Open Graph Image**: ![Open Graph Image](./Assets/Webclip.png)
- **Twitter Image**: ![Twitter Image](./Assets/Webclip.png)

## Structured Data

The website includes structured data to improve SEO. Here is an example of the data:
```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "FastFood TNC",
  "image": "https://project-nexus-hari-haras-projects.vercel.app/Assets/Webclip.png",
  "description": "Delicious fast food restaurant offering burgers, pizzas, and more. Order online for delivery or takeout!",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Fast Food Lane",
    "addressLocality": "Your City",
    "addressRegion": "Your State",
    "postalCode": "12345",
    "addressCountry": "Your Country"
  },
  "telephone": "+1-234-567-8901",
  "url": "https://project-nexus-hari-haras-projects.vercel.app/",
  "menu": "https://project-nexus-hari-haras-projects.vercel.app/shop",
  "openingHours": "Mo-Su 10:00-22:00"
}
