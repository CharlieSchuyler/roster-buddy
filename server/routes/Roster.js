const express = require("express");
const router = express.Router();

const fs = require("fs");
const pdf = require("pdf-parse");

let dataBuffer = fs.readFileSync("./uploads/Roster_664150_23Feb23_1719.pdf");

router.get("/read", (req, res, next) => {
	pdf(dataBuffer).then(function (data) {
		res.send(data.text.split("\n"));
	});
});

// read file

module.exports = router;
