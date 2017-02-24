/**
 * Created by root on 2/24/2017.
 */

"use strict";
const PROMPT = require(`readline-sync`);

let birthYear = [], numberYears = [];
let fName = [], lName = [];
let userNumber = 0;

function main() {
    setFName();
    setLName();
    setBirthyear();
    setNumberYears();
    continueQuery();
}

main();

function setFName() {
    fName[userNumber] = PROMPT.question('<<What is your first name?>>\n>');
    while (fName[userNumber] == '' || fName[userNumber] == /^[a-zA-Z]+$/) {
        fName[userNumber] = PROMPT.question('\nAnswer truthfully.\n' +
            '<<What is your first name?>>\n>');
    }
}

function setLName() {
    lName[userNumber] = PROMPT.question('\n<<What is your last name?>>\n>');
    while (lName[userNumber] == '' || lName[userNumber] == /^[a-zA-Z]+$/) {
        lName[userNumber] = PROMPT.question('\nAnswer truthfully.\n' +
            '<<What is your last name?>>\n>');
    }
}

function setBirthyear() {
    const MINYEAR = 1900;
    birthYear[userNumber] = PROMPT.question('\n<<What is your birth year?>>\n>');
    while (birthYear[userNumber] == '' || birthYear[userNumber] < MINYEAR || birthYear[userNumber] > new Date().getFullYear() || isNaN(birthYear[userNumber]) == true) {
        birthYear[userNumber] = PROMPT.question('\nAnswer truthfully.\n' +
            '<<What is your birth year?>>\n>');
    }
}

function setNumberYears() {
    numberYears[userNumber] = new Date().getFullYear() - birthYear[userNumber];
}

function continueQuery() {
    let chooseVar = PROMPT.question('\n<<Would you like to input another user? 0 = No, 1 = Yes>>\n>');
    while (chooseVar != 0 && chooseVar != 1) {
        chooseVar = PROMPT.question('\nNot an option.\n' +
            '<<Would you like to input another user? 0 = No, 1 = Yes>>\n>');
    }
    if (chooseVar == 0) {
        for (let i = 0; i < fName.length; i++) {
            console.log(fName[i] + ' ' + lName[i] + ', ' + numberYears[i]);
        }
    } else {
        userNumber++;
        return main();
    }
}