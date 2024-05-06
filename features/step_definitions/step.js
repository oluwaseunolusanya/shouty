const { Given, When, Then } = require('@cucumber/cucumber');
const { assertThat, is } = require('hamjest');

const { Person, Network } = require('../../src/shouty.js');

Given('Lucy is {int} metre(s) from Sean', function (distance) {
    this.network = new Network();
    this.lucy = new Person(this.network);
    this.sean = new Person(this.network);

    this.lucy.moveTo(distance);
});
  
When('Sean shouts {string}', function (message) {
    this.sean.shout(message);
    this.messageFromSean = message;
});
  
Then('Lucy hears Sean\'s message', function () {
   assertThat(this.lucy.messagesHeard(), is([this.messageFromSean]));
});