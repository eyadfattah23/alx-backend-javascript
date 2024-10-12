## task:
Write your code in the main.ts file:

* Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
* Create two students, and create an array named studentsList containing the two variables
* Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
* Each row should contain the first name of the student and the location

Requirements:

* When running, Webpack should return `No type errors found.`
* Every variable should use TypeScript when possible.

## resources:

* [create a table using vanilla js](https://stackoverflow.com/a/35618001)
* https://www.youtube.com/watch?v=U405xMeS4lM&list=PLDoPjvoNmBAy532K9M_fjiAmrJ0gkCyLJ&index=6


## steps:
Here are the steps to accomplish the task using TypeScript and Vanilla JavaScript:

### Steps to complete the task:

1. **Set up the Project**:
   - Create a new directory and copy the provided configuration files (`package.json`, `.eslintrc.js`, `tsconfig.json`, `webpack.config.js`) into it.
   
2. **Install Dependencies**:
   - Run the following command to install the necessary dependencies:
     ```bash
     npm install
     ```

3. **Create the TypeScript Code**:
   - In the `js` directory, create a file named `main.ts`.
   - Define an interface `Student` with properties `firstName`, `lastName`, `age`, and `location`:
     ```ts
     interface Student {
       firstName: string;
       lastName: string;
       age: number;
       location: string;
     }
     ```

4. **Create Student Objects**:
   - Define two student objects using the `Student` interface and an array `studentsList` containing them:
     ```ts
     const student1: Student = {
       firstName: 'osama',
       lastName: 'string',
       age: 1000,
       location: 'eg',
     };

     const student2: Student = {
       firstName: 'lucky',
       lastName: 'bool',
       age: 963,
       location: 'uk',
     };

     const studentsList: Student[] = [student1, student2];
     ```

5. **Render Table in Vanilla JavaScript**:
   - Using Vanilla JavaScript, create a table dynamically and append the `firstName` and `location` of each student to a new row in the table:
     ```ts
     const table = document.createElement('table');
     studentsList.forEach((student) => {
       const row = table.insertRow();
       const firstNameCell = row.insertCell(0);
       const locationCell = row.insertCell(1);

       firstNameCell.textContent = student.firstName;
       locationCell.textContent = student.location;
     });

     document.body.appendChild(table);
     ```

6. **Update Webpack Entry**:
   - In `webpack.config.js`, ensure that the `entry` points to the `main.ts` file:
     ```js
     entry: "./js/main.ts",
     ```

7. **Build and Run**:
   - Run Webpack in development mode:
     ```bash
     npm run start-dev
     ```

8. **Check Output**:
   - Once Webpack builds successfully, a table displaying the students' first names and locations will appear in the browser.

### Final Code (`main.ts`):

```ts
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'osama',
  lastName: 'string',
  age: 1000,
  location: 'eg',
};

const student2: Student = {
  firstName: 'lucky',
  lastName: 'bool',
  age: 963,
  location: 'uk',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell(0);
  const locationCell = row.insertCell(1);

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

document.body.appendChild(table);
```

This approach covers the requirements of the task while ensuring that Webpack compiles and runs without errors.
