'use strict';
let pointer = 0;

alert('Hey! ,Welcome to My website');

let userName = prompt('What\'s your name?', 'Enter your name Here..');
alert('Welcome to my website ' + userName);

// console.log('Welcome to my website ' + userName);

let g = prompt('how was lecture today ? ', 'choose:[confused me a bit /good so far /rather complicated /was useful/]').toLowerCase();

if (g === 'good so far' || g === 'was useful') {
    alert('thats cool ..');

} else if (g === 'confused me a bit' || g === 'rather complicated') {
    alert('you need just repeat watch recording lecture one more and i think you will be good!');

} else {
    alert('Sorry I can\'t get your answer');
}

function guess1() {
    let user = prompt('If I were you, would you expect me to want to play a guessing game with you man?', '(Yes-y)/(No-n)').toLowerCase();

    if (user === 'yes' || user === 'y') {
        alert('Yeah ' + userName + ' of course i want that, why not!');
        pointer++;
    }
    else if (user === 'no' || user === 'n') {
        alert('Oops! Why man , i want in fact *_*');
    }
    else alert('Try Again!');
}
guess1();

function guess2() {
    let user = prompt(' Guess, do you think I hate Mathmatic???', '(Yes-y)/(No-n)').toLowerCase();
    switch (true) {
        case (user === 'yes' || user === 'y'):
            alert('OH YEAH! Really i hate math');
            pointer++;
            break;
        case (user === 'no' || user === 'n'):
            alert('You are wrong , i don\'t like math ever never!');
            break;
        default: alert('wrong input!');
    }
}
guess2();

function guess3() {
    let user = prompt('Do you think i like social media?', '(Yes-y)/(No-n)').toLowerCase();
    if (user === 'yes' || user === 'y') {
        alert('yes, I like it ' + userName + '.');
        pointer++;
    }
    else if (user === 'no' || user === 'n') {
        alert('Oo! , Uncoreect!');
    }
    else alert('??!');
}
guess3();

function guess4() {
    let user = prompt('Are my questions complex and boring and so on? ? ', '(Yes-y)/(No-n)').toLowerCase();

    if (user === 'yes' || user === 'y') {
        alert('Really! Why! MR. ' + userName);
    } else if (user === 'no' || user === 'n') {
        alert('Thank you MR.' + userName);
        pointer++;
    }
    else alert('??!');
}
guess4();

let numcorrect = false;
let mynum = 5;
function guess5(myNumber, numberCorrect) {
    for (let h = 0; h < 4; h++) {
        let usernum = Number(prompt('guess the number in my mind From 1-10'));

        if (usernum === myNumber) {
            alert('Correct answer');
            pointer++;
            numberCorrect = true;
            break;
        }
        else if (usernum > myNumber) {
            alert('too high');
        }
        else if (usernum < myNumber) {
            alert('too low');
        }
        else ('Bad input');
    }
    if (!numberCorrect) {
        alert('the correct number is: ' + mynum);
    }
}
guess5(mynum, numcorrect);

let element = document.getElementById('n-html');
element.innerText = 'Hey! MR. ' + userName + ", My Name Is Ahmad AlDabouqi";
alert('Your Score is: ' + pointer + '/5');

// console.log(pointer);