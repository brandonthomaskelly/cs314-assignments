function toggleNavMenu(){
    $('.header').toggleClass('menu-expanded');
    $('.top-menu').toggleClass('collapse');
}

$(window).on('load',function(){
    $('.toggle-nav').click(toggleNavMenu)
});


// API calls
function Get(url){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",url,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

// API
var json_obj = JSON.parse(Get("https://www.themealdb.com/api/json/v1/1/random.php"));

// DATA
var newDiv = document.createElement("div");
var tableRow = document.createElement("tr");
var mealName = document.createElement("td");
var mealCategory = document.createElement("td");
var mealArea = document.createElement("td");
var mealThumb = document.createElement("img");


mealName.innerHTML = json_obj.meals[0].strMeal;
mealCategory.innerHTML = json_obj.meals[0].strCategory;
mealArea.innerHTML = json_obj.meals[0].strArea;
mealThumb.setAttribute("src", json_obj.meals[0].strMealThumb);
mealThumb.setAttribute("class", "card img-thumb");

tableRow.appendChild(mealName);
tableRow.appendChild(mealCategory);
tableRow.appendChild(mealArea);

document.getElementById("table-data").appendChild(tableRow);

newDiv.appendChild(mealThumb);
newDiv.setAttribute("style","text-align:center; margin-bottom:30px")

var api = document.getElementById("container-api");
var button = document.getElementById("button");

api.insertBefore(newDiv,button);

//RECIPE INFO
var list = document.createElement("ol")
var ingredients = [];
for(i =0;i<21;i++){
    var pos = i;
    pos++;
    var ingredient = "strIngredient" + i;
    if(json_obj.meals[0].ingredient != ""){
        ingredients.push(json_obj.meals[0][ingredient]);
    }
}
ingredients.shift();

for(i in ingredients){
    if(ingredients[i]!=""){
        var li = document.createElement('li');
        li.innerHTML = ingredients[i];
        document.getElementById("ingredients").appendChild(li);
    }
}

var instructions = document.createElement("p");
var instructionStr = json_obj.meals[0].strInstructions;
instructionStr = instructionStr.replace(/(?:\r\n|\r|\n)/g, '<br>');

instructions.innerHTML = instructionStr;
instructions.setAttribute("class","stylized")


document.getElementById("info-container").appendChild(instructions);

$('#reload').click(function(){
    location.reload();
})


$('#info').click(function(){
    $('.hidden-info').slideDown();
})


