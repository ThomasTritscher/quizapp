let allQuestions = [
  {
    'question': 'Wie lautet ALF`s vollständiger Name?',
    'answer_1': 'Henry Thomas',
    'answer_2': 'Wayne Schlegel',
    'answer_3': 'Willie Tanner',
    'answer_4': 'Gordon Shumway',
    'right_answer': 4
  },
  {
    'question': 'Wie lautet der Name von Michael Knight `s Boss',
    'answer_1': 'Tempelton Peck',
    'answer_2': 'Dr. Bonnie Barstow',
    'answer_3': 'Devon Miles',
    'answer_4': 'David Hasselhoff',
    'right_answer': 3
  },
  {
    'question': 'Wer hat den Titelsong zu Miami Vice geschrieben?',
    'answer_1': 'Sonny Crockett',
    'answer_2': 'Jan Hammer',
    'answer_3': 'Ricardo Tubs',
    'answer_4': 'Martin Costillo',
    'right_answer': 2
  },
  {
    'question': 'In welchem Jahr erschien der Film TRON?',
    'answer_1': '1982',
    'answer_2': '1984',
    'answer_3': '1986',
    'answer_4': '1988',
    'right_answer': 1
  },
  {
    'question': 'Wann erschien Michael Jackson`s Album Thriller?',
    'answer_1': '1982',
    'answer_2': '1987',
    'answer_3': '1989',
    'answer_4': '1985',
    'right_answer': 1
  },
  {
    'question': 'Wie heißt das Monster von den Goonies?',
    'answer_1': 'Sloth',
    'answer_2': 'Data',
    'answer_3': 'Clark Devereuax',
    'answer_4': 'Chunk',
    'right_answer': 1
  },
  {
    'question': 'Wievviel Bit hat ein Commodore 64?',
    'answer_1': '6',
    'answer_2': '4',
    'answer_3': '64',
    'answer_4': '8',
    'right_answer': 4
  }
];

let right_answer;
let question_number = 0;
let progress = 0;




function hideElements() {
  document.getElementById('right-answer').classList.add('d-none');//Alert "richtige Antwort" wird bei nächster Frage ausgeblendet
  document.getElementById('next-btn').classList.add('d-none');//"nächste Frage" btn wird bei nächstem Schritt ausgeblendet

}

function nextQuestion() {
  hideElements();

  if (question_number == allQuestions.length) {
    finishQuiz();
  } else {

    question_number = question_number + 1;// Variable wird immer um 1 erhöht onload, nextQuestion usw..
    /*console.log('Number of questions:' , Math.round ((question_number / allQuestions.length) * 100));//Prozentbrechnung + Aufrundung.
    progress = question_number * 10; // 10% Porzent bei 10 Fragen*/
    progress = Math.round((question_number / allQuestions.length) * 100); //Prozentbrechnung + Aufrundung
    document.getElementById('progress-bar').innerHTML = progress + '%';// Änderung der Baranzeige um je 10% pro nextQuestion
    document.getElementById('progress-bar').style.width = progress + '%'; //Breite des Styles/Bg wird um je 10% erhöht

    loadQuestion();
  }
}

function finishQuiz() {
  document.getElementById('quiz-conatiner').classList.add('d-none'); //alles unter Headline wird ausgeblendet
  document.getElementById('quiz-finished-container').classList.remove('d-none');// Text aus Div wird eingeblendet
  
}

function loadQuestion() {
  document.getElementById('question').innerHTML = allQuestions[question_number - 1]['question'];
  // Fülle Frage 1
  document.getElementById('answer1').innerHTML = allQuestions[question_number - 1]['answer_1'];
  document.getElementById('answer2').innerHTML = allQuestions[question_number - 1]['answer_2'];
  document.getElementById('answer3').innerHTML = allQuestions[question_number - 1]['answer_3'];
  document.getElementById('answer4').innerHTML = allQuestions[question_number - 1]['answer_4'];
  right_answer = allQuestions[question_number - 1]['right_answer'];
  document.getElementById('progress-bar').innerHTML = progress + '%';// Änderung der Baranzeige um je 10% pro nextQuestion
    document.getElementById('progress-bar').style.width = progress + '%'; //Breite des Styles/Bg wird um je 10% erhöht

}


function answer(a) {
  if (a == right_answer) { // Right answer
    document.getElementById('wrong-answer').classList.add('d-none');
    document.getElementById('right-answer').classList.remove('d-none');
    // Show next button
    document.getElementById('next-btn').classList.remove('d-none');
  } else { //Wrong answer
    document.getElementById('right-answer').classList.add('d-none');
    document.getElementById('wrong-answer').classList.remove('d-none');
  }
}












