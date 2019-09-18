function initLogin() {
	// collect all information
	var lUser = document.getElementById('loginUsername').value;
	var lPass = document.getElementById('loginPassword').value;

	// send info to server
	const api = "http://localhost:3000/filler";
	const apikey = "";
	const url = api + "/" + lUser + "/" + lPass + "/" + apikey;

	async function sendLogin() {
		const response = await fetch(url);
		const data = await response.json();

		// recieve info and test
		if (data.name == "ok") {
			// load index2
		} else {
			// show error message to client
		}
	}
	console.log(url);
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
	const api = "http://localhost:3000/filler";
	const apikey = "";
	const url = api + "/" + fiName + "/" + laName + "/" + email + "/" + sUser + "/" + sPass + "/" + apikey;

	async function sendSignup() {
		const response = await fetch(url);
		const data = await response.json();

		// recieve info and test
		if (data.name == "ok") {
			// load index2
		} else {
			// show error message to client
		}
	}
	console.log(url);
	sendSignup();
}
