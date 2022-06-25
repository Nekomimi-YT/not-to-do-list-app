function newItem(){

  //javascript
  //1. Add a new item to the list of items: 
     let li = $('<li></li>'); 
     let inputValue = $('#input').val(); // saves input value without needing createTextNode assignment 
     
     li.append(inputValue);
  
     if (inputValue === '') {
       alert("You must write something!"); 
     } else {
       //COMBINE ORIGINAL JS INTO 1-STEP jQUERY: let list = document.querySelector('#list'); 
       //list.appendChild(li); 
       $('#list').append(li);
     }
  
   //2. Cross out an item from the list of items with doubleckick
     function crossOut() {
      li.toggleClass('strike'); 
     } 

     li.on("dblclick", crossOut);

   //3(i). Add a delete button "X": 
     let crossOutButton = $('<crossOutButton></crossOutButton>');  //Text used as a button.  Not a button element.
     
     crossOutButton.append(document.createTextNode("X")); 
     li.append(crossOutButton); 
  
     crossOutButton.on('click', deleteListItem); 
   
     //3(ii). Add CLASS DELETE (DISPLAY: NONE) from the css:
     function deleteListItem(){
       li.addClass("delete"); 
     }
   // 4. Reorder the items with drag and drop: 
     $('#list').sortable(); 
  
  }

  
  /*
  Original Javascript to translate into jQuery
  
  function newItem(){

//1. Adding a new item to the list of items: 
   let li = document.createElement("li");
   let inputValue = document.getElementById("input").value;
   let text = document.createTextNode(inputValue);
   li.appendChild(text);

   if (inputValue === '') {
     alert("You must write something!");
   } else {
     let list = document.querySelector('#list');
     list.appendChild(li);
   }

 //2. Crossing out an item from the list of items:
   function crossOut() {
 		li.classList.toggle("strike");
 	}

 	li.addEventListener("dblclick",crossOut);

 //3(i). Adding the delete button "X": 
   let crossOutButton = document.createElement("crossOutButton");
 	crossOutButton.appendChild(document.createTextNode("X"));
 	li.appendChild(crossOutButton);

 	crossOutButton.addEventListener("click", deleteListItem);
 //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
   function deleteListItem(){
 		li.classList.add("delete")
 	}
 // 4. Reordering the items: 
   $('#list').sortable();

}
*/