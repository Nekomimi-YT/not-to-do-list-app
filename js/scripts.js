function newItem(){

  //javascript
  //1. Adding a new item to the list of items: 
     let li = document.createElement("li"); // let li = $('list').append('<li></li>'); 
     let inputValue = document.getElementById("input").value; // let inputValue = $('#input').val();
     let text = document.createTextNode(inputValue); // let text = inputValue.text(inputValue); OR keep the same?
     li.appendChild(text); //li.append(text);
  
     if (inputValue === '') {
       alert("You must write something!"); // alert('You must write something!'); 
     } else {
       let list = document.querySelector('#list'); //let list = $('list');
       list.appendChild(li); //list.append(li);
     }
  
   //2. Crossing out an item from the list of items:
     function crossOut() {
       li.classList.toggle("strike"); // li.toggleClass('strike');
     }
  
     li.addEventListener("dblclick",crossOut); //li.on('dblclick',crossOut);
  
   //3(i). Adding the delete button "X": 
     let crossOutButton = document.createElement("crossOutButton"); //let crossOutButton = $('<button class="crossOutButton"></button>')
     crossOutButton.appendChild(document.createTextNode("X")); //crossOutButton.append(document.createTextNode("X"));
     li.appendChild(crossOutButton); //li.append(crossOutButton);
  
     crossOutButton.addEventListener("click", deleteListItem); // crossOutButton.on('click', deleteListItem);
   //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
     function deleteListItem(){
       li.classList.add("delete"); //li.addClass('delete');
     }
   // 4. Reordering the items: 
     $('#list').sortable(); //already in jQuery
  
  }

  
  /*
  Notes from reading:

  $('input').addClass('red');

// Below, only make the .main-button green
$('.main-button').addClass('green');

// Below, make the text of all buttons yellow
$('button').addClass('text--yellow').addClass('green');

let list = $('#list');
let li = $('<li></li>');
list.append(li);

let inputValue = $('#input').val();
li.append(inputValue);

li.addClass('strike');
li.on('click', function () {
  li.addClass('strike');
});

li.addClass('delete');

*/