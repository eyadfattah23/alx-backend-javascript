interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propname: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}
const printTeacher: PrintTeacherFunction = function (firstName, lastName) {
  return `${firstName[0]}. ${lastName}`;
};

console.log(printTeacher(teacher3.firstName, director1.lastName));

interface SClass {
  firstName: string;
  lastName: string;
  workOnHomework: () => string;
  displayName: () => string;

}
class StudentClass implements SClass {
    firstName: string;

    lastName: string;

    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    workOnHomework() {
      return `Currently working`;
    }

    displayName() {
      return `${this.firstName}`;
    }
}
