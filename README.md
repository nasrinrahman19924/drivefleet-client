
🚗 DriveFleet BD - Car Rental Platform

🌐 Live Website

Frontend: https://drivefleet-client-dd1z.vercel.app
Backend: https://drivefleet-server-psi-dusky.vercel.app

📌 Project Overview

DriveFleet BD is a full-stack MERN based Car Rental Platform where users can explore available cars, book cars, manage their own listed vehicles, and securely authenticate using Email/Password or Google Login.

This platform includes modern UI/UX, JWT Authentication, Protected Routes, Search & Filter functionality, Booking System, and Responsive Design.

✨ Key Features


🔐 Authentication & Security

User Registration & Login
Google Authentication
JWT Token Authentication
HTTPOnly Cookie Security
Protected Private Routes
Secure Backend API
🚘 Car Management

Add New Car
Update Car Information
Delete Car
View All Cars
View Car Details
Availability Status

📅 Booking System

Book Available Cars
Driver Requirement Option
Special Booking Notes
Total Price Calculation
My Bookings Page
Booking Count Increment System

🔍 Search & Filter

Search Cars by Name
Filter by Car Type
Dynamic Query Support

🎨 UI/UX Features

Fully Responsive Design
Modern Interface
Toast Notifications
Loading Spinner
Sweet User Experience
Custom 404 Page


🛠️ Technologies Used

####Frontend

React.js
Next.js
Tailwind CSS
HeroUI
React Hot Toast

####Backend

Node.js
Express.js
MongoDB
JWT
Cookie Parser
CORS
Authentication
Better Auth Authentication
Google Login
JWT Authentication


📂 Project Structure

src/
│
├── app/
│   ├── page.jsx
│   ├── login/
│   ├── register/
│   ├── explore-cars/
│   ├── add-car/
│   ├── my-bookings/
│   ├── my-cars/
│   └── api\auth\[...all]
│
├── components/
│   ├── cards
│   ├── dashboard
│   ├── home
│   ├── modals
│   ├── shared
|
├── Services/api
├── lib/
└── proxy



🗄️ Database Collections



Cars Collection
{
  carName,
  dailyRentPrice,
  carType,
  imageUrl,
  seatCapacity,
  pickupLocation,
  description,
  availability,
  booking_count,
  userEmail,
  createdAt
}
Bookings Collection
{
  carId,
  userEmail,
  driverNeeded,
  specialNote,
  bookingDate,
  totalPrice
}


🔑 JWT Authentication Flow

Login Process
User logs in
Server generates JWT token
Token stored in HTTPOnly Cookie
Middleware verifies token for protected routes
Example
jwt.sign(user, secret)
res.cookie("token", token,{
   httpOnly:true
})


🔒 Protected Routes

The following routes are private:

Add Car
My Bookings
My Added Cars

Users must be authenticated to access these pages.



🔎 Search Functionality

Users can search cars dynamically by car name.

/cars?search=sports


🎯 Filter Functionality

Cars can be filtered by type:
SUV
Sedan
Sports
Luxury


📈 Booking Count Increment

Every successful booking increases the booking count automatically using MongoDB $inc.

$inc:{
   booking_count:1
}
🚀 Deployment

Frontend Deployment:: Vercel
Backend Deployment:: Vercel

⚙️ Environment Variables

Client Side

NEXT_PUBLIC_API_URL=
MONGODB_URI=
JWT_SECRET=
BETTER_AUTH_SECRET=
GOOGLE_CLIENTID=
GOOGLE_SECRET=

Server Side

MONGODB_URI=
JWT_SECRET=
PORT=


📸 Home Page Sections

Hero Banner
Available Cars
Footer


Premium Services
📱 Responsive Design

This project is fully responsive for:

Mobile Devices
Tablets
Laptops
Desktop Screens

📦 NPM Packages Used

npm install react-hot-toast
npm install axios
npm install jsonwebtoken
npm install cookie-parser
npm install cors
npm install mongodb
npm better auth and many more


👨‍💻 Author


G. M. SHAHINUR RAHMAN

📄 License

This project is created for educational and assignment purposes.