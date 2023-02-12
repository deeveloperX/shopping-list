var enterButton = document.getElementById("enterButton");
var input= document.getElementById("userInput");
var ul = document.querySelector("ul");
var refreshButton = document.getElementById("refreshButton");

enterButton.addEventListener("click", function(){
    if(input.value.length > 0){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);

        input.value = "";
    }
    else {
        // Show the error message
        errorMessage.style.display = "block";
        
        // Prevent the form from submitting
        event.preventDefault();
      } 

})

input.addEventListener("keypress", function(event){
    if(input.value.length > 0 && event.keyCode===13){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);

        input.value = "";
    }

})

refreshButton.addEventListener("click", function(){
    window.location.reload();
})



// Get a reference to the input field and the error message
var inputField = document.getElementById("userInput");
var errorMessage = document.getElementById("error-message");

// Add an event listener to the input field to detect when the user submits the form
inputField.addEventListener("keydown", function(event) {
  // Check if the user hit enter and the input field is empty
  if (event.key === "Enter" && inputField.value === "") {
    // Show the error message
    errorMessage.style.display = "block";
    
    // Prevent the form from submitting
    event.preventDefault();
  } else {
    // Hide the error message
    errorMessage.style.display = "none";
  }
});