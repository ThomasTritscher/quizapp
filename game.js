let allQuestions = [
  {
    'question': 'Wer hat HTML erfunden?',
    'answer_1': 'Donald Duck',
    'answer_2': 'Bruce Willis',
    'answer_3': 'Bill Gates',
    'answer_4': 'Tim Berners-Lee',
    'right_answer': 4
  },
  {
    'question': 'Was bedeutet das HTML Tag &lta&gt?',// Tag muss als Text umgewandelt werden
    'answer_1': 'Text Fett',
    'answer_2': 'Container',
    'answer_3': 'Ein Link',
    'answer_4': 'Kursiv',
    'right_answer': 3
  },
  {
    'question': 'Wie bindet man eine Website in eine Website ein?',
    'answer_1': '&lt;iframe&gt;, &lt;frame&gt; and &lt;frameset&gt;',
    'answer_2': '&lt;iframe&gt;',
    'answer_3': '&lt;frame&gt;',
    'answer_4': '&lt;frameset&gt;',
    'right_answer': 2
  },
  {
    'question': 'Wie stellt man Text am BESTEN fett dar?',
    'answer_1': '&lt;strong&gt;',
    'answer_2': 'CSS nutzen',
    'answer_3': '&lt;bold&gt;',
    'answer_4': '&lt;b&gt;',
    'right_answer': 1
  },
  {
    'question': 'Welches Attribut kann man NICHT für Textarea verwenden?',
    'answer_1': 'readonly',
    'answer_2': 'max',
    'answer_3': 'from',
    'answer_4': 'spellcheck',
    'right_answer': 1
  },
  {
    'question': 'Wie wählst du alle Elemenete vom Typ &lt;a&gt; mit dem attribut titile aus?',
    'answer_1': 'a[title]{...}',
    'answer_2': 'a&gt;title{...}',
    'answer_3': 'a.title{...}',
    'answer_4': 'a=title{...}',
    'right_answer': 1
  },
  {
    'question': 'Wie definiert man in Javascript eine Variable?',
    'answer_1': 'let 100 = rate;',
    'answer_2': '100 = let rate;',
    'answer_3': 'rate = 100;',
    'answer_4': 'let rate = 100;',
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












