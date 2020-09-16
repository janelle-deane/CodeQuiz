
// Define variables that will need to be used. 
// Links and Buttons
var highScoreLink= $("#highScoreLink");
var startBtn = $("#startBtn");
var btnA = $("#btnA");
var btnB = $("#btnB");
var btnC = $("#btnC");
var btnD = $("#btnD");
var submitBtn =$("#submitBtn");
var clearBtn= $("clearScores"); 
var timer = $("#timer"); 
var quesHolder =$("#quesHolder");
var answerBtn=$(".answerBtn");
var cw= $('#cw');
var userInits=$("#initials");

// Containers/Pages to be hidden or displayed
var startingPage= $("#startingPage");
var questionContainer= $("#questionContainer");
var scorePage= $("#scorePage");
var highPage =$("#highPage");
var timerEl= $("#timerContainer")

// Score, Time, Index tracker
var score=0; 
var questionIndex=0;
var secondsLeft= 60;

// At load Start page is shown, everything else hidden
timerEl.css('display', 'none'); 
questionContainer.css('display', 'none'); 
scorePage.css('display', 'none');
highPage.css('display', 'none');


// Once your click on the Start button, timer starts, start pages hides, question shows
startBtn.on("click", function(){
   timerEl.css('display','flex');
   questionContainer.css('display', 'flex');
   startingPage.css('display', 'none');
   cw.css('display', 'none');
   setTime();
   generateQuestion();
   generateAnswers();
});

// Timer function
function setTime(){
   var timerInterval = setInterval(function() {
      secondsLeft--; 
      $("#timer").text("Time: " + secondsLeft + " seconds"); 
      //When clock reaches 0 then go to score page**
      if(secondsLeft <= 0 ||questionIndex>= questionArray.length ) {
         clearInterval(timerInterval);
         timer.css('display', 'none'); 
         questionContainer.css('display', 'none');
         scorePage.css('display', 'flex'); 
      }
   }, 1000) 
};

// Make Question and Answer Function to propogate on page
function generateQuestion() {
   if(questionArray[questionIndex]) quesHolder.text(questionArray[questionIndex].question);
}

function generateAnswers() {
   if (questionArray[questionIndex]) {
      btnA.text(questionArray[questionIndex].answers[0]);
      btnB.text(questionArray[questionIndex].answers[1]);
      btnC.text(questionArray[questionIndex].answers[2]);
      btnD.text(questionArray[questionIndex].answers[3]);
   }
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


// When answer is clicked, Wrong or Correct shows, potentially time deducted & Next Question is propagated

answerBtn.on("click", function(){
   console.log(answerBtn)
   questionContainer.css('display', 'flex'); 
   scorePage.css('display', 'none');
   highPage.css('display', 'none');
   
   // Add score or substract time
   if (this.innerText === questionArray[questionIndex].correct) {
      score += 5; 
      cw.css('display', 'flex');
      cw.text("Correct!")
   }else{
      secondsLeft -= 10; 
      cw.css('display', 'flex');
      cw.text("Wrong!")
   }
   
   questionIndex++; 
   // // after all of the questions it moves to the score page
   if(questionIndex === questionArray.length) {
      questionContainer.css('display', 'none'); 
      scorePage.css('display', 'flex');
   }
// Allow a slight delay to have correct/wrong to show
   setTimeout(function () {
      generateQuestion();
      generateAnswers();
   }, 1000)

})
 
// Storing initials in local storage
var storedScores = localStorage.getItem('scores');
   
   if(storedScores){
       storedScores = JSON.parse(storedScores);
   } else {
       storedScores = []
   }
   
   storedScores.forEach(score => {
       $("#scoreList").append(`<li> ${score.userInits} -- ${score.userScore}`)
   })

// Initials are taken and then shown in a list of scores
submitBtn.on("click", function(event){
   event.preventDefault();
   console.log(userInits.val());
   console.log(score)
   var userObj = {
      userInits: userInits.val(),
      userScore: score
  }; 

  storedScores.push(userObj);

   localStorage.setItem('scores', JSON.stringify(storedScores))
   
   storedScores.forEach(score => {
       $("#scoreList").append(`<li> ${score.userInits} -- ${score.userScore}`)
   })

   scorePage.css('display', 'none');
   highPage.css('display', 'flex');
})

// Clear High Scores 
clearBtn


//Link to HighScores

// Go back button 


