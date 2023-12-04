const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const compression = require("compression");
const ConnectDB = require("./database/database");

//connexion with mongoDB
ConnectDB();

// App middlewares
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get('/home', (req, res) => {
  res.status(200).json('Welcome, your app is working well');
})


// App routes
app.use("/auth", require("./routes/auth.routes"));

io.on("connection", (socket) => {
  socket.on("comment", (comment) => {
    io.emit("comment", comment);
  });

  socket.on("disconnect", () => {});
});
// Start server
server.listen(process.env.PORT, () => {
  console.log(`Server started on PORT: ${process.env.PORT}`);
});

module.exports = app;
