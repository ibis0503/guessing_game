// Create function guessingGame //
function guessingGame() {

  var answerOne = prompt('Kenny\'s currently working at Xbox Team (yes/no or y/n)');
  // validate use input in the form of 'Yes' and 'Y', or 'No' and 'N'.
  if (answerOne.toLowerCase() === 'no' || answerOne.toLowerCase() === 'n') {
    // This console.log will execute as long as one of all four conditions evaluates to 'True'//
    alert('You got it right! ');
    console.log('You got it right! ');
  } else {
    alert('Wrong!!! ');
    console.log('Wrong !!! ');
  }

  var answerTwo = prompt('Kenny grauated from Harvard Law School (yes/no or y/n)');

  if (answerTwo.toLowerCase() === 'no' || answerTwo.toLowerCase() === 'n') {
    // This console.log will execute as long as one of all four conditions evaluates to 'True'//
    alert('You got it right! ');
    console.log('You got it right! ');
  } else {
    alert('Wrong!!! ');
    console.log('Wrong !!! ');
  }

  var answerThree = prompt('Kenny recently graduated from college (yes/no or y/n)');

  if (answerThree.toLowerCase() === 'no' || answerThree.toLowerCase() === 'n') {
    // This console.log will execute as long as one of all four conditions evaluates to 'True'//
    alert('You got it right! ');
    console.log('You got it right! ');
  } else {
    alert('Wrong!!! ');
    console.log('Wrong !!! ');
  }

  var answerFour = prompt('Kenny has bachelor\'s degree in Human Centered Design & Engineering  (yes/no or y/n)');

  if (answerFour.toLowerCase() === 'no' || answerFour.toLowerCase() === 'n') {
    // This console.log will execute as long as one of all four conditions evaluates to 'True'//
    alert('You got it right! ');
    console.log('You got it right! ');
  } else {
    alert('Wrong!!! ');
    console.log('Wrong !!! ');
  }

  var answerFive = prompt('Q5. My favorite color is white (yes/no or y/n)');

  if (answerFive.toLowerCase() === 'yes' || answerFive.toLowerCase() === 'y') {
    // This console.log will execute as long as one of all four conditions evaluates to 'True'//
    alert('You got it right! ');
    console.log('You got it right! ');
  } else {
    alert('Wrong!!! ');
    console.log('Wrong !!! ');
  }
  // Enhance the guessing game to include a fifth and sixth question.
  var userPick = prompt('Q6. Guess my number from 1 to 10');
  // Here is the answer for answerSix
  var answerSix = 3;
  var i = 0;
  // Ask users question for four times //
  for (var i = 0; i < 4 ; i++) {
    if (answerSix == userPick) {
      console.log ('You got it right!');
      alert ('You got it right!');
      // Break and move to next question if user pick answerSix //
      break;
      // If userPick is higher than answerSix //
    } else if (answerSix > userPick) {
      console.log ('Too low');
      userPick = parseInt(prompt('Guess my number from 1 to 10'));
      // If userPick is lower than answerSix //
    } else {
      console.log ('Too high');
      userPick = parseInt(prompt('Guess my number from 1 to 10'));
    }
  }
  // Count the number of attemps that user try for answer //
  var userAnswerAttempts = 0;
  // answerSeven contain multiple answers stored in array
  var answerSeven = ['korea','california'];
  do {
    userAnswerAttempts += 1;
    var userAnswerSeven = prompt('07. Can you guess where I was from?');
    if (answerSeven.indexOf(userAnswerSeven.toLowerCase()) !== -1) {
      console.log ('Yes,I\'m from ' + userAnswerSeven.toLowerCase());
      alert ('You got it right! \nI\'m from ' + answerSeven[0] + ', ' + answerSeven[1]);
    } else {
      console.log ('I\'m not from ' + userAnswerSeven.toLowerCase() +'. Try again!');
      alert ('I\'m not from ' + userAnswerSeven +'. Try again!');
    }
    // until user pick right answer or in six times //
  } while (answerSeven.indexOf(userAnswerSeven.toLowerCase()) === -1 && userAnswerAttempts < 6);

  // Close guessingGame function //
};
