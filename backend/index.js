const express = require("express");
const axios = require("axios");
const app = express();
require("dotenv").config();

const Hugging_Face_Token = process.env.Hugging_Face_Token;
const fetch = require("node-fetch");
const csv = require("csv-parser");
app.use(express.json({ limit: "5mb" }));
const fs = require("fs");
const path = require("path");
app.use(express.json());
const PORT = 3001;
const cors = require("cors");
app.use(cors());
const port = 3001;
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
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

//Helper function to make call to Model for predictions
const MakePredections = async (input) => {
  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/harrisaamir/NLBSE24",
      {
        headers: {
          Authorization: Hugging_Face_Token,
        },
        method: "POST",
        body: JSON.stringify({ inputs: input }),
      }
    );
    let result = await response.json();

    if (result["error"]) {
      return result;
    }
    result = result[0];
    let label = "";
    console.log(result[0]);
    switch (result[0].label) {
      case "LABEL_0":
        label = "Bug";
        break;
      case "LABEL_1":
        label = "Feature";
        break;
      case "LABEL_2":
        label = "Question";
        break;
      default:
        label = "ERROR WHEN PREDICTING";
        break;
    }
    return label;
  } catch (error) {
    console.error("Error:", error);
    return "ERROR WHEN PREDICTING";
  }
};

//endpoint to load the model
app.get("/loadModel", async (req, res) => {
  try {
    const result = await MakePredections("Load Model");
    console.log(result);
    res.status(200).json({ estimated_time: result.estimated_time });
  } catch {
    res.status(500).json({ Error: "Internal Server Error" });
  }
});

//endpoint to make predictions from model
app.post("/makePrediction", async (req, res) => {
  try {
    const result = await MakePredections(req.body.input);
    res.status(200).json({ label: result });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

//helper functions for file upload
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

//file uplaod endpoint
app.post("/fileUpload", upload.single("csv"), (req, res) => {
  const file = req.file;
  if (!file) {
    res.status(500).json({ Message: "File uplad error" });
  }
  fs.readFile(file.path, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return res.status(500).json({ message: "Error reading file" });
    }
    console.log("File uploaded Successfully");
    res
      .status(200)
      .json({ message: "File uploaded successfully", fileName: file.filename });
  });
});

//helper function to create CSV Content
function convertArrayOfObjectsToCSV(array) {
  const header = Object.keys(array[0]).join(","); // Extracting headers
  const rows = array.map((obj) => Object.values(obj).join(",")); // Extracting values and joining with comma
  return `${header}\n${rows.join("\n")}`; // Combining header and rows
}

//endpoint to make predictions based on filename
app.get("/makePrediction/:filename", async (req, res) => {
  const filename = "uploads/" + req.params.filename;
  let labelCount = { Bug: 0, Feature: 0, Question: 0 };
  const promsArr = [];
  try {
    const results = [];
    const stream = fs
      .createReadStream(filename, { encoding: "utf-8" })
      .pipe(csv())
      .on("data", async (data) => {
        try {
          promsArr.push(
            MakePredections(data["Issue"]).then((label) => {
              data["label"] = label;
              labelCount[label]++;
              results.push(data);
            })
          );
        } catch (error) {
          console.error("Error making predictions:", error);
        }
      });
    stream.on("end", () => {
      // res.send(results);
      console.log("results" + results);
      console.log(promsArr);
      Promise.all(promsArr)
        .then(() => {
          res
            .status(200)
            .json(
              {
                fileContent: convertArrayOfObjectsToCSV(results), dataInsights: [
                  { title: 'Bugs', value: labelCount.Bug },
                  { title: 'Feature', value: labelCount.Feature },
                  { title: 'Questions', value: labelCount.Question }]
              });
        })
        .catch((e) => {
          console.log(e);
        });
    });
    stream.on("error", (error) => {
      console.error("Error reading file:", error);
      res.status(500).send("Internal Server Error");
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(404).send("NOT");
  }
});
