/* Brandon Kelly
CS-314
Assignment 8
*/

{/* <p>Select the number that you want to scroll to:</p>
<button id="buttonOne">1</button>
<button id="buttonTwo">2</button>
<button id="buttonThree">3</button>
<button id="buttonFour">4</button>
<button id="buttonFive">5</button>
 */}
document.getElementById("buttonOne").addEventListener("click", function() {
  document.getElementById("one").scrollIntoView();
});
document.getElementById("buttonTwo").addEventListener("click", function() {
  document.getElementById("two").scrollIntoView();
});
document.getElementById("buttonThree").addEventListener("click", function() {
  document.getElementById("three").scrollIntoView();
});
document.getElementById("buttonFour").addEventListener("click", function() {
  document.getElementById("four").scrollIntoView();
});
document.getElementById("buttonFive").addEventListener("click", function() {
  document.getElementById("five").scrollIntoView();
});

{/* <p>1. Pick a background color:</p>
<button id="blueButton">Blue</button>
<button id="greenButton">Green</button> */}
document.getElementById("blueButton").addEventListener("click", function(){
  document.getElementById("one").style.backgroundColor = "blue";
});
document.getElementById("greenButton").addEventListener("click", function(){
  document.getElementById("one").style.backgroundColor = "green";
});

{/* 2. Click the button to change between a pink and orange background:</p>
<p>The text on the button will represent the color the user will get.</p>
<button id="pinkButton">Click for pink!</button>
*/}
let sectionTwo = document.getElementById("two");
let sectionTwoButton = document.getElementById("pinkButton");
sectionTwoButton.addEventListener("click", function(){
  if (sectionTwoButton.innerHTML === "Click for pink!") {
    sectionTwo.style.backgroundColor = "pink";
    sectionTwoButton.innerHTML = "Click for orange!";
  }
  else {
    sectionTwo.style.backgroundColor = "orange";
    sectionTwoButton.innerHTML = "Click for pink!";
  }
});

{/* <p>3. Input text to add to the list below</p>
<input type="text" id="inputText">
<button id"submitButton">Submit</button>
<ul id="threeList">
  <li>One</li>
  <li>Green</li> 
*/}
let threeList = document.getElementById("threeList");
let inputText = document.getElementById("inputText");
let submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function(){
  let userInput = document.getElementById("inputText").value;
  var newListItem = document.createElement('li');
  newListItem.appendChild(document.createTextNode(userInput));
  threeList.appendChild(newListItem);
});

{/* <p>4. If an item is clicked, remove it from the list.</p>
<ul id="fourList">
  <li>Bob</li>
  <li>Tim</li>
  <li>Jack</li>
  <li>Sam</li>
 */}
let fourList = document.getElementById("fourList");
let fourListContent = fourList.getElementsByTagName("li");
for (var n=0; n<fourListContent.length; n++) {
  let liItem = fourListContent[n]
  liItem.addEventListener('click', function() {
    fourList.removeChild(liItem);
  });
}


{/* <p>5. If an item is clicked, select it (highlight it) and de-select everything else.</p>
<p>This doesn't have to be pretty.</p>
<p>Just change the background color of the selected item with a class.</p>
 */}
let fiveList = document.getElementById("fiveList");
let fiveListContent = fiveList.getElementsByTagName("li");
for (var n=0; n<fiveListContent.length; n++) {
  let liItem = fiveListContent[n]
  liItem.addEventListener('click', function() {
    for (var n=0; n<fiveListContent.length; n++) {
      fiveListContent[n].style.backgroundColor = "transparent";
    }
    liItem.style.backgroundColor = "purple";
  });
}