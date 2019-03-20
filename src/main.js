import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import { Dogbreed } from './logic.js';

$ (document).ready(function(){
  const newGame = new Dogbreed;
  const dogName = newGame.pickbreed();
  let promise =  newGame.getDogPic(dogName);

  promise.then(function(response) {
    let body = JSON.parse(response);
    $("#picture").html(`<img src=${body.message}>`);
  }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  });
  $("form#dogForm").submit(function(event) {
    event.preventDefault();
      const dogInput = $("#dogGuess").val();
      const dogCompare = newGame.getDogInput(dogInput.toLowerCase(), dogName)
      if (dogCompare === true) {
        $("#result").text("You guessed correctly!");
      } else {
        const correctCount= newGame.getLetter (dogInput.toLowerCase(), dogName)
        $("#result").text("You guessed incorrectly! you have " + correctCount + "letter correct");

      }

  });
});
