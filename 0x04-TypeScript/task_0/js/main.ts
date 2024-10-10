interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
};

const student1: Student = {
  firstName: 'osama',
  lastName: 'string',
  age: 1000,
  location: 'eg',
}

const student2: Student = {
  firstName: 'lucky',
  lastName: 'bool',
  age: 963,
  location: 'uk',
}

const studentsList: Student[] = [student1, student2] 


// Create a table element
const table = document.createElement('table');

// Iterate over the studentsList and append rows to the table
studentsList.forEach(student => {
  const row = document.createElement('tr'); // Create a table row

  // Create table cells for firstName and location
  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  const lastNameCell = document.createElement('td');
  lastNameCell.textContent = student.lastName;
  const ageCell = document.createElement('td');
  ageCell.textContent = student.age.toString();

  // Append the cells to the row
  row.appendChild(firstNameCell);
  row.appendChild(lastNameCell);
  row.appendChild(ageCell);
  row.appendChild(locationCell);

  // Append the row to the table
  table.appendChild(row);
});

// Add the table to the body of the document (or another container)
document.body.appendChild(table);
