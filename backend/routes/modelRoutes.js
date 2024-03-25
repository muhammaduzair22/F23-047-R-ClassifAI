const router = require('express').Router();
const { checkLoggedIn } = require("../middleware");
const { loadModel, makePredictions, fileUpload, makeFilePred } = require("../controllers/modelController")

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


router.get("/loadModel",checkLoggedIn,loadModel)
router.post("/makePrediction",checkLoggedIn,makePredictions)
router.post("/fileUpload",upload.single("csv"),checkLoggedIn,fileUpload)
router.get("/makePrediction/:filename",checkLoggedIn,makeFilePred)

module.exports = router;