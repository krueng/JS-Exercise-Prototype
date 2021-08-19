/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function (edible) {
  this.stomach.length < 10 ? this.stomach.push(edible) : this.stomach.length = 10;
}

Person.prototype.poop = function () {
  this.stomach = [];
}

Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`
}

//create my objects
const ad = new Person('Ad', 111);
const am = new Person('Am', 119);

console.log(ad.toString());
console.log(am.toString());

//eat
ad.eat('🥝');
ad.eat('🍢');
ad.eat('🥗');
ad.eat('🫕');
ad.eat('🥭');

console.log(ad.stomach);

ad.poop();
console.log(ad.stomach);

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function (gallons) {
  this.tank += gallons;
}

Car.prototype.drive = function (distance) {
  this.odometer += distance;
  const driveableDistance = this.tank * this.milesPerGallon;

  //if distance is more than available fuel
  if (driveableDistance < distance) {
    return `I ran out of fuel at ${driveableDistance} miles!`
  } else {
    this.tank -= distance / this.milesPerGallon;
    return `I can still drive ${this.milesPerGallon * this.tank} more miles with ${this.tank} gallons fuel in the tank.`
  }

}

//create my objects
const moto = new Car('Moto', 50);

//fill in the tank
moto.fill(25);

console.log(moto.drive(5005))
// console.log(moto.tank);

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  //baby inherit the person
  Person.call(this, name, age); //only what Parson has.
  //Baby's own
  this.favoriteToy = favoriteToy;
}

//tell to inherit the Person's method
Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function () {
  return `Playing with ${this.favoriteToy}`;
}

//create my object
const giantBaby = new Baby('Moe', 55, 'Spatula');

console.log(giantBaby.play());
/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. Global scope without strict mode will return undifined, else will return window
  2. Implicit Binding: used for about 80% of the time, look to the left of the dot, apply to object with method.
  3. Explicit Binding: used for .call, .apply, and .bind.
  4. New Binding: Pointing to the new created object, new keyword.
*/


///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo() {
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person,
  Car,
  Baby
}