const reBodyData = (data) => {
	const reKey = "(?<=Credit.+Port.+Code).*?(?=Available Date/Time this|PLN Total Credit Hours)";
	const templist = [];
	for (x in data) {
		const re = JSON.stringify(data[x].text).match(reKey);
		templist.push({ captured: re, Individual: captureIndividualShifts(re) });
	}

	return templist;
};

const captureIndividualShifts = (data) => {
	// not available | no shifts
	return parseDutys(data);
};

module.exports = { reBodyData, captureIndividualShifts };

//regex of individual dutuys

const parseDutys = (data) => {
	const rawRosterData = data;
	const prevIsOvernight = false;
	data = { isRostered: [], isNotRostered: [], isOvernight: [] };

	//
	if (rawRosterData[0].match(keys.isNotRostered)) {
		currentDuty = rawRosterData[0].match(keys.isNotRostered);
		rawRosterData[0].replace(keys.isNotRostered);

		let date = currentDuty[1].split("/");

		let organisedDuty = { date: { day: date[0], month: date[1] }, service: currentDuty[1], code: currentDuty[3], full: currentDuty[0] };

		data["isNotRostered"].push(organisedDuty);
	}
	return data;
};

const keys = { isNotRostered: /\s*(\d+\/\d+)\s+(\w{3})\s+(LSC|NON AV)\s+(LS|PLN)/ };
