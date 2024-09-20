const express = require("express");
const session = require("express-session");
const cors = require("cors");
const app = express();
const userRouter = require("./routes/user");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(
  session({
    saveUninitialized: false,
    resave: false,
  })
);
app.use("/user", userRouter);

app.listen(3001, () => {
  console.log("hihi");
});
module.exports = app;
