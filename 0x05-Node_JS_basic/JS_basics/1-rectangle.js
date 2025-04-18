
class Rectangle {
  constructor(w, h) {
    if (typeof (w) === "number" && typeof (h) === "number" && h >= 1 && w >= 1) {
      this.width = w;
      this.height = h;
    }
  }
  print() {
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++)
        process.stdout.write('X')
      console.log();
    }
  }
  rotate() {
    [this.height, this.width] = [this.width, this.height]
  }
  double() {
    this.height *= 2;
    this.width *= 2;
  }

  charPrint(c) {
    if (!c)
      this.print()
    else {
      for (let i = 0; i < this.height; i++) {
        for (let j = 0; j < this.width; j++)
          process.stdout.write('C')
        console.log();
      }
    }
  }
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }
}

const r1 = new Rectangle(2, 3);
console.log(r1);
console.log(r1.width);
console.log(r1.height);

const r2 = new Rectangle(2, -3);
console.log(r2);
console.log(r2.width);
console.log(r2.height);

const r3 = new Rectangle(2);
console.log(r3);
console.log(r3.width);
console.log(r3.height);

const r4 = new Rectangle(2, 0);
console.log(r4);
console.log(r4.width);
console.log(r4.height);


///


const r5 = new Rectangle(2, 3);
r5.print();

const r6 = new Rectangle(10, 5);
r6.print();

////




const r7 = new Rectangle(2, 3);
console.log('Normal:');
r7.print();

console.log('Double:');
r7.double();
r7.print();

console.log('Rotate:');
r7.rotate();
r7.print();
/////////

const s1 = new Square(4);
s1.print();
s1.double();
s1.print();
/////////

const s2 = new Square(4);
s2.charPrint();

s2.charPrint('C');
