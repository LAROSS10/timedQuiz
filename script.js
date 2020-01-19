var startQuiz = document.querySelector("#starthere");
var answer1 =document.getElementById("#button1");
var answer2 = document.getElementById("#button2");
var answer3 = document.getElementById("#button3");
var answer4 = document.getElementById("#button5");



startQuiz.addEventListener("click", function(){

})



var quizQuestions = [{
    question: "Please choose the option that best represents the syntax for calling a function",
    options: ["callFunction();","callFunction{};","callFunction => ();", "CallFunction[];"],
    answer: "callFunction();"

}
{
    question: "Which of the below is NOT an option for selecting multiple DOM nodes",
    options: ["QuerySelectorAll","getElementsByClass","GetElementByTagName","getElementById"],
    answer: "getElementById"

}
{
    question: "Which one of the items below is NOT a comparison Operator",
    Options: ["&&","<","!=","==="],
    answer: "&&"
}
 {
     question: "What is the suggested amount of time for study outside of class time in the SMU Bootcamp Certificate Program";
     options: ["5hrs","10hrs","15hrs",["20hrs"]],
     answer: "20hrs"
 }
]