$(document).ready(function() {

// initiates the game

$(document).on('click', '#start', function() {
  quiz.start();
});

// you can end the game once you're done to check the score


$(document).on('click', '#done', function() {
  quiz.done();
});



var quiz = {
  correct:0,
  incorrect:0,
  counter:30,
  countdown: function(){
    quiz.counter--;
    $('#clockRunning').html(quiz.counter);

    if (quiz.counter === 0){
      console.log('TIME UP');
      quiz.done();
    }
  },
  start: function() {
    timer = setInterval(quiz.countdown, 1000);

      // timer running inside jumbotron

    $('#subwrapper').prepend('<p class="jumbotron bg-light col-md-3 timer" id="clockRunning">30</p>');
    $('#start').remove();

      // questions and choices being rendered in the html

    for (var i = 0; i < trivia.length; i++) {
      $('#quiz-area').append('<p class="questions">' + trivia[i].question + '</p>');
      for (var j = 0; j < trivia[i].answers.length; j++) {
        $('#quiz-area').append('<input type="radio" name="question' + i + '" value="' + trivia[i].answers[j] + '">' + trivia[i].answers[j]);
      } 
    }

    $('#quiz-area').append('<button class="btn btn-success" id="done">Done</button>');
  },
  done: function() {


    // conditional statement if user choose the correct/incorrect answer will increment to the score

    $.each($("input[name='question0']:checked"), function() {
      if ($(this).val() == trivia[0].correctAns) {
        quiz.correct++;
      } else {
        quiz.incorrect++;
      }
    });
    $.each($("input[name='question1']:checked"), function() {
        if ($(this).val() == trivia[1].correctAns) {
        quiz.correct++;
      } else {
        quiz.incorrect++;
      }
    });
    $.each($("input[name='question2']:checked"), function() {
      if ($(this).val() == trivia[2].correctAns) {
        quiz.correct++;
      } else {
        quiz.incorrect++;
      }
    });
    $.each($("input[name='question3']:checked"), function() {
      if ($(this).val() == trivia[3].correctAns) {
        quiz.correct++;
      } else {
        quiz.incorrect++;
      }
    });
    $.each($("input[name='question4']:checked"), function() {
      if ($(this).val() == trivia[4].correctAns) {
        quiz.correct++;
      } else {
        quiz.incorrect++;
      }
    });

    this.result();
  },
    result: function() {

    clearInterval(timer);



    // displays correct/incorrect answers and unanswered questions

    $('#subwrapper p').remove();
    $('#quiz-area').html('<h3 class="result">Finished</h3>');
    $('#quiz-area').append('<p class="result">Correct Answers: ' + this.correct + '</p>');
    $('#quiz-area').append('<p class="result">Incorrect Answers: ' + this.incorrect + '</p>');
    $('#quiz-area').append('<p class="result">Unanswered: ' + (trivia.length - (this.incorrect + this.correct)) + '</p>');
  }
    

    // questions possible answers and the correct answer
};
     var trivia = [{
       question: "1 . Who won the NBA title last 2016?",
       answers: ["Lakers", "Bulls", "Warriors", "Cavaliers"],
       correctAns: "Cavaliers"
     }, {
       question: "2 . Who is the greatest player of all time?",
       answers: ["Brian Scalabrine", "Michael Jordan", "Lebron James", "Kobe Bryant"],
       correctAns: "Brian Scalabrine"
     }, {
       question: "3 . What team was Carmelo Anthony on in 2010",
       answers: ["Sixers", "Celtics", "Nuggets", "Knicks"],
       correctAns: "Nuggets"
     }, {
       question: "4 . Who in the NBA has the most triple doubles?",
       answers: ["Lebron James", "Russel Westbrook", "Jason Kidd", "Magic Johnson"],
       correctAns: "Russel Westbrook"
     }, {
       question: "5 . How old was Lebron James when he got drafted?",
       answers: ["28", "30", "21", "18"],
       correctAns: "18"
     }];





});













