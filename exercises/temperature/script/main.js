"use script";

const tempinfField = document.getElementById("tempinfField");
const tempincField = document.getElementById("temperincField");
const answerField = document.getElementById("answerField");

function convert() {
  let tempinfFiield = tempinfField.vaule;
  const result = ((tempinfField.vaule - 32) * 5) / 9;
  answerField.vaule = result;
}
