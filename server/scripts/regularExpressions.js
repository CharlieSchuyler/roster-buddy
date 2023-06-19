// this page is very hard to read!

const reBodyData = (data) => {
	const reKey = "(?<=Credit.+Port.+Code).*?(?=Available Date/Time this|PLN Total Credit Hours)";
	const templist = [];
	for (x in data) {
		const re = JSON.stringify(data[x].text).match(reKey);
		templist.push({ captured: re[0], Individual: captureIndividualShifts(re[0]) });
	}

	return templist;
};

const captureIndividualShifts = (data) => {
	// not available | no shifts
	return parseDutys(data);
};

module.exports = { reBodyData, captureIndividualShifts };

//regex of individual dutuys

const parseDutys = (rawRosterData) => {
	data = { isRostered: [], isNotRostered: [] };

	let end = false;
	while (rawRosterData && !end) {
		if (rawRosterData.match(keys.isNotRostered)) {
			currentDuty = rawRosterData.match(keys.isNotRostered);
			rawRosterData = rawRosterData.replace(currentDuty[0], "");

			let date = currentDuty[1].split("/");

			let organisedDuty = { date: { day: date[0], month: date[1] }, role: currentDuty[2], code: currentDuty[3], full: currentDuty[0] };

			data["isNotRostered"].push(organisedDuty);
		} else if (rawRosterData.match(keys.isRostered.main)) {
			currentDuty = rawRosterData.match(keys.isRostered.main);
			rawRosterData = rawRosterData.replace(currentDuty[0], "");

			let date = currentDuty[1].split("/");

			let organisedDuty = { date: { day: date[0], month: date[1] }, role: currentDuty[2], code: currentDuty[3], full: currentDuty[0] };

			data["isRostered"].push(organisedDuty);
		} else if (rawRosterData.match(keys.isRostered.isOvernight)) {
			currentDuty = rawRosterData.match(keys.isRostered.isOvernight);
			rawRosterData = rawRosterData.replace(currentDuty[0], "");

			let date = currentDuty[1].split("/");

			let organisedDuty = { date: { day: date[0], month: date[1] }, role: currentDuty[2], code: currentDuty[3], full: currentDuty[0] };

			data["isRostered"].push(organisedDuty);
		} else if (rawRosterData.match(keys.isRostered.hra_span)) {
			currentDuty = rawRosterData.match(keys.isRostered.hra_span);
			rawRosterData = rawRosterData.replace(currentDuty[0], "");

			let date = currentDuty[1].split("/");

			let organisedDuty = { date: { day: date[0], month: date[1] }, role: currentDuty[2], code: currentDuty[3], full: currentDuty[0] };

			data["isRostered"].push(organisedDuty);
		} else {
			console.log(rawRosterData);
			return { data, rawRosterData };
		}
	}
	console.log(data);
	return { data, rawRosterData };
};

const keys = {
	isNotRostered: /\s*(\d+\/\d+)\s+(\w{3})\s+(LSC|NON AV)\s+(LS|PLN|ASN)/,
	isRostered: {
		main: /\s*(\d+\/\d+)\s+(\w{3})\s+([A-Z0-9]{4,6})+\s+((\w{1,5}\/*)*)\s+((\d{4})\s+(\d{4}))\s+(\d{1,2}:\d{1,2})\s+(\w{3})*\s+(\w*)\s+(\w{2,6})\s+(\d{1,2}:\d{1,2})/,
		hra_span: /\s*(\d+\/\d+)\s+(\w{3})\s+(HRA SPAN)\s+((\d{4})\s+(\d{4}))\s+(\d{1,2}:\d{1,2})\s+(\w{3})*\s+(\w*)\s+(\w{2,6})\s+(\d{1,2}:\d{1,2})/,
		isOvernight: /\s*(\d+\/\d+)\s+(\w{3})\s+((\w{1,5}\/*)*)\s+((\d{4})\s+(\d{4}))\s+(\d{1,2}:\d{1,2})\s+(\w{3})*\s+(\w*)\s+()(\d{1,2}:\d{1,2})/,
	},
};

// hra span
