

function printTotal(username, badgeCount, points) {
	const msg = `${username} has ${badgeCount} total badges and ${points} in Javascript`;
	console.log(msg);
}

function getMyInfo(username) {
	const https = require('https');

	https.get(`https://teamtreehouse.com/${username}.json`, response => {
		let body = "";
		response.on("data", data => {
			body += data.toString();
		});

		response.on("end", () => {
			const profile = JSON.parse(body);
			printTotal(username, profile.badges.length, profile.points.JavaScript )
		});
	})

	.on("error", error => {
		console.err(`There was an error: ${error}`);
	});
}

document.querySelector(".points").innerHTML = getMyInfo("davidbarner");





