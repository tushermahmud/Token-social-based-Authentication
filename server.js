const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const mongoose = require("mongoose");
const app = express();
const authRoute = require("./routes/Auth/AuthRoute");

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

//If the page or url is not found
app.use((req, res, next) => {
  res.status(400).json({
    success: false,
    message: "Page not found",
  });
});

//creating server
const PORT = process.env.PORT;
mongoose
  .connect(
    "mongodb+srv://tushermahmud:tushermahmud@cluster0.3btvx.mongodb.net/authentication?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(PORT, (req, res) => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e.message);
  });
