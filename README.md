# 🎓 AI-Powered Learning Management System (LMS)

A modern, full-stack Learning Management System built with **React**, **Node.js**, **Express**, **MongoDB**, **Cloudinary**, **Razorpay**, and integrated with **Google Gemini 2.5 Flash AI** for intelligent course discovery.

---

## 🚀 Features

### 💻 Student Features
- **Smart AI Search**: Search courses using natural language powered by Google Gemini AI.
- **Course Discovery**: Browse published courses categorized by topic and skill level (Beginner, Intermediate, Advanced).
- **Interactive Course Player**: Stream video lectures and track learning progress.
- **Secure Payments**: Purchase courses seamlessly using Razorpay integration.
- **User Authentication**: Secure Sign-up, Sign-in, JWT Token authentication, and Firebase Google Login.
- **Password Recovery**: OTP-based password reset via Nodemailer.
- **Reviews & Ratings**: Rate and review enrolled courses.

### 🛡️ Instructor / Admin Features
- **Admin Dashboard**: Analytics overview of courses and student enrollments.
- **Course Management**: Create, edit, publish/unpublish courses, and manage pricing.
- **Lecture Builder**: Upload video lectures and materials directly to Cloudinary.
- **Profile Management**: Update instructor details and avatar.

---

## 🛠️ Tech Stack

| Domain | Technologies Used |
| :--- | :--- |
| **Frontend** | React 19, Vite, Redux Toolkit, React Router v7, Tailwind CSS, Recharts, Firebase Auth |
| **Backend** | Node.js, Express.js, MongoDB (Mongoose), JWT, Cookie-Parser, Multer |
| **Cloud Services** | Cloudinary (Media Storage), Nodemailer (SMTP Email Services) |
| **Integrations** | Google Gemini 2.5 Flash API (`@google/genai`), Razorpay Payment Gateway |

---

## 📁 Project Structure

```
LMS/
├── backend/                  # Express.js REST API
│   ├── configs/              # DB, Cloudinary, Mail & Token configurations
│   ├── controllers/          # Auth, Course, AI, Order, Review & User logic
│   ├── middlewares/          # JWT auth guard & Multer upload middleware
│   ├── models/               # Mongoose Schemas (User, Course, Lecture, Order, Review)
│   ├── routes/               # API endpoint definitions
│   ├── index.js              # Server entry point
│   └── .env                  # Backend environment variables
│
└── frontend/                 # React + Vite application
    ├── src/
    │   ├── pages/            # Home, Login, ViewCourse, ViewLecture, Admin pages
    │   ├── redux/            # Store & slices (user, course, lecture, review)
    │   └── utils/            # Firebase config
    ├── .env                  # Frontend environment variables
    └── vite.config.js
```

---

## ⚙️ Environment Variables Setup

### Backend Environment (`backend/.env`)
```env
PORT=8000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
EMAIL=your_email@gmail.com
EMAIL_PASS=your_email_app_password
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_SECRET=your_razorpay_secret
GEMINI_API_KEY=your_google_gemini_api_key
```

### Frontend Environment (`frontend/.env`)
```env
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
VITE_FIREBASE_APIKEY=your_firebase_api_key
```

---

## 🏁 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB database (Local or MongoDB Atlas)

### 1. Run the Backend Server
```bash
cd backend
npm install
npm run dev
```
> Server runs on `http://localhost:8000`

### 2. Run the Frontend Client
```bash
cd frontend
npm install
npm run dev
```
> Client runs on `http://localhost:5173`

---

## 📜 License
This project is open source and available under the [ISC License](LICENSE).
