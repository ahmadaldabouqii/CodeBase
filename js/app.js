'use strict';
let pointer = 0;

alert('Hey EveryOne!, Welcome to My website guy\'s *-*!');
let userName;

function PromptStudentName() {
    userName = prompt('Enter Your Name Please..', ' you can Enter your name Here..');
    if (isNaN(userName) === false) {
        alert('You need to write a correct name! ');
        PromptStudentName();
    } else if (userName == "'" || userName == "`" || userName == "!" || userName == "@" || userName == "#" || userName == "$" || userName == "%" || userName == "^" || userName == "&" || userName == "*" || userName == "(" || userName == ")" || userName == "-" || userName == "_" || userName == "+" || userName == "=" || userName == "/" || userName == "~" || userName == "<" || userName == ">" || userName == "," || userName == ";" || userName == ":" || userName == "|" || userName == "?" || userName == "{" || userName == "}" || userName == "[" || userName == "]" || userName == "¬" || userName == "£" || userName == ' " ' || userName == "\\") {
        alert("You need to write a correct name without symbol!");
        PromptStudentName();
    }
    return userName;
}
PromptStudentName();
alert('Welcome To My Website ' + userName + '!');


function question() {
    let answer = prompt('If I were you, would you expect me to want to play a guessing game with you ' + userName + ' ?', '(Yes-y)/(No-n)').toLowerCase();
    if (answer === 'yes' || answer === 'y') {
        alert('Yeah ' + userName + ' of course i want that, why not!');
    }
    else if (answer === 'no' || answer === 'n') {
        alert('Ooh! Why ' + userName + ' ? Actually i want in fact *_*, let\'s beginning!');
    }
    else {
        alert('Try Again! MR. ' + userName);
    }
}
question();


function how_lecture() {
    let lecture = prompt('How Was Lecture Today ' + userName + ' ?', 'choose:[confused me a bit /good so far /rather complicated /was useful/]').toLowerCase();
    while (lecture === 'good so far' || lecture === 'was useful') {
        alert('That\'s Cool ' + userName + '..');
        pointer++;
        break;
    }
    while (lecture === 'confused me a bit' || lecture === 'rather complicated') {
        alert('Don\'t Worry!, just You need just repeat watch recording lecture one more and i think you will be good inshaallah!');
        break;
    }

}
how_lecture();


function love_math() {
    let math = prompt('Guess, do you think I hate Mathmatic MR. ' + userName + ' ?', '(Yes-y)/(No-n)').toLowerCase();
    switch (true) {
        case (math === 'yes' || math === 'y'):
            alert('OH YEAH! Really i hate Math');
            pointer++;
            break;
        case (math === 'no' || math === 'n'):
            alert('You are wrong , i don\'t like math ever never Ya ' + userName + '!');
            break;
        default: alert('wrong input! MR. ' + userName);
    }
}
love_math();


function socialji() {
    let userSm = prompt('Do you think i like social media?', '(Yes-y)/(No-n)').toLowerCase();
    if (userSm === 'yes' || userSm === 'y') {
        alert('yes, I like it ' + userName + '.');
        pointer++;
    }
    else if (userSm === 'no' || userSm === 'n') {
        alert('Oo!, Uncoreect ' + userName + '!');
    }
    else alert('What are u talking About ' + userName + '!');
}
socialji();

function counDream() {
    let dream = prompt('Can you guess what country I dream to live in ' + userName + ' ?', 'choose:[USA /USE /Canada/]').toLowerCase();
    while (dream === 'USA' || dream == 'usa') {
        alert('That\'s Correct ' + userName + '.. Really this is my dream!');
        pointer++;
        break;
    }
    while (dream === 'UAE' || dream === 'uae' || dream === 'Canada' || dream === 'canada') {
        alert('Uncorrect! ' + userName);
        break;
    }
}
counDream();


function team() {
    let favTeam = prompt('Do you think i like FCBarcelona Team *_*?', '(Yes-y)/(No-n)').toLowerCase();
    if (favTeam === 'yes' || favTeam === 'y') {
        alert('yes, I am a fan of the Barcelona team, and I am fanatic about it ' + userName + '.');
        pointer++;
    }
    else if (favTeam === 'no' || favTeam === 'n') {
        alert('Oo!, Uncoreect ' + userName + ', Barcelona is My Fav Team!');
    }
}
team();


let statusOfnum = false;
let CorrectAnswer = 5;
let userAvg;
function yourAvg() {
    for (let z = 0; z <= 3; z++) {
        userAvg = prompt('guess the number in my mind From 1-10');
        if (isNaN(userAvg)) {
            alert('Please enter a valid number');
        }
        else if (userAvg == CorrectAnswer) {
            alert('Correct Answer, Great Job ' + userName + '!');
            pointer++;
            statusOfnum = true;
            break;
        }
        else if (userAvg > CorrectAnswer) {
            alert('too high! Try again');
        }
        else if (userAvg < CorrectAnswer) {
            alert('too low! Try again');
        }
    }
}
yourAvg();


if (!statusOfnum) {
    alert('The Correct Answer is: ' + CorrectAnswer + 'Good luck later On ' + userName + '!');
}

let C_answer = false;
function feedback() {
    let review = ['Yes', 'y', 'No', 'n', 'yes', 'no'];
    let userReview = prompt('Are my questions complex and boring and so on? ', review).toLowerCase();

    for (let i = 0; i <= 5; i++) {
        while (isNaN(userReview) === false) {
            alert('Please enter a valid answer!');
            userReview = prompt('Are my questions complex and boring and so on? ', review).toLowerCase();
        }
        if (userReview === review[0] || userReview === review[1] || userReview === review[4]) {
            alert('Really! Why MR. ' + userName + ' -_- ?');

        } else if (userReview === review[2] || userReview === review[3] || userReview === review[5]) {
            alert('Thank you MR.' + userName + '. I appreciate that!');
            pointer++;
            C_answer = true;
            break;
        }
    }
}
feedback();

if (!C_answer) {
    alert('I think Ya ' + userName + ' My Questions is not boring :D');
}

alert('Your Score In This Game is: ' + pointer + '/7');
let element = document.getElementById('n-html');
element.innerText = 'Hey! MR. ' + userName + ', My Name Is Ahmad AlDabouqi';