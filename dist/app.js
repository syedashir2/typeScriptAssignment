"use strict";
class Vehicle {
    constructor(make, model, year, rented = false) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = rented;
    }
    rent() {
        if (this.rented) {
            console.log(`Sorry, this ${this.make} ${this.model} is already rented.`);
        }
        else {
            this.rented = true;
            console.log(`You have rented a ${this.make} ${this.model}.`);
        }
    }
    return() {
        if (!this.rented) {
            console.log(`You have not rented a ${this.make} ${this.model}.`);
        }
        else {
            this.rented = false;
            console.log(`You have returned your ${this.make} ${this.model}. Thank you for your business!`);
        }
    }
}
class Car extends Vehicle {
    constructor(make, model, year, rentalRate, rented = false) {
        super(make, model, year, rented);
        this.rentalRate = rentalRate;
    }
}
class Truck extends Vehicle {
    constructor(make, model, year, rentalRate, rented = false) {
        super(make, model, year, rented);
        this.rentalRate = rentalRate;
    }
}
// USE CASE:
// const car = new Car("Toyota", "Corolla", 2022, 3000);
// console.log(`The rental rate for the ${car.make} ${car.model} is ${car.rentalRate}rs per day.`);
// car.rent();
// console.log(`Is the ${car.make} ${car.model} rented? ${car.rented}`);
// car.return();
// console.log(`Is the ${car.make} ${car.model} rented? ${car.rented}`);
// const truck = new Truck("Toyota", "Hilux", 2022, 5000);
// console.log(`The rental rate for the ${truck.make} ${truck.model} is ${truck.rentalRate}rs per day.`);
//# sourceMappingURL=app.js.map