const express = require("express");
const app = express();
const port = 5000;

const path = require("path");

const multer = require("multer");
storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "uploads");
	},

	filename: (req, file, cb) => {
		console.log(file);
		cb(null, Date.now() + path.extname(file.originalname));
	},
});
// file upload
const upload = multer({ storage: storage });

app.set("view engine", "ejs");

app.get("", (req, res) => {
	res.render("index");
});

app.post("/upload", upload.single("image"), (req, res) => {
	res.send("Uploaded");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
