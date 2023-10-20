# Flipkart Clone with MERN Stack

![Flipkart Clone](./client/public/logo512.png)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a full-stack clone of the Flipkart e-commerce platform built using the MERN (MongoDB, Express, React, Node.js) stack. The application offers a user-friendly interface that allows users to:

- **Log in and log out**: Users can create an account, log in, and securely log out.

- **View products**: Users can browse and view a wide range of products available on the platform.

- **Add to cart**: Users can add products to their shopping cart for later purchase.

- **Remove products from the cart**: Users can easily remove products from their shopping cart.

## Features

- User Authentication: Users can register and log in, and their data is securely stored.

- Product Listing: A wide range of products are displayed, categorized for easy navigation.

- Shopping Cart: Users can add and remove products from their shopping cart.

## Technologies Used

- **MERN Stack**:
  - **MongoDB**: A NoSQL database for storing user data and product information.
  - **Express**: A Node.js web application framework for building the server.
  - **React**: A JavaScript library for building the user interface.
  - **Node.js**: A runtime environment for running JavaScript on the server.

- **Other Technologies**:
  - **Redux**: Used for state management in the front-end.
  - **JWT (JSON Web Tokens)**: For user authentication and authorization.
  - **Bootstrap**: For styling and layout.
  - **Axios**: For making HTTP requests.
  
## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/akhilbharti21/Flipkart-Clone-main
   ```

2. Change directory to the project folder:

   ```bash
   cd flipkart-clone
   ```

3. Install server dependencies:

   ```bash
   cd server
   npm install
   ```

4. Install client dependencies:

   ```bash
   cd client
   npm install
   ```

5. Create a `.env` file in the `server` directory to store sensitive information such as your MongoDB URI and JWT secret:

   ```env
    # DB_USERNAME
    # PORT 
    # DB_PASSWORD
    # CLUSTER
   ```

6. Run the server and client:

   ```bash
   # In the server directory
   npm start

   # In the client directory
   npm start
   ```

The server will start at `http://localhost:5000`, and the client at `http://localhost:3000`.

## Usage

1. Create an account or log in.

2. Browse products on the platform.

3. Add products to your cart.

4. Remove products from your cart.

5. Log out when you're done.

