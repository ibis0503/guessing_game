// Create function guessingGame //
function guessingGame() {

var answerOne = prompt('Kenny\'s currently working at Xbox Team (yes/no)');

if (answerOne.toLowerCase() === 'no') {
  // This console.log will execute as long as one of all four conditions evaluates to 'True'//
  alert('You got it right! ');
} else {
  alert('Wrong!!! ');
}

var answerTwo = prompt('Kenny grauated from Harvard Law School (yes/no)');

if (answerTwo.toLowerCase() === 'no') {
  // This console.log will execute as long as one of all four conditions evaluates to 'True'//
  alert('You got it right! ');
} else {
  alert('Wrong!!! ');
}

var answerThree = prompt('Kenny recently graduated from college (yes/no)');

if (answerThree.toLowerCase() === 'no') {
  // This console.log will execute as long as one of all four conditions evaluates to 'True'//
  alert('You got it right! ');
} else {
  alert('Wrong!!! ');
}

var answerFour = prompt('Kenny has bachelor\'s degree in Human Centered Design & Engineering  (yes/no)');

if (answerFour.toLowerCase() === 'no') {
  // This console.log will execute as long as one of all four conditions evaluates to 'True'//
  alert('You got it right! ');
} else {
  alert('Wrong!!! ');
}

// Close guessingGame function //
};
