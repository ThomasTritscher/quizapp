let question_1 = 'Wer hat HTML erfunden?';
let question_1_answer_1 = 'Donald Duck';
let question_1_answer_2 = 'Bruce Willis';
let question_1_answer_3 = 'Bill Gates';
let question_1_answer_4 = 'Tim Berners-Lee';

let question_2 = 'Was bedeutet das HTML Tag &lta&gt?';// Tag muss als Text umgewandelt werden
let question_2_answer_1 = 'Text Fett';
let question_2_answer_2 = 'Container';
let question_2_answer_3 = 'Ein Link';
let question_2_answer_4 = 'Kursiv';

let right_answer;



/*let answer_1 = 'Donald Duck';
let answer_2 = 'Bruce Willis';
let answer_3 = 'Bill Gates';
let answer_4 = 'Tim Berners-Lee';*/
let question_number = 0;
let progress = 0;

function nextQuestion() {
  question_number = question_number + 1;// Variable wird immer um 1 erhöht onload, nextQuestion usw...
  progress = question_number * 10; // 10% Porzent bei 10 Fragen
  document.getElementById('progress-bar').innerHTML = progress + '%';// Änderung der Baranzeige um je 10% pro nextQuestion
  document.getElementById('progress-bar').style.width = progress + '%'; //Breite des Styles/Bg wird um je 10% erhöht
  if (question_number == 1) {
    document.getElementById('question').innerHTML = question_1;
    // Fülle Frage 1
    document.getElementById('answer1').innerHTML = question_1_answer_1;
    document.getElementById('answer2').innerHTML = question_1_answer_2;
    document.getElementById('answer3').innerHTML = question_1_answer_3;
    document.getElementById('answer4').innerHTML = question_1_answer_4;
    right_answer = 4;
  }
  if (question_number == 2) {
    document.getElementById('question').innerHTML = question_2;
    // Fülle Frage 2
    document.getElementById('answer1').innerHTML = question_2_answer_1;
    document.getElementById('answer2').innerHTML = question_2_answer_2;
    document.getElementById('answer3').innerHTML = question_2_answer_3;
    document.getElementById('answer4').innerHTML = question_2_answer_4;
    right_answer = 3;
  }



  /*if (document.getElementById('question').innerHTML == question_1) { Wenn in der ID question 1 ist ...
      document.getElementById('question').innerHTML = question_2;      .. füge question 2 hinzu!
  } else {
      document.getElementById('question').innerHTML = question_1; Sonst für question 1 hinzu!
  }
  document.getElementById('answer1').innerHTML = answer_1;
  document.getElementById('answer2').innerHTML = answer_2;
  document.getElementById('answer3').innerHTML = answer_3;
  document.getElementById('answer4').innerHTML = answer_4;*/


}

function answer(a) {

  /*let selected_answer;
  if (a == 1) {
    selected_answer = answer_1;
  } else if (a == 2) {
    selected_answer = answer_2;
  } else if (a == 3) {
    selected_answer = answer_3;
  } else {
    selected_answer = answer_4;
  }*/


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












