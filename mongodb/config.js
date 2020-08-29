const mongoose = require("mongoose");
const mongoPassword = process.env.mongoPassword;
//Connecting Mongodb
mongoose
  .connect(
    `mongodb+srv://melving:${mongoPassword}@cluster0.iolty.mongodb.net/learncaptain?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((db) => {
    console.log("Mongodb Connected .");
  })
  .catch((err) => {
    console.log(err);
  });
