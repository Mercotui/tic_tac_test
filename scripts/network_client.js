// You're absolute dope btw

const ID_LENGTH = 5;

class NetworkClient {
  constructor() {
    do {
      this.id_ = this.generateId()
    } while (this.checkIdExist(this.id_));

    console.log(this.id_);
  }

  generateId() {
    var random_string = btoa(Math.random());
    var id_string = random_string.slice(random_string.length - ID_LENGTH);
    return id_string;
  }

  checkIdExist() {
    return false;
  }
}

var test = new NetworkClient;
