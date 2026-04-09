# Skill Swap Marketplace

A web application that allows users to exchange skills. Users can offer a skill they know and find matches with users who want to learn that skill while offering something they want to learn in return.

## Features

- User Registration & Login (Passport.js Local Strategy)
- Profile Creation/Editing (Skill Offered, Skill Wanted)
- Smart Matching Algorithm (bidirectional skill matching)
- Send/Accept/Reject Connection Requests
- Real-time Messaging System
- Video Call UI (Icon only, no functionality)
- Responsive Design (Bootstrap 5)

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript, Bootstrap 5
- **Backend**: Node.js, Express.js
- **Templating**: EJS
- **Database**: MongoDB with Mongoose
- **Authentication**: Passport.js (Local Strategy), bcrypt
- **Session Management**: express-session, connect-mongo

## Prerequisites

Before running this application, make sure you have:

- Node.js (v14 or higher)
- MongoDB (running locally or MongoDB Atlas account)

## Installation

1. Clone or download this project

2. Install dependencies:
```bash
npm install
```

3. Make sure MongoDB is running locally on port 27017, or update the `.env` file with your MongoDB connection string

4. Start the application:
```bash
npm start
```

For development with auto-restart:
```bash
npm run dev
```

5. Open your browser and navigate to:
```
http://localhost:3000
```

## Usage

1. **Register**: Create a new account with your name, email, and password
2. **Create Profile**: After login, create your profile by specifying:
   - Skill you can offer
   - Skill you want to learn
   - Optional: Bio, Experience, Availability
3. **Find Matches**: Visit the "Find Matches" page to see perfect matches
4. **Send Requests**: Send connection requests to users who match your criteria
5. **Accept Requests**: Accept incoming requests from other users
6. **Chat**: Once connected, chat with your skill swap partner
7. **Video Call**: Click the video call icon (UI only, no actual video functionality)

## Project Structure

```
skill-swap-marketplace/
├── config/
│   ├── database.js          # Database configuration
│   └── passport.js          # Passport authentication config
├── models/
│   ├── User.js              # User model
│   ├── Profile.js           # Profile model
│   ├── Request.js           # Connection request model
│   └── Message.js           # Message model
├── routes/
│   ├── auth.js              # Authentication routes
│   ├── profile.js           # Profile management routes
│   ├── match.js             # Matching and request routes
│   └── chat.js              # Chat/messaging routes
├── views/
│   ├── partials/
│   │   ├── header.ejs       # Header partial
│   │   └── footer.ejs       # Footer partial
│   ├── home.ejs             # Home page
│   ├── register.ejs         # Registration page
│   ├── login.ejs            # Login page
│   ├── profile.ejs          # Profile view page
│   ├── edit-profile.ejs     # Profile edit page
│   ├── find-match.ejs       # Match finding page
│   └── chat.ejs             # Chat page
├── public/
│   ├── css/
│   │   └── style.css        # Custom styles
│   └── js/
│       └── main.js          # Frontend JavaScript
├── middleware/
│   └── auth.js              # Authentication middleware
├── server.js                # Main application file
├── package.json             # Dependencies
└── .env                     # Environment variables

## Database Security

The database is configured to be accessible only through the application. Regular users cannot directly access the database. All database operations are performed through the application's backend routes with proper authentication checks.

## Default Environment Variables

```
MONGODB_URI=mongodb://localhost:27017/skillswap
SESSION_SECRET=skill-swap-secret-key-2024
PORT=3000
```

## Notes

- Make sure MongoDB is running before starting the application
- The matching algorithm works bidirectionally (User A offers what User B wants AND User B offers what User A wants)
- Users must create a profile before appearing in the Find Match page
- Messages are stored in MongoDB (no real-time WebSocket implementation)
- Video call is UI only (displays an icon but has no functionality)

## License

ISC
