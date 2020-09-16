
// Define variables that will need to be used. 
// Links and Buttons
var highScoreLink= $("#highScoreLink");
var startbtn = $("#startBtn");
var btnA = $("#btnA");
var btnB = $("#btnB");
var btnC = $("#btnC");
var btnD = $("#btnD");
var submitBtn =$("#submitBtn");
var timer= $("#timer"); 

// Containers/Pages to be hidden or displayed
var startingPage= $("#startingPage");
var questionContainer= $("#questionContainer");
var scorePage= $("#scorePage");
var highPage =$("#highPage");

// Score, Time, Index tracker
var score=0; 
var questionIndex=0;
var secondsLeft= 60;

// At load Start page is shown, everything else hidden
timer.css('display', 'none'); 
questionContainer.css('display', 'none'); 
scorePage.css('display', 'none');
highPage.css('display', 'none');

// Timer

// When you click start then the setTime function**
setTime();

function setTime(){
   var timerInterval = setInterval(function() {
   secondsLeft --; 
   timer.textContent="Time: " + secondsLeft + " seconds";
  
   if(secondsLeft === 0) {
      clearInterval(timerInterval);
      //When clock reaches 0 then go to score page** 
    }
   }, 1000) 
};

// Make Question and Answer Function to propogate on page
function generateQuestion(index){   
// connecting to premade element
   var ques = document.querySelector("#quesHolder");
   // Add content
   ques.textContent =questionArray[index].question
}
// Make Question Array
var questionArray= [

{question: "A stellate object has what shape?",
 answers: ["A: Spiral", "B: Star", "C: Conical", "D: Hexagon"],
 correct: "B: Star",
},{
question: "What is a Vitrine?",
answers: ["A: Fossilized log", "B: A type of vitamin", "C: A glass display cabinet", "D: A Norse women warrior"],
correct: "C: A glass display cabinet",
},{
question: "What does Schmuck in German literally mean?", 
answers: ["A: Jewellery", "B: A silly person","C: A surname", "D: A shoe"],
correct: "A: Jewellery",
},{
question: "What is an aglet?",
answers: ["A: The plastic tip on the end of your shoelace", "B: A type of rock", "C: A small silver coin", "D: An acute angle"],
correct: "A: The plastic tip on the end of your shoelace",
},{
question: "What is a Zarf?",
answers: ["A: Bridge pillar", "B: A zebra calf", "C: Zebra barf", "D: Coffee cup sleeve"],
correct:"Coffee cup sleeve",
}]

console.log(questionArray); 

// Question Array propagated into page
for (var i= 0; i<questionArray.length; i++){
   // var currentQuestion = questionArray[0].question[i];
   generateQuestion(i);
}

// Score Array
var score =0;


// Questions, your score and high score hidden
// When start button is clicked, hide start page, show 1st question.
// When answer is clicked, 
// Wrong or Correct shows, potentially time deducted
// Next Question is propagated


// Initials are taken and then shown in a list of scores
// Submit button
// Go back button 
// Clear High Scores 
// Timer

