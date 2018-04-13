"use strict";
function greet(item) {
    console.log('Hello, my name is ${item.name}!');
}
var bugsBunny = {
    type: 'bunny',
    name: 'Bugs Bunny',
    talk: function () {
        return "What's up doc?";
    }
};
