const PORT = 3000;

// Initial express
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

//initial mongoose
const mongoose = require("mongoose");
const MONGODB_URI = `mongodb://localhost:27017/company`;
mongoose.connect(
  MONGODB_URI,
  {
    useNewUrlParser: true
  }
);

app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}`);
});

const Schema = mongoose.Schema;
const Customers = mongoose.model(
  "customers",
  new Schema(
    {
      first_name: String,
      last_name: String,
      age: Number,
      address: {
        street: String,
        city: String,
        state: String
      }
    },
    {
      timestamps: true
    }
  )
);
