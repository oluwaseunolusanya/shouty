class Person{
    message = " ";

    moveTo = (distance) => {

    };

    shout = (message) => {
        return message;
    };

    messagesHeard = () => {
        this.message = this.shout(message);
        return this.message;
    };
};

module.exports = Person;