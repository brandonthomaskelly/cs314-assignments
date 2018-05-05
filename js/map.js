
function toggleNavMenu(){
  $('.header').toggleClass('menu-expanded');
  $('.top-menu').toggleClass('collapse');
}

$(window).on('load',function(){
    $('.toggle-nav').click(toggleNavMenu)
});


  $('.why').click(function(){
    $('.hidden-panel-why').slideToggle();
  });
$('.hidden-panel-why').click(function(){
    $('.hidden-panel-why').slideUp();
});
  

// API CALL
function Get(url){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",url,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}


// MAP
function initMap() {
    var french = {lat: 46.227638, lng: 2.213749000000007};
    var canada = {lat: 56.130366, lng: -106.34677099999999};
    var mexican = {lat: 23.634501, lng: -102.55278399999997};

    // Extra credit custom map
    var styledMapType  = new google.maps.StyledMapType([
      {
        "featureType": "water",
        "stylers": [
          { "visibility": "on" },
          { "color": "#1A87D6" }
        ]
      },{
        "featureType": "landscape",
        "stylers": [
          { "color": "#AFFFA0" }
        ]
      },{
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          { "color": "#59A499" }
        ]
      },{
        "featureType": "poi",
        "stylers": [
          { "color": "#EAFFE5" }
        ]
      },{
      },{
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
          { "color": "#F0FF8D" },
          { "weight": 2.2 }
        ]
      },{
        "featureType": "poi.business",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "poi.government",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "administrative.locality",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
      },{
      }
    ], {name: 'Styled Map'});

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 2,
      center: french
    });
    
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');


    //FRENCH
    var marker = new google.maps.Marker({
      position: french,
      map: map
    });
    marker.addListener('click', function() {
        var json_obj = JSON.parse(Get("https://www.themealdb.com/api/json/v1/1/filter.php?a=French"));
        var randomNumber = Math.floor(Math.random() * json_obj.meals.length) + 0  
        var contentString = "<p class='recipe-map' id =" + json_obj.meals[randomNumber].strMeal + ">" + json_obj.meals[randomNumber].strMeal + "</p>";
        var infowindowF = new google.maps.InfoWindow({
            content: contentString
          });
        infowindowF.open(map, marker);
      });


    // CANADIAN
    var markerCanada = new google.maps.Marker({
      position: canada,
      map: map
    });
    markerCanada.addListener('click', function() {
        var json_obj = JSON.parse(Get("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"));
        var randomNumber = Math.floor(Math.random() * json_obj.meals.length) + 0  
        var contentString = "<p class='recipe-map' id =" +json_obj.meals[randomNumber].strMeal + ">" + json_obj.meals[randomNumber].strMeal + "</p>";
        var infowindowC = new google.maps.InfoWindow({
            content: contentString
          });
        infowindowC.open(map, markerCanada);
      });

    // MEXICAN
    var markerMexico = new google.maps.Marker({
      position: mexican,
      map: map
    });
    markerMexico.addListener('click', function() {
        var json_obj = JSON.parse(Get("https://www.themealdb.com/api/json/v1/1/filter.php?a=Mexican"));
        var randomNumber = Math.floor(Math.random() * json_obj.meals.length) + 0  
        var contentString = "<p class='recipe-map' id =" +json_obj.meals[randomNumber].strMeal + ">" + json_obj.meals[randomNumber].strMeal + "</p>";
        var infowindowM = new google.maps.InfoWindow({
            content: contentString
          });
        infowindowM.open(map, markerMexico);
      });

      $('#map').on("click","p.recipe-map" ,function(){
        var clickedBtnID = $(this).attr('id');
        var recipeName = document.getElementById(clickedBtnID).innerHTML;
        var json_obj = JSON.parse(Get("https://www.themealdb.com/api/json/v1/1/search.php?s="+recipeName));
        console.log(clickedBtnID);


        var modal = document.createElement("div");
        modal.setAttribute("class","modal");
        var modalDiv = document.createElement("div");
        modalDiv.setAttribute("class","modal-content");
        var modalBodyDiv = document.createElement("div");
        modalBodyDiv.setAttribute("class","modal-body");
        var headerDiv = document.createElement("div");
        headerDiv.setAttribute("class","modal-header");
        var footerDiv = document.createElement("div");
        footerDiv.setAttribute("class","modal-footer");
        var ol = document.createElement("ol");
        var close = document.createElement("span");
        var h2 = document.createElement("h2");
        var img = document.createElement('img');

        
        img.setAttribute("src",json_obj.meals[0].strMealThumb);
        img.setAttribute("class","card img-thumb");
        close.setAttribute("class","close");
        close.innerHTML = "&times;";
        h2.innerHTML = recipeName;
        ol.setAttribute("id","ingredients");
        ol.setAttribute("style","min-height=100%")

        modalBodyDiv.appendChild(ol);
        modalBodyDiv.appendChild(img);
        headerDiv.appendChild(h2);
        headerDiv.appendChild(close);
        modalDiv.appendChild(headerDiv);
        modalDiv.appendChild(modalBodyDiv);
        modalDiv.appendChild(footerDiv);
        modal.appendChild(modalDiv);
            
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
          if(ingredients[i]!=""&&ingredients[i]!=null){
            var li = document.createElement('li');
                li.innerHTML = ingredients[i];
                ol.appendChild(li);
            }
        }

        var instructions = document.createElement("p");
        var instructionStr = json_obj.meals[0].strInstructions;
        instructionStr = instructionStr.replace(/(?:\r\n|\r|\n)/g, '<br>');
    
        instructions.innerHTML = instructionStr;
        instructions.setAttribute("class","stylized")
        instructions.setAttribute("style","min-height=100%")
    
        modalBodyDiv.appendChild(instructions);

        document.body.appendChild(modal);

        close.onclick = function(){
          document.body.removeChild(modal);
        }

        window.onclick = function(event) {
          if (event.target == modal) {
            document.body.removeChild(modal);
          }
      }
      })
}