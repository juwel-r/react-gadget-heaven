# Product Rating Website

A React-based product rating website where users can view and rate various products. The website displays a star rating system to show product ratings.

## Live Website Link
- https://gadget-heaven-r6.netlify.app/


## Project Overview
This project allows users to view product ratings and rate products themselves using an interactive star-rating system. The project is built using React and showcases fundamental React concepts and features.

## Key React Fundamentals Used
- **Components**: Created modular, reusable components for the star rating, product display, and rating form.
- **Props**: Passed product data and rating values between components using props.
- **State Management**: Used React's `useState` and `useEffect` hooks to manage local component state.
- **Context API**: Employed Context API for global state management to handle user ratings across the application.
- **Routing**: Utilized `react-router-dom` for navigating between pages (e.g., product listings and details).

## Data Handling and Management
For handling and managing data in this project:
- **Context API**: Used for global state management, allowing consistent access to user data, ratings, and product information across components.
- **Local Storage**: Stored user ratings in local storage so that ratings persist even when the page is refreshed.

## Website Features
- **Interactive Star Rating**: Users can view and submit ratings for each product using a star-rating system.
- **Product Listings and Details**: Displays a list of products and detailed information for each product, including the current rating.
- **Responsive Design**: The website is optimized for various screen sizes, providing a seamless user experience on mobile, tablet, and desktop.
- **Persistent Ratings**: User ratings are saved in local storage, ensuring data is not lost on page reload.
- **Dynamic Navigation**: Allows users to navigate easily between product listings, product details, and the rating page.
