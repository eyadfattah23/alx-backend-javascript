# ES6 Basics 


## Resources

Read or watch:

* Promise
* JavaScript Promise: An introduction
* Await
* Async
* Throw / Try
* [static promise methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve )
* [all settled](https://youtu.be/OipVzp0R7zs?si=zBv31IOXZETESQTm)

## Learning Objectives

At the end of this project, expected to be able to explain to anyone, without the help of Google:


* Promises (how, why, and what)
* How to use the then, resolve, catch methods
* How to use every method of the Promise object
* Throw / Try
* The await operator
* How to use an async function



### General

* All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
* Allowed editors: vi, vim, emacs, Visual Studio Code
* All files should end with a new line
* A README.md file, at the root of the folder of the project, is mandatory
* code should use the js extension
* code will be tested using the Jest Testing Framework
* code will be analyzed using the linter ESLint along with specific rules that we’ll provide
* All functions must be exported


### imp tasks:

6. Handle multiple promises
mandatory

Import `signUpUser` from `4-user-promise.js` and `uploadPhoto` from `5-photo-reject.js`.

Write and export a function named ``handleProfileSignup``. It should accept three arguments `firstName` (string), `lastName` (string), and `fileName` (string). The function should call the two other functions. When the promises are all settled it should return an array with the following structure:
```js
[
    {
      status: status_of_the_promise,
      value: value or error returned by the Promise
    },
    ...
  ]
```
