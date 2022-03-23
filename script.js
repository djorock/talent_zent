// (i) Demonstrate Document Object Model(DOM) in your domain project
console.log(document);




//(ii) Implement Event Handling (click)
const submitButton = document.querySelector('.submit-button');



submitButton.addEventListener("click", function(e){
    alert("Implementation of Event Handling  (Click)");
})