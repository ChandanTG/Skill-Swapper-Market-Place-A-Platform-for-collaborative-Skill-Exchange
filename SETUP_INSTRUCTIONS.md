# Quick Setup Instructions

## Prerequisites
Before running the application, you need to have MongoDB installed and running.

### Install MongoDB (if not already installed):

**On macOS:**
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**On Windows:**
Download and install from: https://www.mongodb.com/try/download/community
Then start MongoDB service from Services or run `mongod`

**On Linux:**
```bash
sudo apt-get install mongodb
sudo systemctl start mongodb
```

## Running the Application

1. Make sure MongoDB is running on port 27017

2. Start the application:
```bash
npm start
```

3. Open your browser and go to:
```
http://localhost:3000
```

## First Time Usage

1. Click "Register" to create a new account
2. After login, you'll be redirected to create your profile
3. Fill in:
   - Skill you can offer (e.g., "Python Programming")
   - Skill you want to learn (e.g., "Java Programming")
   - Optional: Bio, Experience, Availability
4. Click "Create Profile"
5. Go to "Find Matches" to see users whose skills match yours perfectly
6. Send connection requests to users you want to swap skills with
7. When they accept, you can start chatting!

## Testing the Matching System

To test the matching system, you need at least 2 users:

**User 1:**
- Offers: Python
- Wants: Java

**User 2:**
- Offers: Java
- Wants: Python

These two users will appear as "Perfect Matches" to each other!

## Features Available

- ✅ User Registration & Login (secure with bcrypt)
- ✅ Profile Creation & Editing
- ✅ Smart Bidirectional Skill Matching
- ✅ Connection Request System (Send/Accept/Reject)
- ✅ Real-time Chat Messaging
- ✅ Video Call UI Icon (visual only, no functionality)
- ✅ Fully Responsive Design (Bootstrap 5)
- ✅ Beautiful Modern UI

## Default Configuration

- MongoDB: `mongodb://localhost:27017/skillswap`
- Port: `3000`
- Session Secret: Already configured in `.env`

## Troubleshooting

**Issue: "MongoDB Connection Error"**
- Make sure MongoDB is running: `brew services list` (macOS) or check Services (Windows)
- Try: `mongosh` to test connection

**Issue: "Port 3000 already in use"**
- Change PORT in `.env` file to another port (e.g., 3001)

**Issue: Module not found**
- Run: `npm install` again

## Project Structure

```
skill-swap-marketplace/
├── config/           # Configuration files (database, passport)
├── models/           # Mongoose models (User, Profile, Request, Message)
├── routes/           # Express routes (auth, profile, match, chat)
├── views/            # EJS templates
│   ├── partials/    # Header & Footer
│   └── *.ejs        # Page templates
├── public/          # Static files
│   ├── css/         # Custom styles
│   └── js/          # Frontend JavaScript
├── middleware/      # Authentication middleware
└── server.js        # Main application entry point
```

Enjoy your Skill Swap Marketplace! 🎉
