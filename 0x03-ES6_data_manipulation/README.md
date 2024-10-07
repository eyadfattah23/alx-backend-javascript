# ES6 Basics 


## Resources

Read or watch:

* Array
* Typed Array
* Set Data Structure
* Map Data Structure
* WeakMap
* [Intro to Typed Arrays](https://www.youtube.com/watch?v=UYkJaW3pmj0)

## Learning Objectives

At the end of this project, expected to be able to explain to anyone, without the help of Google:


* How to use map, filter and reduce on arrays
* Typed arrays
* The Set, Map, and Weak link data structures




### General


* All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
* Allowed editors: `vi`, `vim,` `emacs`, `Visual Studio Code`
* All files should end with a new line
* A `README.md` file, at the root of the folder of the project, is mandatory
* code should use the js extension
* code will be tested using Jest and the command npm run test
* code will be verified against lint using ESLint
* code needs to pass all the tests and lint. verify the entire project running `npm run full-test`
* All of functions must be exported


### imp tasks:

11. Weak link data structure
#advanced

Export a `const` instance of `WeakMap` and name it `weakMap`.

Export a new function named `queryAPI`. It should accept an endpoint argument like so:

```js
  {
    protocol: 'http',
    name: 'getUsers',
  }
```
Track within the `weakMap` the number of times `queryAPI` is called for each endpoint.

When the number of queries is >= 5 throw an error with the message `Endpoint load is high`.

```bash
bob@dylan:~$ cat 100-main.js
import { queryAPI, weakMap } from "./100-weak.js";

const endpoint = { protocol: 'http', name: 'getUsers' };
weakMap.get(endpoint);

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 100-main.js 
1
2
.../100-weak.js:16
    throw new Error('Endpoint load is high');
   ...
bob@dylan:~$ 
```
