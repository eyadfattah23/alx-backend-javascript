/* eslint-disable no-underscore-dangle */
import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    /*     if (typeof (brand) !== 'string') {
        throw new TypeError('Brand must be a string');
      }
      if (typeof (motor) !== 'string') {
        throw new TypeError('Motor must be a string');
      }
      if (typeof (color) !== 'string') {
        throw new TypeError('Color must be a string');
      } */
    super(brand, motor, color);
    this._range = range;
  }

  static get [Symbol.species]() {
    return Car;
  }

  cloneCar() {
    return new this.constructor[Symbol.species]();
  }
}
