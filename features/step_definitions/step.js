const { Given, When, Then } = require('@cucumber/cucumber');
const { Person, Network } = require('../../src/shouty.js');
const { assertThat, is } = require('hamjest');

Given('{person} is {int} metre(s) from Sean', function (lucy,distance) {
    this.network = new Network();
    this.lucy = new Person(this.network);
    this.sean = new Person(this.network);

    this.lucy.moveTo(distance);
});
  
When('{person} shouts {string}', function (sean,message) {
    this.sean.shout(message);
    this.messageFromSean = message;
});
  
Then('{person} hears {person}\'s message', function (lucy,sean) {
   assertThat(this.lucy.messagesHeard(), is([this.messageFromSean]));
});