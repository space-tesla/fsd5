const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) return res.send("No file uploaded.");
  res.send("Uploaded: " + req.file.filename);
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
