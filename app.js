const express = require("express"),
  app = express(),
  path = require("path"),
  bodyParser = require("body-parser"),
  flash = require("connect-flash");
(passport = require("passport")), (cors = require("cors"));
//using cors for all reqs
app.use(cors());
//serving static files
app.use(express.static(path.resolve(__dirname, "public/asecapp/build")));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
//using passport session and initialising passport.
app.use(passport.initialize());
//connect flash
app.use(flash());
//Serialising User Into Session.
passport.serializeUser(function (user, done) {
  done(null, user);
});
//Deserialising User From Session.
passport.deserializeUser(function (user, done) {
  done(null, user);
});

//custom routes
const userRoutes = require("./routes/user.routes");
const apiRoutes = require("./routes/api.routes");
//user routes catcher
app.use("/user", userRoutes);
//api routes catcher
app.use("/api", apiRoutes);

//SETTING PORT
const PORT = process.env.PORT || 5000;
//listening on port
app.listen(PORT, () => {
  console.log(`Learn Captain Running on port : ${PORT}`);
});

//Requiring mongodb for connection.
require("./mongodb/config");
