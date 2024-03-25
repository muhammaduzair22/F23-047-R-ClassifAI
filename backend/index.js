const express = require("express");
const axios = require("axios");
const app = express();
require("dotenv").config();
app.use(express.json({ limit: "5mb" }));
app.use(express.json());
const PORT = 3001;
const cors = require("cors");
app.use(cors());
const port = 3001;
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const modelRoutes = require('./routes/modelRoutes');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://i200494:AshishJumani12.@cluster0.a66rya1.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use(bodyParser.json())
app.use('/auth', authRoutes);
app.use("/model",modelRoutes)