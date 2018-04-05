// Brandon Kelly

// 1. Char Swap - Write a JavaScript function to create a new string from an input string from
// the user swapping the position of first and last characters. The string length entered by
// the user must be greater than or equal to 1.
let userInput;
function characterSwapFunc(string) {
    let swappedLast = string.slice(0,1);    
    let swappedFirst = string.slice(userInput.length - 1);
    let normalString = string.slice(1, userInput.length - 1);
    let swappedString = swappedFirst.concat(normalString, swappedLast);
    return swappedString;
}

function charSwap(){
    userInput = prompt("What is your favorite music artist?");
    while (userInput == null || userInput == ' ' || userInput.length < 1){
        alert("Your input must be at least one character long.");
        userInput = prompt("What is your favorite music artist?");        
    }
    if (userInput !== null || userInput !== ' ' || userInput.length >= 1){
        let swappedString = characterSwapFunc(userInput);
        console.log("Your favorite music artist when swapping the position of first and last characters is:  \n", swappedString);
    }
}
charSwap();

// 2. Hi String - Write a JavaScript function that asks for a string from the user and returns a
// new string adding "Hi" in front of the input string. If the input string begins with "Hi" then
// return the original string. The string length entered by the user must be greater than or
// equal to 1.
function hiString(){
    userInput = prompt("What is your nickname?");
    while (userInput == null || userInput == ' ' || userInput.length < 1) {
        alert("Your input must be at least one character long.");
        userInput = prompt("What is your nickname?");
    }
    if (userInput.startsWith('Hi')){
        console.log(userInput);
    } else {
        console.log('Hi ' + userInput);
    }
}
hiString();

// 3. Three Chars to Front - Write a JavaScript function to create a new string from an input
// string taking the last 3 characters and adding them to the front of the string. The string
// length entered by the user must be at least 3 characters long.
function threeCharSwap(){
    userInput = prompt("Enter a string that is at least 3 characters long");
    while (userInput == null || userInput == ' ' || userInput.length < 3) {
        alert("Your input was not at least three characters long.");        
        userInput = prompt("Enter a string that is at least 3 characters long");
    } 
    if (userInput !== null || userInput !== ' ' || userInput.length >= 3) {
        let length = userInput.length;
        let swappedFirst = userInput.slice(length - 3, length);
        userInput = userInput.slice(0, length - 3);
        let swappedString = swappedFirst.concat(userInput);
        console.log("Your string with the last three characters added to the front of the string is: " + swappedString);
    }
}
threeCharSwap();

// 4. Strings to Sentence - Write a JavaScript function that asks for a list of items from the
// user separated by commas. Convert this to an array without the commas or extra
// spaces. Alert the items back to the user with a single saying that is formed using
// backticks (``).
// Example:
// input from user: blue, dogs, chocolate
// output from function: My favorite color is blue, dogs are awesome, and I love chocolate!
function stringsToSentence() {
    let userInputs;
    let list = prompt("Enter a list of three words separated by commas: ");
    userInputs = list.split(',');
    alert(`I think ${userInputs[0]} and ${userInputs[1]} and ${userInputs[2]} are nice.`)
}
stringsToSentence();

// 5. Upper or Lower - Write a JavaScript function that asks for a string from the user and
// creates a new string from that string where the first 3 characters are lowercase. If the
// string length entered by the user is less than 3 convert all the characters in upper case.
function upperOrLower(){
    let newString = "";    
    let userInput = prompt("Enter a string longer than 3 characters: ");    
	while(userInput == null || userInput == " ") {
		alert("You did not follow instructions, please try again.");
		userInput = prompt("Enter a string longer than 3 characters: "); 
	}
	if(userInput.length > 3) {
		newString = userInput.slice(0,3);
		newString = newString.toLowerCase() + userInput.slice(3,userInput.length);
	} else {
		newString = userInput.toUpperCase();
	}
	alert("Your new string is: " + newString);
}
upperOrLower();

// 6. Integer Swap - Write a JavaScript function that asks for a comma separated list of
// numbers from the user and swap the first and last elements of a given array of integers.
// Alert the result to the user. The array length given from the user should be at least 1.
function integerSwap(){
    let userInput = prompt("Enter at least 1 or more numbers separated by commas: ");        
	while (userInput == null || userInput == " " || userInput.length < 1) {
        alert("You did not follow instructions, please try again.");
        userInput = prompt("Enter at least 1 or more numbers separated by commas: ");  
    }
    if (isNaN(userInput)) {
        alert("That is not a number")
        userInput = prompt("Enter at least 1 or more numbers separated by commas: ");          
    }
	let numArray = userInput.split(",");
	let last = numArray.pop();
	let first = numArray.shift();
	numArray.unshift(last);
    numArray.push(first);
    
	alert("After swapping the first and last elements of the given array we get: " + numArray);
}
integerSwap();


// 7. Longest String - Write a JavaScript function that asks for a comma separated list of
// strings from the user and alerts the longest string from the given array of strings.
function longestString(){
    let userInput = prompt("Enter a comma separated list of strings: ");            
	while (userInput == null || userInput == " ") {
		alert("You did not follow instructions, please try again.");
        userInput = prompt("Enter a comma separated list of strings: ");          
    }
	let stringArray = userInput.split(",");
	let longestString = 0;
	let currLongestString = 0;

	for(let i = 0; i < stringArray.length; i++) {
		if(stringArray[i].length > longestString) {
			longestString = stringArray[i].length;
			currLongestString = i;	
		}
	}
	alert("The longest string from the list you entered is: " + stringArray[currLongestString]);
}
longestString();

// 8. Largest Even Number - Write a JavaScript function that asks for a comma separated list
// of numbers from the user. Convert this list to an array of numbers and alert the largest
// even number from the array of integers.
function largestEvenNumber() {
    let userInput = prompt("Enter a comma separated list of numbers: ");                
	while(userInput == null || userInput == " ") {
		alert("You did not follow instructions, please try again.");
        userInput = prompt("Enter a comma separated list of numbers: ");  
    }
    if (isNaN(userInput)) {
        alert("That is not a number")
        userInput = prompt("Enter a comma separated list of numbers: ");          
    }
	let largestEvenNum = 0;
	let newNum;

	for(let i = 0; i < userInput.length; i++) {
		if(userInput[i] > largestEvenNum && userInput[i] % 2 == 0) {
			largestEvenNum = userInput[i];
		}
	}
    alert("The largest even number in the list you provided is: " + largestEvenNum);    
}
largestEvenNumber();

// 9. Current Day Time - Write a JavaScript function that alerts the current day and time in the
// following format:
// Example:
// Today is Friday.
// It is 4:00PM.
function getDOW() {
    let day = new Date();
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let DOW = weekday[day.getDay()];
 return DOW;
}

function getDayTime(){
    let time = getTime();    
    let day = getDOW();
    alert(`Today is ${day}. \nIt is ${time}.`);
}

function timeFormat(time){
    if (time < 10) {
        time = "0" + time;
    }
 return time;
}

function getTime(){
    let period;
    let d = new Date;
    let h = timeFormat(d.getHours());
    if (h < 24 && h > 12){
        h = h - 12;
        period = 'PM';
    } else if (h == 24) {
        h = 12;
        period = 'AM';
    } else {
        period = 'AM';
    }
    let m = timeFormat(d.getMinutes());
    let time = h + ":" + m + period;
 return time;
}
getDayTime();

// 10. Unlimited Function - Write a JavaScript function that accepts an unlimited number of
// arguments and prints them out in a single string in a single alert.
function unlimitedFunction(){
    userInput = prompt("Enter as many words, phrases or numbers as you want, separated by commas:");
    while (userInput == null || userInput == ""){
        alert("Your entry was null, please try again.");
        userInput = prompt("Enter as many words, phrases or numbers as you want, separated by commas:");
    }
    if (userInput !== null) {
        let stringArray = userInput.split(",");
        let newString = arrayMapping(stringArray);
        alert(`Your combined string is:\n${newString}`);
    }
   
}

function arrayMapping(combinedArr){
    let userString = '';
    combinedArr = combinedArr.map(item => item + ' ');
    for (let i = 0; i < combinedArr.length; i++){
        userString = userString + combinedArr[i];
    }
    return userString;
}
unlimitedFunction();
