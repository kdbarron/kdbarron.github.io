class Question {
   constructor (text, choices, answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;

    var questions = [
new Question("Hyper Text Markup Language Stand For?", ["JavaScript", "XHTML","CSS", "HTML"], "HTML"),
new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
new Question("What has not been covered in PUI lab?", ["HTML", "CSS","Javascript", "Java"], "Java"),
];
isCorrectAnswer(choice){
         return this.answer === choice;
        }
}



}


class Quiz {
  function populate() {

     var element = document.getElementById("question");
     element.innerHTML = quiz.getQuestion().text;
    guess(answer) {
    if(this.getQuestion().isCorrectAnswer(answer)) {
     this.score++;
        }
    
    this.questionIndex++;
  }
     // show options
     var choices = quiz.getQuestion().choices;
     for(var i = 0; i < choices.length; i++) {
       var element = document.getElementById("choice" + i);
       element.innerHTML = choices[i];
       guess("btn" + i, choices[i]);
     }
 
    
};
		constructor(questions) {
			this.score = 0;
	this.questions = questions;
			this.questionIndex = 0;

        getQuestion() {

    return this.questions[this.questionIndex];
  function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
     quiz.guess(guess);
     populate();
    }
};
}
}	



}





