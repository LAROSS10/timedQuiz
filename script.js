var startQuiz = document.getElementById("startHere");
var answer1 =document.getElementById("button1");
var answer2 = document.getElementById("button2");
var answer3 = document.getElementById("button3");
var answer4 = document.getElementById("button5");
var questionArea = document.getElementById("questionArea")
var firstQuestion = document.getElementById("option1");
var secondQuestion = document.getElementById("option2");
var thirdQuestion = document.getElementById("option3");
var fourthQuestion = document.getElementById("option4");
var firstQuestionText = "Please choose the option that best represents the syntax for calling a function"
var secondQuestionText = "Which of the below is NOT an option for selecting multiple DOM nodes"
var thirdQuestionText = "Which one of the items below is NOT a comparison Operator"
var fourthQuestionText = "What is the suggested amount of time for study outside of class time in the SMU Bootcamp Certificate Program"
var question1OptionA = "callFunction();"
var question1OptionB = "callFunction{};"
var question1OptionC = "callFunction => ();"
var question1OptionD = "CallFunction[];"
var question2OptionA = "QuerySelectorAll"
var question2OptionB = "getElementsByClass"
var question2OptionC = "GetElementByTagName"
var question2OptionD = "getElementById"
var question3OptionA = "&&"
var question3OptionB = "<"
var question3OptionC = "!="
var question3OptionD = "==="
var question4OptionA = "5hrs"
var question4OptionB = "10hrs"
var question4OptionC = "15hrs"
var question4OptionD = "20hrs"
var suggestedOption1 = document.getElementById("#suggestedOption1");


var suggestedOption1
var suggestedOption1
var suggestedOption1



// console.log(firstQuestion.innerText,secondQuestion.innerText,thirdQuestion.innerText,fourthQuestion.innerText);

startQuiz.addEventListener("click", () => {
    // console.log("you clicked me") 
    questionArea.innerText = firstQuestionText;   
    firstQuestion.innerText =  question1OptionA;
    secondQuestion.innerText = question1OptionB;
    thirdQuestion.innerText = question1OptionC;
    fourthQuestion.innerText = question1OptionD;

    

    // console.log(firstQuestion.innertext);

   

})










// var quizQuestions = [{
//     question: "Please choose the option that best represents the syntax for calling a function",
//     options: ["callFunction();,"callFunction{}";","callFunction => ();", "CallFunction[];"],
//     answer: "callFunction();"

// }
// {
//     question: "Which of the below is NOT an option for selecting multiple DOM nodes",
//     options: ["QuerySelectorAll","getElementsByClass","GetElementByTagName","getElementById"],
//     answer: "getElementById"

// }
// {
//     question: "Which one of the items below is NOT a comparison Operator",
//     Options: ["&&","<","!=","==="],
//     answer: "&&"
// }
//  {
//      question: "What is the suggested amount of time for study outside of class time in the SMU Bootcamp Certificate Program";
//      options: ["5hrs","10hrs","15hrs",["20hrs"]],
//      answer: "20hrs"
//  }
// ]