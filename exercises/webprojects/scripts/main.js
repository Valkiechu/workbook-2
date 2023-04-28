"use script";
const number1Field = document.getElementById("number1Field");
const number2Field = document.getElementById("number2Field");
const answerField = document.getElementById("answerField");

function add() {
  const result =
    parseFloat(number1Field.value) + parseFloat(number2Field.value);
  answerField.value = result;
}

function subtract() {
  const result =
    parseFloat(number1Field.value) - parseFloat(number2Field.value);
  answerField.value = result;
}

function multiply() {
  const result =
    parseFloat(number1Field.value) * parseFloat(number2Field.value);
  answerField.value = result;
}

function divide() {
  const result =
    parseFloat(number1Field.vaule) / parseFloat(number2Field.value);
  answerField.value = result;
}
