const express = require("express");
const router = express.Router();

const fs = require("fs");
const pdfjsLib = require("pdfjs-dist");

// Set the workerSrc property before using any PDF.js functionality
pdfjsLib.GlobalWorkerOptions.workerSrc = "pdfjs-dist/build/pdf.worker.js";

let pdfPath = "./uploads/Roster_664150_23Feb23_1719.pdf";

router.get("/read", async (req, res, next) => {
	try {
		const text = await performTextSelection();
		res.send(text);
	} catch (error) {
		console.error("Error reading PDF:", error);
		res.status(500).send("Error reading PDF");
	}
});

async function performTextSelection() {
	const loadingTask = pdfjsLib.getDocument(pdfPath);
	const pdf = await loadingTask.promise;
	const data = [];
	try {
		// Load the PDF document
		const loadingTask = pdfjsLib.getDocument(pdfPath);
		const pdfDocument = await loadingTask.promise;

		// Iterate over each page of the PDF
		for (let pageNumber = 1; pageNumber <= pdfDocument.numPages; pageNumber++) {
			const page = await pdfDocument.getPage(pageNumber);

			// Extract text content from the page
			const textContent = await page.getTextContent();
			const textItems = textContent.items;

			// Concatenate the text items to form the complete page text
			const pageText = textItems.map((item) => item.str).join(" ");
			console.log(`Page ${pageNumber} Text: ${pageText}`);

			data.push({ pageNumber: pageNumber, text: pageText });
		}
		return data;
	} catch (error) {
		console.error("Error reading PDF:", error);
		throw error;
	}
}

const getBodyData = () => {
	const reKey = "(?<=Credits+Ports+Codes+)(.*?)(?=s+Available Date/Time this|?=s+PLN Total Credit Hours)";
};

module.exports = router;
