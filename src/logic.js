export class Dogbreed {
  pickbreed() {
    const breeds = ["boxer", "vizsla", "papillon", "dachshund", "chow", "beagle"];
    const randNum = Math.floor(Math.random() * 6);
    const doggie = breeds[randNum];

    return doggie;
  }
    getDogInput(dogGuess, dogBreed) {
      if (dogGuess === dogBreed){
        return true;
      } else {
        return false;
      }
    }
    getLetter (dogGuess, dogBreed){
        const guessArr = dogGuess.split("");
        const breedArr = dogBreed.split("");
        let counter = 0;
        for(let i = 0; i< breedArr.length; i++) {
          if(guessArr[i] === breedArr[i]) {
            counter++;
          }
        }
        return counter;
    }
    getDogPic(dogName) {
      return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://dog.ceo/api/breed/${dogName}/images/random`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }

}
