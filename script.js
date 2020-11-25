let btnOne = document.getElementById("number1");
/* 
let btnOne - The line above creates a variable called "btnOne".
document.getElementById("number1") - The second part of the line says to look at the DOM document, and to find the element that has the ID of "number1".
*/
btnOne.addEventListener("click",btnOneFunction);
/*
btnOne.addEventListener - This next line attaches an Event Listener to btnOne.
"click" - The event listened for is "click".
btnOneFunction - When click happens it does btnOneFunction.
*/

function btnOneFunction() {
  document.getElementById("display").innerHTML += "1";
};
/*
function - The word function tells Javascript that we are creationg a special type of binding called a function. Functions contain code.
btnOneFunction() - The name of the function comes next followed by().
document - Document tells it to look at the DOM.
getElementById("display") - The getElementByld("display") tells it to look for that element.
innerHTML - innerHTML tells it to change the content of that element.
+= "1" - We are telling the HTML to add 1 to the end of the content.
*/

let ac = document.getElementById("ac");
ac.addEventListener("click", acFunction);

function acFunction(){
  document.getElementById("display").innerHTML = "";
};

let benPlus = document.getElementById("addition"); btnPlus.addEventListener("click", plusFunction);

let number1 = "";
let operator = "";
function plusFunction(){
  number1 = document.getElementById("display").innerHTML;
  //number1 becomes whatever was written on my display
  operator = "+";
  //This stores the operator ssymbol
  document.getElementById("display").innerHTML = "";
  //This makes the display blank
}

let btnEquals = document.getElementById("equals");
btnEquals.addEventListener("click", equalsFunction);

let number2 = "";
let answer = "";
function equalsFuntion(){
  number2 = docu,emt.getElementById("display").innerHTL;
  if(operator="+"){
    anwer = number1 + number2;
    document
  }
}