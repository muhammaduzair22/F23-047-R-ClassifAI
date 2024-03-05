const express = require("express");
const axios = require("axios");
const app = express();
require('dotenv').config();
const Hugging_Face_Token= process.env.Hugging_Face_Token
const fetch = require("node-fetch");
const csv = require("csv-parser");
app.use(express.json({ limit: "5mb" }));
const fs = require("fs");
const path = require('path');
app.use(express.json());
const PORT = 3001;
const cors = require("cors");
app.use(cors());
const port = 3001;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

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
      console.log(result);
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
      console.log(input)
      console.log(label);
      return label;
    } catch (error) {
      console.error("Error:", error);
      return "ERROR WHEN PREDICTING";
    }
  };

  //endpoint to load the model 
  app.get("/loadModel", async(req, res)=>{
    try{
        const result = await MakePredections("Load Model");
        console.log(result);
        res.status(200).json({"estimated_time":result.estimated_time});
    }
    catch{
        res.status(500).json({"Error":"Internal Server Error"})
    }
  });

  //endpoint to make predictions from model
  app.post("/makePrediction", async (req, res) => {
    try {
      const result = await MakePredections(req.body.input);
      console.log(result);
      res.status(200).json({"label":result});
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Internal Server Error");
    }
  });