const Person = require('../../src/shouty');
const { defineParameterType } = require('@cucumber/cucumber');

defineParameterType({
   name: 'person',
   regexp: /Lucy|Sean/,  //match argument passed into person parameter in the Gherkin step.
   transformer: name => new Person(name)
})