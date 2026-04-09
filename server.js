
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const flash = require('express-flash');
const methodOverride = require('method-override');
const path = require('path');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

//db

mongoose.connect(
"mongodb+srv://Skillusere:123456789ch@cluster0.ggxvd8w.mongodb.net/skillswap?retryWrites=true&w=majority"
)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("MongoDB connection error:", err));

//passport
require('./config/passport')(passport);


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.use(session({
  secret: "skill-swap-secret-key-2024",
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: "mongodb+srv://Skillusere:123456789ch@cluster0.ggxvd8w.mongodb.net/skillswap?retryWrites=true&w=majority"
  }),
  cookie: { maxAge: 1000 * 60 * 60 * 24 }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use((req, res, next) => {
  res.locals.user = req.user || null;
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// routes
app.get('/', (req, res) => res.render('home'));

app.use('/auth', require('./routes/auth'));
app.use('/profile', require('./routes/profile'));
app.use('/match', require('./routes/match'));
app.use('/chat', require('./routes/chat'));
app.use('/reviews', require('./routes/review'));
app.use('/admin', require('./routes/admin'));
app.use('/video', require('./routes/video'));

//  SOCKET.IO 
io.on("connection", (socket) => {

  console.log("User connected:", socket.id);

  //  VIDEO
  socket.on("join-room", (roomId) => {
    socket.join(roomId);
  });

  socket.on("offer", ({ roomId, offer }) => {
    socket.to(roomId).emit("offer", offer);
  });

  socket.on("answer", ({ roomId, answer }) => {
    socket.to(roomId).emit("answer", answer);
  });

  socket.on("ice-candidate", ({ roomId, candidate }) => {
    socket.to(roomId).emit("ice-candidate", candidate);
  });

  // ===== CHAT =====
  socket.on("join-chat", (roomId) => {
    socket.join(roomId);
  });

  socket.on("send-message", (data) => {
    socket.to(data.roomId).emit("receive-message", data);
  });

});

//  SERVER START 
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});