// Brandon Kelly
// Web Development CS 314-01

'use strict';

// Create a function that asks for a true/false from the user ( confirm() ) and handles the
// answer from the user with an if/else statement.
function confirmation() {
    let response = confirm("Do you want to proceed?");
    if (response) {
        alert("You are proceeding!");
    } else {
        alert("You did not proceed."); 
    }
}
confirmation();

// Use a ternary operator instead of an if/else statement.
function confirmationTernary() {
    let response = confirm("Do you want to proceed? (ternary)");
    response ? alert("You are proceeding!") : alert("You did not proceed.");
}
confirmationTernary();

// Create a function that asks a user for a NUMBER input ( prompt() ) and handle the users response with an alert based on what they type. 
// You should handle the cases of nothing being entered, ‘cancel’ being selected, and something other than a number being
// entered. With each case, a different alert() message should be shown to the user.
function favNumber() {
    let response = prompt("What is your favorite number?");
    if (response === "") {
        alert("Do you usually not follow instructions?");
    } else if (response === null) {
        alert("Ok. Good troll.")
    } else if (isNaN(Number(response))) {
        alert("Nice.");
    } else {
        alert(Number(response) + "? Horrible choice.");
    }
}
favNumber();

// Create a constructor function that constructs an object that contains at least 3
// key-value pairs. One of the key-value pairs must be a function that references another key in that object.
function Location(city, state) {
    return {
        city, state, speaking: function () {
            alert("You live in " + this.city + " " + this.state + "?");
        }
    }
}

function copier(ob, newThing = null, thing = null) {
    return (thing !== null && newThing !== null) ? Object.assign(thing, ob) : Object.assign({}, ob);
}

let i = new Location("Richland", "Washington");
i.speaking();

let locationCopy = copier(i, true, { zipcode: 99352, county: "Benton County", obPrint: function() {
    alert("Full Location: " + 
    this.city + ", " + 
    this.state + ", " + 
    this.zipcode + ", \n" + 
    this.county);
 }
});

locationCopy.obPrint();
console.log("First object: ", i);
console.log("Second object: ", locationCopy);


// // Create a function declaration that takes 2 strings and has an optional 3rd string parameter. If there is no 3rd parameter, provide a default. 
// // This function will return a single string incorporating these 3 parameters.
// function makeStrings(city, state, country="United States") {
//      console.log("City: " + city + " State: " + state + ", Country (Optional): " + country);
// }
// makeStrings(i.city, i.state, i.country);
// makeStrings(locationCopy.city, locationCopy.state, locationCopy.country);

// // Now comment out the above, and rewrite the function as a function expression.
// var makeStrings = function makeStrings(city, state, country="United States") {
//     console.log("City: " + city + ", State: " + state + ", Country (Optional): " + country);
// }
// makeStrings(i.city, i.state, i.country);
// makeStrings(locationCopy.city, locationCopy.state, locationCopy.country);

// Now comment out the above, and rewrite the function expression using an arrow
// function. 
var makeStrings = (city, state, country="United States") => {
    console.log("City: " + city + ", State: " + state + ", Country (Optional): " + country);
}
makeStrings(i.city, i.state, i.country);
makeStrings(locationCopy.city, locationCopy.state, locationCopy.country);