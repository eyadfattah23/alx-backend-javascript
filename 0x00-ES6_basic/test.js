/*
const cat = {
    name: 'Bertie',
    breed: 'Cymric',
    color: 'white',
    greeting: function () {
        console.log(`Hello, said ${this.name} the ${this.breed}.`);
    }
}

const cat2 = {
    name: 'Elfie',
    breed: 'Aphrodite Giant',
    color: 'ginger',
    greeting: function () {
        console.log(`Hello, said ${this.name} the ${this.breed}.`);
    }
}
*/

const createCat = function (name, breed, color) {
  const obj = {};
  obj.name = name;
  obj.breed = breed;
  obj.color = color;

  obj.greeting = function () {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  };

  return obj;
};

const cat = createCat('berti', 'cyramic', 'whier');
const cat2 = createCat('Elfie', 'Aphrodite', 'ginger');
cat.greeting();
cat2.greeting();
