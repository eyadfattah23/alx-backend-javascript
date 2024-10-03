# ES6 Basics 


## Resources

Read or watch:

* ECMAScript 6 - ECMAScript 2015
* Statements and declarations
* Arrow functions
* Default parameters
* Rest parameter
* Javascript ES6 — Iterables and Iterators

## Learning Objectives

At the end of this project, expected to be able to explain to anyone, without the help of Google:

* What ES6 is
* New features introduced in ES6
* The difference between a constant and a variable
* Block-scoped variables
* Arrow functions and function parameters default to them
* Rest and spread function parameters
* String templating in ES6
* Object creation and their properties in ES6
* Iterators and for-of loops


### General

* All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
* Allowed editors: vi, vim, emacs, Visual Studio Code
* All files should end with a new line
* A README.md file, at the root of the folder of the project, is mandatory
* code should use the js extension
* code will be tested using the Jest Testing Framework
* code will be analyzed using the linter ESLint along with specific rules that we’ll provide
* All functions must be exported


### imp. tasks:

4. Rest parameter syntax for functions 

Modify the following function to return the number of arguments passed to it using the rest parameter syntax

```js
export default function returnHowManyArguments() {

}
```

Example:
```shell
> returnHowManyArguments("Hello", "Holberton", 2020);
3
```

---

5. The wonders of spread syntax 
Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.

Execution:
```sh
bob@dylan:~$ cat 5-main.js
import concatArrays from './5-spread-operator.js';

console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));

bob@dylan:~$
bob@dylan:~$ npm run dev 5-main.js 
[
  'a', 'b', 'c',
  'd', 'H', 'e',
  'l', 'l', 'o'
]
```
