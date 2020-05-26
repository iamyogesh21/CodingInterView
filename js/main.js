   var ul = document.getElementById('ul');
   var btn = document.getElementById('button');
   var scoreCard = document.getElementById('scoreCard');
   var quizBox = document.getElementById('questionBox');
   var op1 = document.getElementById('op1');
   var op2 = document.getElementById('op2');
   var op3 = document.getElementById('op3');
   var op4 = document.getElementById('op4');


   var app = {
       questions: [
           { q: 'A user defined header file is included by following statement in general.', options: ['#include “file.h”', '#include<file.h>', '#include<file>', '#include file.h'], answer: 1 },

           { q: 'How many number of arguments can a destructor of a class receives?', options: ['0', '1', '2', 'None of above'], answer: 1 },

           { q: 'Which operator is used to resolve the scope of the global variable?', options: ['->', '.', '*', '::'], answer: 4 },
           { q: 'Which operator is used to continue the definition of macro in the next line?', options: ['#', '##', '$', '/'], answer: 4 },
           { q: 'What value strcmp() function returns when two strings are the same?', options: ['0', '1', '2', 'Error'], answer: 1 },
           { q: 'What happens when threads sleep() method is called?', options: ['Thread returns to the ready state.', 'Thread returns to the waiting state.', 'Thread starts running.', 'None of the above.'], answer: 2 },
           { q: 'What is the default value of short variable?', options: ['0.0', '0', 'null', 'undefined'], answer: 1 },
           { q: 'Static binding uses which information for binding?', options: ['type', 'object', 'Both', 'None of the above.'], answer: 4 },
           { q: 'Suppose we are given with two sets(s1&s2) then what is the output of the code −S1 + S2 ', options: ['Adds the elements of the both the sets.', 'Removes the repeating elements and adds both the sets.', 'It is an illegal command.', 'Output will be stored in S1.'], answer: 3 },
           { q: "What is the output for −'you are doing well' [2:999]", options: [" 'you are doing well'", "''", 'Index error', "'u are doing well'"], answer: 4 },
       ],
       index: 0,
       load: function() {
           if (this.index <= this.questions.length - 1) {
               quizBox.innerHTML = this.index + 1 + ". " + this.questions[this.index].q;
               op1.innerHTML = this.questions[this.index].options[0];
               op2.innerHTML = this.questions[this.index].options[1];
               op3.innerHTML = this.questions[this.index].options[2];
               op4.innerHTML = this.questions[this.index].options[3];
               this.scoreCard();
           } else {

               quizBox.innerHTML = "Quiz Over......!!!"
               op1.style.display = "none";
               op2.style.display = "none";
               op3.style.display = "none";
               op4.style.display = "none";
               btn.style.display = "none";
           }
       },
       next: function() {
           this.index++;
           this.load();
       },
       check: function(ele) {

           var id = ele.id.split('');

           if (id[id.length - 1] == this.questions[this.index].answer) {
               this.score++;
               ele.className = "correct";
               ele.innerHTML = "Correct";
               this.scoreCard();
           } else {
               ele.className = "wrong";
               ele.innerHTML = "Wrong";
           }
       },
       notClickAble: function() {
           for (let i = 0; i < ul.children.length; i++) {
               ul.children[i].style.pointerEvents = "none";
           }
       },

       clickAble: function() {
           for (let i = 0; i < ul.children.length; i++) {
               ul.children[i].style.pointerEvents = "auto";
               ul.children[i].className = ''

           }
       },
       score: 0,
       scoreCard: function() {
           scoreCard.innerHTML = this.questions.length + "/" + this.score;
       }

   }


   window.onload = app.load();

   function button(ele) {
       app.check(ele);
       app.notClickAble();
   }

   function next() {
       app.next();
       app.clickAble();
   }