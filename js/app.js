'use strict';

alert('Welcome to my page! I am going to ask you a couple questions.');

var userName = prompt('What is your name?');
alert('it\'s nice to meet you ' + userName);

var correct = 0;

function questionOne() {
  var home = prompt(userName + ' am I from Washington State?').toUpperCase();

  if (home === 'YES' || home === 'Y') {
    alert('No, I am not from Washington.');
  }
  if (home === 'NO' || home === 'N') {
    alert('You are correct! I am actualy from Kansas!');
    correct++;
  }
}
questionOne();

function questionTwo() {
  var child = prompt(userName + ' do I have a daughter?').toUpperCase();

  if (child === 'YES' || child === 'Y') {
    alert('Yes, I do have a daughter, her name is AInsley.');
    correct++;
  }
  if (child === 'NO' || child === 'N') {
    alert('Sorry, that is not correct. I do have a daughter, and her name is AInsley.');
  }
}
questionTwo();

function questionThree() {

  var military = prompt(userName + ' did I serve in the military?').toUpperCase();

  if (military === 'YES' || military === 'Y') {
    alert('Yes, I was in the US Navy for 5 years.');
    correct++;
  }
  if (military === 'NO' || military === 'N') {
    alert('Sorry, that is not correct. I served 5 years in the US Navy.');
  }
}
questionThree();


function questionFour() {

  var pets = prompt(userName + ' do I have 7 cats?').toUpperCase();

  if (pets === 'YES' || pets === 'Y') {
    alert('No,  haha, I do not. I actually have 2 cats and 1 dog.');
  }
  if (pets === 'NO' || pets === 'N') {
    alert('Correct!, I only have 2 and a dog!');
    correct++;
  }
}
questionFour();


function questionFive() {

  var lightsaber = prompt(userName + ' have I ever fought in a lightsaber club?').toUpperCase();

  if (lightsaber === 'YES' || lightsaber === 'Y') {
    alert('Yes! I actually have and it was a lot of fun. May the Force be with you!');
    correct++;
  }
  if (lightsaber === 'NO' || lightsaber === 'N') {
    alert('The Force is not with you today, I did in fact fight in a lightsaber club.');
  }
}
questionFive();


function questionSix() {

  for (var i = 0; i < 4; i++) {

    var car = prompt(userName + ' how many cars have I owned? Between 1 and 10?');
    if (car === '8') {
      alert('Yes, that is correct!');
      correct++;
      break;
    }
    if (i === 3) {
      alert('the correct answer was 8');
      break;
    }

    if (car < '8') {
      alert('too low, try again');
    }
    if (car > '8') {
      alert('too high, try again');
    }
  }
}
questionSix();

function questionSeven() {

  var colors = ['blue', 'purple', 'red', 'green'];
  let totalCount = 0;
  while (totalCount < 6) {
    var favecolor = prompt(userName + ' what is my favorite color?');
    for (let i = 0; i < colors.length; i++) {
      if (colors[i] === favecolor) {
        alert('Yes that is correct!');
        totalCount = 8;
        correct++;
        break;
      }
    }
    if (totalCount < 6) {
      alert('No that is not correct');
    }
    totalCount += 1;
  }
  if (totalCount < 8) {
    alert('The correct answers were blue, red, green, or purple!');
  }
}

questionSeven();


alert('Thank you for playing, ' + userName);
alert('you got ' + correct + ' correct answer(s)');
