const {Given, When, Then} = require('@cucumber/cucumber');

Given('Lucy is {int} metres from Sean', function (distance) {
    // console.log(distance);
    return distance;
});
  
When('Sean shouts {string}', function (shout) {
    return shout;
});
  
Then('Lucy hears Sean\'s message', function () {
    return 'Hey!';
});