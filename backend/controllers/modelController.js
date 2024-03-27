const fetch = require("node-fetch");
const csv = require("csv-parser");
const fs = require('fs');
require("dotenv").config();
const Hugging_Face_Token = process.env.Hugging_Face_Token;
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

const loadModel = async (req, res) => {
  try {
    const result = await MakePredections("Load Model");
    console.log(result);
    if (result["error"])
      res.status(200).json({ estimated_time: result.estimated_time });
    else
      res.status(200).json({ estimated_time: 20 });
  } catch {
    res.status(500).json({ Error: "Internal Server Error" });
  }
};

const makePredictions = async (req, res) => {
  try {
    const result = await MakePredections(req.body.input);
    res.status(200).json({ label: result });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};



const fileUpload = (req, res) => {
  const file = req.file;
  if (!file) {
    res.status(500).json({ Message: "File upload error" });
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
};

//helper function to create CSV Content
function convertArrayOfObjectsToCSV(array) {
  const header = Object.keys(array[0]).join(","); // Extracting headers
  const rows = array.map((obj) => Object.values(obj).join(",")); // Extracting values and joining with comma
  return `${header}\n${rows.join("\n")}`; // Combining header and rows
}

const makeFilePred = async (req, res) => {
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
    stream.on("end", async () => {
      // res.send(results);
      console.log("results" + results);
      console.log(promsArr);
      await Promise.all(promsArr).then(() => {
        res.status(200).json({
          fileContent: convertArrayOfObjectsToCSV(results),
          dataInsights: [
            { title: "Bugs", value: labelCount.Bug },
            { title: "Feature", value: labelCount.Feature },
            { title: "Questions", value: labelCount.Question },
          ],
        });
      }).catch((e) => {
        console.log(e);
      });
    });
    stream.on("error", (error) => {
      console.error("Error reading file:", error);
      res.status(500).send("Internal Server Error");
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(404).send("ERROR");
  }
};

module.exports = { loadModel, makePredictions, fileUpload, makeFilePred };
