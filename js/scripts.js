function newItem(){

  //javascript
  //1. Adding a new item to the list of items: 
     let li = $('<li></li>'); // INCORRECT let li = $('list').append('<li></li>'); 
     
     let inputValue = $('#input').val(); // CORRECT! let inputValue = $('#input').val();
     // Didn't need this! ==> let text = document.createTextNode(inputValue); 
     // let text = inputValue.text(inputValue); OR keep the same?
     
     li.append(inputValue); //CORRECT SYNTAX/ WRONG variable li.append(text);
  
     if (inputValue === '') {
       alert("You must write something!"); // CORRECT! alert('You must write something!'); 
     } else {
       //COMBINE THESE INTO 1 STEP: let list = document.querySelector('#list'); //let list = $('list');
       //list.appendChild(li); //list.append(li);
       $('#list').append(li);
     }
  
   //2. Crossing out an item from the list of items:
     function crossOut() {
      li.toggleClass('strike'); // CORRECT! li.toggleClass('strike');
     } 
  
     li.on("dblclick", crossOut);
     /*function crossOut() {
      li.toggleClass('strike');
     }); // NEEDED TO ADD A FUNCTION li.on('dblclick',crossOut); ?? WHY?  ==> NOT NEEDED! REPETITITVE CODE IN THE "ANSWER" */

   //3(i). Adding the delete button "X": 
     let crossOutButton = $('<crossOutButton></crossOutButton>'); 
     //NOT REALLY A BUTTON! let crossOutButton = $('<button class="crossOutButton"></button>')
     
     crossOutButton.append(document.createTextNode("X")); //CORRECT! crossOutButton.append(document.createTextNode("X"));
     li.append(crossOutButton); //CORRECT! li.append(crossOutButton);
  
     crossOutButton.on('click', deleteListItem); // CORRECT! crossOutButton.on('click', deleteListItem);
   //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
     function deleteListItem(){
       li.addClass("delete"); //CORRECT! li.addClass('delete');
     }
   // 4. Reordering the items: 
     $('#list').sortable(); //CORRECT: already in jQuery
  
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