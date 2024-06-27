const mongoose = require("mongoose");

const dataBaseConnection = () => {
  const mongoUrl = process.env.MONGO_LOCAL_URL;
  mongoose
    .connect(mongoUrl)
    .then((data) => {
      console.log(`Database connected on port: ${data.connection.port}`);
    })
    .catch((err) => {
      console.log("Database Connection Error:", err);
    });
};
module.exports = dataBaseConnection;
