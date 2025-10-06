class Car {
  constructor(builder) {
    this.brand = builder.brand;
    this.color = builder.color;
    this.doors = builder.doors;
    this.engine = builder.engine;
  }
  tostring() {
    return `${this.brand}-${this.color}-${this.doors}-${this.engine}`;
  }
}

export class CarBuilder {
  setbrand(brand) {
    this.brand = brand;
    return this;
  }
  setcolor(color) {
    this.color = color;
    return this;
  }
  settdoor() {
    this.door = this.door;
    return this;
  }
  setengine() {
    this.engine = this.engine;
    return this;
  }
  build() {
    return newCar(this);
  }
}
