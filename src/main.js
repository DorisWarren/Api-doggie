import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import { Dogbreed } from './logic.js';

$ (document).ready(function(){
  $("form#dogForm").submit(function(event) {
    event.preventDefault();
      const newGame = new Dogbreed;
      const dogName = newGame.pickbreed();
      $("#result").append(dogName)

      // let promise = new Promise(function(resolve, reject) {
      //   let request = new XMLHttpRequest();
      //   let url = `https://dog.ceo/api/breed/${dogName}/images/random`;
      //   request.onload = function() {
      //     if (this.status === 200) {
      //       resolve(request.response);
      //     } else {
      //       reject(Error(request.statusText));
      //     }
      //   }
      //   request.open("GET", url, true);
      //   request.send();
      // });
      let promise = newGame.getDogPic(dogName);

      promise.then(function(response) {
        let body = JSON.parse(response);
        $("#picture").html(`<img src=${body.message}>`);
      }, function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });
  });
});
