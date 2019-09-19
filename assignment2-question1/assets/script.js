const guessGame = document.getElementById("guessgame");
const result = document.getElementById("result");
let randomNum = Math.floor(Math.random() * 10) + 1;
let didPlay = false;

guessGame.addEventListener("submit", function(e){
	//prevent form from submitting
  e.preventDefault();
 
 // get the chosen number value
  let choice = this.elements.namedItem("choice").value;
 
 //catch incorrect play
  if(choice < 1 || choice > 10 || didPlay == true ){
  	alert("You can't do that!");
    return;
  }
  
  didPlay = true;
  
  //show the results box
  document.querySelector("#result").setAttribute("style", "display: block;");
  
  //check if chosen number is equal to the random number
  if (choice == randomNum){
  	result.innerHTML = 'You win! <br/>';
  }else{
	result.innerHTML = `Guessed wrong, I was thinking ${randomNum} <br/>`;
  }
  
  //add a reset button
  let button = document.createElement("button");
	button.innerHTML = "Play again!"; 
	button.setAttribute("id", "reset");
	result.appendChild(button);
  
  //disable the submit button so they will have to reset
   this.elements.namedItem("submit").disabled= true;

});

//reset the game
document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'reset'){
          result.innerHTML = '';
          didPlay = false;
          document.querySelector("input[name='choice']").value = '';
          randomNum = Math.floor(Math.random() * 10) + 1;
          document.querySelector("input[name='submit']").disabled = false;
          document.querySelector("#result").setAttribute("style", "display: none;");
     }
});
