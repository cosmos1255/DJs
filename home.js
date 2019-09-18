function initLogin() {
	// collect all information
	var lUser = document.getElementById('loginUsername').value;
	var lPass = document.getElementById('loginPassword').value;

	// send info to server
	var login = {
		"username" : lUser,
		"password" : lPass
	};
	console.log("strigified json: " + JSON.stringify(login));

	async function sendLogin() {
		const response = await fetch(JSON.stringify(login));
		const rawData = await response.json();
		const data = JSON.parse(rawData);
		// recieve info and test
		if (data.name == "ok") {
			// load index2
		} else {
			// show error message to client
		}
	}
	sendLogin();
}

function initSignup() {
	// collect all information
	var fiName = document.getElementById('fname').value;
	var laName = document.getElementById('lname').value;
	var email = document.getElementById('Email').value;
	var sUser = document.getElementById('signupUsername').value;
	var sPass = document.getElementById('signupPassword').value;

	// send info to server
	var signup = {
		"firstname" : fiName,
		"lastname" : laName,
		"email" : email,
		"username" : sUser,
		"password" : sPass
	};
	console.log("strigified json: " + JSON.stringify(signup));

	async function sendSignup() {
		const response = await fetch(signup);
		const rawData = await response.json();
		const data = JSON.parse(rawData);
		// recieve info and test
		if (data.name == "ok") {
			// load index2
		} else {
			// show error message to client
		}
	}
	sendSignup();
}