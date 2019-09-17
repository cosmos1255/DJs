function initLogin()
{
	// collect all information
	var lUser = document.getElementById('loginUsername').value;
	var lPass = document.getElementById('loginPassword').value;

	// send info to server
	const api = "http://localhost:3000/api";
	const apikey = "filler_key";
	const url = api + "/" + lUser + "/" + lPass + "/" + apikey;

	async function sendLogin()
	{
		const response = await fetch(url);
		const data = await response.json();
		alert("pausing");

		// recieve info and test
		if (data.name == "ok")
		{
			// load index2
		} else
		{
			alert("Invalid username or password.");
		}
	}

	console.log(url);
	sendLogin();
}

function initSignup()
{
	// collect all information
	var fiName = document.getElementById('fname').value;
	var laName = document.getElementById('lname').value;
	var email = document.getElementById('Email').value;
	var sUser = document.getElementById('signupUsername').value;
	var sPass = document.getElementById('signupPassword').value;

	// send info to server
	var api = "http://local:3000/api";
	var apikey = "filler";
	var url = api + "/" + fiName + "/" + laName + "/" + email + "/" + sUser + "/" + sPass + "/" + apikey;

	alert(url);
	// recieve info and test
}
