// Array with different user objects, three different users can log in
let users = [
	{
		username: "sebastian.lundström",
		password: "school"
	},
	{
		username: "marcus.johansson",
		password: "school"
	},
	{
		username: "isa.björk",
		password: "school"
	}
]

// Function to call from login page 
let getInfo = () => {
	// Create variables username and password, and set them to the username and password that was inputted by the user on the login page
	let username = document.getElementById("username").value
	let password = document.getElementById("password").value
	
	// For loop that iterates through the user array to find a match, if it doesn't an error msg is displayed in the console
	for(i = 0; i < users.length; i++) {
		// If a match is found, the user will be redirected to the profile page
		if(username == users[i].username && password == users[i].password) {
			
			// Save username in localStorage so that we can call it from the profile page
			localStorage.setItem("loggedInUser", username);
			
			// Console message & redirect to gallery
			console.log(username + " is logged in!")
			window.location.replace("../html/loggedin.html")
		}
	}
	console.log("Wrong username or password!")
}
