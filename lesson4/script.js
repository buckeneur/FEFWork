//Check phone numbef format
function phoneNumberFormat(phoneNumber) {
    phoneNumber = document.getElementById("phNumber").value;
    let phoneRegex = /^\(\d\d\d\) \d\d\d-\d\d\d\d$/g;
    phoneNumber.match(phoneRegex) ? alert("Valid number entered") : alert("Phone number entered is invalid");
}


//Try and catch an error
function checkMe() {
    let newNumber = document.getElementById('chDigit').value;
    let x = (parseInt(newNumber));
    try {
    if (x < 5) throw true;
    if (x === 5) throw "That is the right number";
    if (x > 5) throw "Try a smaller number";
} catch (err) {
    alert(err)
}
}

//Check if names are entered in correct format
function nameCheck(firstName, lastName) {
firstName = document.getElementById("fName").value;
lastName = document.getElementById("lName").value;
//first letter capitalized; more than one character; no special characters
let nameRegex = /^[A-Z][a-z]+$/g;
firstName.match(nameRegex) ? console.log("First name is correct") : alert("First name is not valid");
lastName.match(nameRegex) ? console.log("Last name is correct") : alert("Last name is not valid");
alert("Your name is correct.")
}

//A better check of the name format
function betterNameCheck(firstName, lastName) {
    firstName = document.getElementById("fName").value;
    lastName = document.getElementById("lName").value;
    //first letter capitalized; more than one character; no special characters
    let nameRegex = /^[A-Z][a-z]+$/g;
    firstName.match(nameRegex) ? console.log("First name is correct") : alert("First name is not valid");
    lastName.match(nameRegex) ? console.log("Last name is correct") : alert("Last name is not valid");
    alert("Your name is correct.")
    }