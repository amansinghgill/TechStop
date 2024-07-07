
# TechStop

TechStop is a mock e-commerce website selling tech products. This project is built using the MERN stack (MongoDB, Express, React, Node.js) and showcases the essential functionalities of an e-commerce web app. The website is hosted on Render.

## Features

- **User Authentication**: Users can create accounts, sign in, and manage their profiles.
- **Product Management**: Users can browse tech products, add them to their cart, purchase them, and leave reviews.
- **Admin Capabilities**: Admin accounts can manage products, users, and orders.
- **Search Functionality**: Users can search for products using the search bar.
- **Payment Integration**: Payments are processed using sandbox PayPal accounts.
- **Security**: Passwords are encrypted using bcrypt for enhanced security.

## App Experience

Visit TechStop [here](https://techstop-sfgo.onrender.com/) to experience the tools firsthand. Below, you will find screenshots of the application.

![Homepage Example](https://github.com/amansinghgill/TechStop/assets/90486946/997018a8-a0b2-4742-aa7e-4369525cdc24)
![Order Details Example](https://github.com/amansinghgill/TechStop/assets/90486946/a26cf452-3772-41e0-b459-62e69f3a54fb)
![Managing Orders Example](https://github.com/amansinghgill/TechStop/assets/90486946/d38fbbb8-c7f9-4218-8b23-76039189db82)

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: bcrypt
- **Payment Integration**: PayPal Sandbox
- **Hosting**: Render

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/amansinghgill/TechStop.git
   cd TechStop
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following:

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PAYPAL_CLIENT_ID=your_paypal_client_id
   ```

4. Run the application:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

