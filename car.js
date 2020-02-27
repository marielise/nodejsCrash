class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }

    info() {
        console.log(`The car is a ${this.model} at $ ${this.price}`);
    }
}

module.exports = Car;