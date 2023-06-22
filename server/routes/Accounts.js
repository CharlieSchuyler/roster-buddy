const express = require("express");
const router = express.Router();

// other imports
const sqlite3 = require("sqlite3").verbose();
let sql;
// connect to database

router.get("/", (req, res) => {
	db = connectToDatabase();
	sql = "";

	db.run(sql);
	res.send("a");
});

module.exports = router;

const connectToDatabase = () => {
	const db = new sqlite3.Database("./database/users.db", sqlite3.OPEN_READWRITE, (err) => {
		if (err) return console.error(err);
	});
	return db;
};
