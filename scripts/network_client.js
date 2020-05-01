// You're absolutely dope btw

const ID_LENGTH = 5;

class NetworkClient {
  url = "mqtt.eclipse.org";
  port = 443;
  root = "com.mercotui.tic_tac_test";

  constructor() {
    // Create a client instance
    this.mqtt_client = new Paho.MQTT.Client(this.url, this.port, this.generateClientId());

    // set callback handlers
    this.mqtt_client.onConnectionLost = this.onConnectionLost;
    this.mqtt_client.onMessageArrived = this.onMessageArrived;

    // connect the client
    this.mqtt_client.connect({onSuccess:this.onConnect.bind(this)});

    // create a new game
    do {
      this.id_ = this.generateGameId()
    } while (this.checkIdExist(this.id_));

    console.log(this.id_);
  }

  generateClientId() {
    // uuid v4 from https://stackoverflow.com/a/2117523/4729813
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

  generateGameId() {
    var random_string = btoa(Math.random());
    var id_string = random_string.slice(random_string.length - ID_LENGTH);
    return id_string;
  }

  checkIdExist() {
    return false;
  }

  onConnect = () => {
    console.log("onConnect");
    this.mqtt_client.subscribe(this.root + "/test");
    var message = new Paho.MQTT.Message("Hello from " + this.mqtt_client.clientId);
    message.destinationName = this.root + "/test";
    this.mqtt_client.send(message);
  }

  onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
  }

}
