## task:
Create a directory task_1 and copy these configuration files into this folder: package.json, tsconfig.json, webpack.config.js

    firstName(string) and lastName(string). These two attributes should only be modifiable when a Teacher is first initialized
    fullTimeEmployee(boolean) this attribute should always be defined
    yearsOfExperience(number) this attribute is optional
    location(string) this attribute should always be defined
    Add the possibility to add any attribute to the Object like contract(boolean) without specifying the name of the attribute

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

check command in the main readme in the parent dir 
