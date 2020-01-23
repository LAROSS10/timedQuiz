let score = 0;
let time = document.querySelector("timer")
let result = document.getElementById("questions")
let secs = 0



function quizStart () {
    
let question1 = prompt(
  "Please choose the option that best represents the syntax for calling a function.   A.)callFunction();     B.) callFunction{};     C.)callFunction=> ();      D.)callFunction[];"
);

 if(question1 == "A" || question1 == "a" ){
    score++; alert("correct")
} else {
    alert("wrong")
}

let question2 = prompt(
  "Which of the below is NOT an option for selecting multiple DOM nodes .A.)querySelectorAll    B.)getElementsByClass    C.)getElementsByTagName    D.)getElementByID"
);

if(question2 == "D" || question2 =="d" ){
    score++; alert("correct")
} else {
    alert("wrong")
}
 
 

let question3 = prompt(
  "Which one of the items below is NOT a comparison operator?  A.)<    B.)&&     C.)!=     D.)==="
);

if(question3 == "B" || question3 == "b" ){
    score++; alert("correct")
} else {
    alert("wrong")
}
 

let question4 = prompt(
    "What is the suggested amount of time for outside study while enrolled in SMU’s Coding Bootcamp? A.)5HRS   B.)10HRS    C.)20HRS    D.)3HRS"
    )


 
 if(question4 == "C" || question4 == "c" ){
    score++; alert("correct")
} else {
    alert("wrong")
     
}

result.innerText += " " + score + " " + "out of 4"
}

function timer () {
    let seconds = 0;
   document.getElementByClass("timer").innerHTML = secs;
   if(secondss <= 0) {
       setTimeout("quizStart",1)
   } else {
       secs = secs -1;
       setTimeout("timer()", 1000);
   }
} 





