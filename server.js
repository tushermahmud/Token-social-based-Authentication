const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const redis = require("redis")
const mongoose = require("mongoose");
const app = express();
const authRoute = require("./routes/Auth/AuthRoute");
const userRoute = require('./routes/User/UserRoute');
const conversationRoute = require("./routes/Conversations/ConversationRoute")
const messageRoute = require("./routes/Messages/MessageRoute")
require("dotenv").config({
  path: "./config/config.env",
});

//setting swagger
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "LogRocket Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",

      contact: {
        name: "sazzad mahmud",
      },
    },
    servers: [
      {
        url: "http://localhost:6000/",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

//only for development server

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//use all routers
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/conversation", conversationRoute);
app.use("/api/messages", messageRoute);

//If the page or url is not found
app.use((req, res, next) => {
  res.status(400).json({
    success: false,
    message: "Page not found",
  });
});

//setting redis server
const client = redis.createClient(process.env.REDIS_PORT||6379)




//connecting database
mongoose
  .connect(
    "mongodb+srv://tushermahmud:tushermahmud@cluster0.3btvx.mongodb.net/authentication?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("database connected")
  })
  .catch((e) => {
    console.log(e.message);
  });

//creating server
const PORT = process.env.PORT;
let server = app.listen(PORT, (req, res) => {
  console.log(`server is running on port ${PORT}`);
});
const io = require("socket.io")(server, {
  cors: {
    origin: process.env.CLIENT_URL,
  },
});

//socket.io
let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  //when ceonnect
  console.log("a user connected.");

  //take userId and socketId from user
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  //send and get message
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    if(user!==undefined){
      io.to(user.socketId).emit("getMessage", {
        senderId,
        text,
      });
    }
    
  });

  //when disconnect
  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});