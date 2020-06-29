'use strict'

class First {
    constructor() {

    }
    hello () {
        console.log('Привет я метод родителя!');
    }
}

const first = new First();
first.hello();