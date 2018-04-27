// Brandon Kelly
// CS314: Web Development
// Assignment 9
$( document ).ready(function() {
  getData();
});

function getData() {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    success: function(display){
      
      for (let user of display){
        let userName = document.createElement("div");
        let usersCompany = document.createElement("div");
        let usersEmail = document.createElement("div");
        let usersSquare = document.createElement("div");
        userName.innerHTML = user.name;
        usersCompany.innerHTML = user.company.name;
        usersEmail.innerHTML = user.email;        
        usersSquare.className="usersSquare";
        usersSquare.setAttribute("id", `user${user.id}`);
        usersSquare.append(userName, usersCompany, usersEmail);        
        

        let usersSquareButtons = document.createElement("div");

        let albumsButton = document.createElement("div");
        albumsButton.innerHTML = "Display Albums";        
        albumsButton.className="button";

        albumsButton.setAttribute("isDisplayed", "false");
        $(albumsButton).click(function() {
          $(`#todosSection${user.id}`).hide();
          
          if($(albumsButton).attr("isDisplayed") == "true"){
            $(`#albumsSection${user.id}`).toggle();  
          }
          else {
            getAlbums(user.id);
            albumsButton.setAttribute("isDisplayed", "true");   
          }
        })
        usersSquareButtons.append(albumsButton);
        
        let todoButton = document.createElement("div");
        todoButton.innerHTML = "Display ToDos";        
        todoButton.className = "button";
        todoButton.setAttribute("isDisplayed", "false");

        $(todoButton).click(function() {
          $(`#albumsSection${user.id}`).hide();
          
          if($(todoButton).attr("isDisplayed") == "true"){
            $(`#todosSection${user.id}`).toggle();            
          }
          else {
            getTodos(user.id);
            todoButton.setAttribute("isDisplayed", "true"); 
          }
        });
        usersSquareButtons.append(todoButton);
        usersSquare.append(usersSquareButtons);
        $("#userSection").append(usersSquare);
      }
    }
  });
}

function getAlbums(userID) {
  $.ajax({
    url: `https://jsonplaceholder.typicode.com/albums?userId=${userID}`,
    success: function(display){
      let albumsSection = document.createElement("div");
      albumsSection.setAttribute("id",`albumsSection${userID}`)
      for (let album of display){
        let albumItem = document.createElement("div");
        albumItem.innerHTML=`${album.title}`;
        albumsSection.append(albumItem);
      }
      $(`#user${userID}`).append(albumsSection);
    }
  });
}

function getTodos(userID) {
  $.ajax({
    url: `https://jsonplaceholder.typicode.com/todos?userId=${userID}`,
    success: function(display){
      let todosSection = document.createElement("div");
      todosSection.setAttribute("id",`todosSection${userID}`)      
      for (let todo of display){
        let todoEntry = document.createElement("div");
        if (todo.completed == false){
          todoEntry.innerHTML=`<a class="far fa-square" style="margin-right:10px; margin-top:10px; color:red"></a>${todo.title}`;
        }
        else {
          todoEntry.innerHTML=`<a class="far fa-check-square" style="margin-right:10px; margin-top:10px; color:green"></a>${todo.title}`;
        }
        todosSection.append(todoEntry);
      }
      $(`#user${userID}`).append(todosSection);
    }
  });
}
