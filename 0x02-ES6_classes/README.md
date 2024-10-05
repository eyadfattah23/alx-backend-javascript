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
