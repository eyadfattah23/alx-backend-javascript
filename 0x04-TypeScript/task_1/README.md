## task:
Create a directory task_1 and copy these configuration files into this folder: package.json, tsconfig.json, webpack.config.js

* firstName(string) and lastName(string). These two attributes should only be modifiable when a Teacher is first initialized
* fullTimeEmployee(boolean) this attribute should always be defined
* yearsOfExperience(number) this attribute is optional
* location(string) this attribute should always be defined
* Add the possibility to add any attribute to the Object like contract(boolean) without specifying the name of the attribute


Write a Class named StudentClass:

* The constructor accepts firstName(string) and lastName(string) arguments
* The class has a method named workOnHomework that return the string Currently working
* The class has a method named displayName. It returns the firstName of the student
* The constructor of the class should be described through an Interface
* The class should be described through an Interface

Requirements:

* You can reuse the Webpack configuration from the previous exercise to compile the code.
* When running npm run build, no TypeScript error should be displayed.
* Every variable should use TypeScript when possible.

Example:

```js
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"

```
## resources:

* https://stackoverflow.com/questions/67773420/create-interface-in-typescript-without-specifying-property-name
* https://www.youtube.com/watch?v=U405xMeS4lM&list=PLDoPjvoNmBAy532K9M_fjiAmrJ0gkCyLJ&index=6
* https://www.typescriptlang.org/docs/handbook/2/objects.html
* https://www.typescriptlang.org/docs/handbook/interfaces.html
* [function interface](https://stackoverflow.com/questions/14813804/typescript-function-interface)
* https://www.codecademy.com/learn/learn-typescript/modules/learn-typescript-advanced-object-types/cheatsheet
notes:

* check command in the main readme in the parent dir 
* tsc -v, tsc file.ts, or any tsc file only runs with node version >= 14 
* [online playground](https://www.typescriptlang.org/play/?#code/JYOwLgpgTgZghgYwgAgCoUQC2sg3gKGWSgwBMB7EAGwE9kZgoBnMAOTgFsIAuZFqUAHMA3IWJlKtZFTgt2XXvyGiiMAK5UqqYFwCiHAA5VyNCD2QAjcuSoYQK5KbjMA8jF0APA9GAQQSAH5eEDUOC2gHYwQ4MGBKRTABEBExAG0DKHIDEE5zJWSAXV44EBpRAF98fFBIWEQUABFGCAQwcmZkCA9IEFImNAwEbCg8MRCw6DcAJQgDdrAmYNDwqAqqhEoWZEgsaABmXnRdkYBeUdVGOVzeAHIAKXJMEBuAGjF1TW09Q2NTc3gqEwIG8iDIrgpkDcGuQIK8xFEYnEQLcADKUCjPEHIDbgKCIMC8AFAt7lUT4HFMGwQAB0xkEAAodkN9gBKUQUsDIUjNVrtACMvCaJF5HTOBAuzDY10hDyecNBsilEKhMPl0nI0Vi8UhaN6lDVHy0Ogg+iMJjMvESamBY2WkxgMzmUAWvD5AHYSezNlTaeQGdzhW0oHy2fggA)
