# SHOPPER_E-Commerce_Website

Shopper is a full-stack eCommerce website built using the MERN Stack (MongoDB, Express, React, Node.js). It allows users to browse products, add items to their cart, and make secure payments.

🚀 Features
🔐 User Authentication (Login & Signup)
📦 Product Listing & Categories
🛒 Shopping Cart & Wishlist
💳 Secure Payment Integration (Stripe)
⭐ Ratings & Reviews
📜 Order History & Management
📊 Admin Dashboard (Product & User Management)
📧 Email Notifications (Nodemailer)
🔎 Search & Filter Products
🖼️ Responsive UI (Tailwind CSS)
🛠 Tech Stack

Frontend
⚛️ React.js (with React Router)
🎨 Tailwind CSS

Backend
🖥️ Node.js & Express.js
🛢️ MongoDB (Mongoose)
🔑 JSON Web Tokens (JWT) for Authentication
📩 Nodemailer (for email verification)
💳 Stripe for Payments

Install Dependencies
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

 API Endpoints

Authentication
POST /signup - Register a new user
POST /login - User login
POST /logout - Logout user

Products
GET /products - Fetch all products
GET /products/:id - Fetch product details
POST /products - Add new product (Admin only)

Cart
GET /cart - Fetch cart items
POST /cart/add - Add item to cart
POST /cart/remove - Remove item from cart

Orders
POST /checkout - Create an order
GET /orders - Fetch user orders

Running the Application

1️⃣ Start the Backend Server

cd backend
npm start

2️⃣ Start the Frontend Server
cd frontend
npm start
The application should now be running on http://localhost:3000/
backend on http://localhost:4000

👥 Contributors
Mansi Parikh-https://github.com/Mansi-2004


![image](https://github.com/user-attachments/assets/a2f066e3-f033-438a-bbd3-871b53b50a74)

📜 License
This project is licensed under the MIT License.

