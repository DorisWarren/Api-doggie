export class Dogbreed {
  pickbreed() {
    const breeds = ["Boxer", "Vizsla", "Papillon", "Dachshund", "Chow", "Beagle"];
    const randNum = Math.floor(Math.random() * 6);
    const doggie = breeds[randNum];

    return doggie;
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
