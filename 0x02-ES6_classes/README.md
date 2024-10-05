# ES6 Basics 


## Resources

Read or watch:


* Classes
* Metaprogramming
* [array.every method](https://www.w3schools.com/jsref/jsref_every.asp)
* [type of and isArray](https://www.w3schools.com/js/js_typeof.asp) 
* [instanceof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)
* [How to get a JavaScript object's class](https://stackoverflow.com/questions/1249531/how-to-get-a-javascript-objects-class)
* [getOwnPropertyNames](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)
* https://www.w3schools.com/js/js_object_properties.asp

* [How to change the way that String or Number cast a class in JavaScript?](https://stackoverflow.com/questions/71949115/how-to-change-the-way-that-string-or-number-cast-a-class-in-javascript)


## Learning Objectives

At the end of this project, expected to be able to explain to anyone, without the help of Google:



* How to define a Class
* How to add methods to a class
* Why and how to add a static method to a class
* How to extend a class from another
* Metaprogramming and symbols




### General


* All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
* Allowed editors: vi, vim, emacs, Visual Studio Code
* All files should end with a new line
* A README.md file, at the root of the folder of the project, is mandatory
* code should use the js extension
* code will be tested using Jest and the command npm run test
* code will be verified against lint using ESLint
* code needs to pass all the tests and lint. verify the entire project running npm run full-test* 


### imp tasks:

9. 9-hoisting.js
```javascript
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-classes-per-file */
export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this._holbertonClass;
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

export const listOfStudents = [student1, student2, student3, student4, student5];

/* console.log(listOfStudents); */

```



### What is `Symbol.species` in JavaScript?

In JavaScript, `Symbol.species` is a well-known symbol used to control the constructor that is used when instances of a class are cloned or when methods like `map()`, `filter()`, or any other method returning new instances of an object are called. By default, the constructor of the derived class is used to create new instances, but `Symbol.species` allows us to override this behavior and return instances of a different class.

#### Why Use `Symbol.species`?
Sometimes when you inherit from a class, you don't want methods in the child class to return instances of the child, but rather instances of the parent or some other class. `Symbol.species` allows you to specify what constructor should be used when methods of an object return new instances, like when using cloning or certain built-in methods.

### Example of `Symbol.species`

In the example below, the `cloneCar()` method is used to clone an instance of the `Car` class. Without `Symbol.species`, cloning would use the constructor of the current class (`EVCar` in the case of an instance of `EVCar`). By defining `Symbol.species` in the `EVCar` class, you specify that when `cloneCar()` is called, the result should be an instance of `Car`, not `EVCar`.

Here’s the breakdown of the two classes you provided:

### `Car` Class

```javascript
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return new this.constructor();
  }
}
```

In this `Car` class:
- The `cloneCar()` method uses `this.constructor()` to create a new instance of the same class (`Car`). So, when you call `cloneCar()`, it will return a new `Car` instance by default.

### `EVCar` Class (with `Symbol.species`)

```javascript
export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  static get [Symbol.species]() {
    return Car;
  }

  cloneCar() {
    return new this.constructor[Symbol.species]();
  }
}
```

- In the `EVCar` class, when `cloneCar()` is called, it uses `this.constructor[Symbol.species]()` to create the new instance.
- `Symbol.species` is overridden in the `EVCar` class to return `Car` instead of `EVCar`. This means that even if you call `cloneCar()` on an instance of `EVCar`, it will return a `Car` instance rather than an `EVCar` instance.

### The Difference Between Using `Symbol.species` and Using Constructors Inside a Class Method

1. **Without `Symbol.species`**:
   If you use `this.constructor()` directly inside a method like `cloneCar()`, it will always create an instance of the class from which the method was called. This is fine in most cases, but sometimes you might want a method in a derived class to return an instance of the parent class (or another class). For instance:
   
   ```javascript
   let myEV = new EVCar('Tesla', 'Electric', 'Red', '500km');
   let clonedEV = myEV.cloneCar(); // returns EVCar instance
   ```

2. **With `Symbol.species`**:
   Using `Symbol.species`, you can control what type of instance gets returned when you create a new instance using methods like `cloneCar()`. This is useful when you want to override the default behavior in derived classes:
   
   ```javascript
   let myEV = new EVCar('Tesla', 'Electric', 'Red', '500km');
   let clonedCar = myEV.cloneCar(); // returns Car instance due to Symbol.species
   ```

### Why Use `Symbol.species` Instead of a Constructor?
- **Customization**: With `Symbol.species`, you can specify a parent class or any other class when creating new instances from a child class. This is useful when the child class extends the parent class, but you want certain operations (like cloning) to return instances of the parent instead.
  
- **Maintain Class Hierarchy**: In some cases, certain methods like cloning or mapping operations should return an instance of the parent class to preserve generality and avoid specific behavior from derived classes.

By using `Symbol.species` in `EVCar`, you're specifying that any operation that would typically return an `EVCar` (such as cloning) should return a `Car` instead, which can be helpful when you want to limit the features of the derived class in certain operations. 

In summary:
- **`this.constructor()`**: Always uses the constructor of the class calling the method.
- **`Symbol.species`**: Allows you to return instances of another class (usually a parent class) when methods like cloning are invoked.

### Example Usage with the Given Classes

```javascript
let myCar = new Car('BMW', 'V8', 'Black');
let clonedCar = myCar.cloneCar(); // Returns Car instance

let myEV = new EVCar('Tesla', 'Electric', 'Red', '500km');
let clonedEV = myEV.cloneCar(); // Returns Car instance due to Symbol.species in EVCar
``` 

In this example, when cloning an `EVCar`, we get a `Car` instance back instead of another `EVCar`.
