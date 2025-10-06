class Car {
  constructor(builder) {
    this.brand = builder.brand;
    this.color = builder.color;
    this.doors = builder.doors;
    this.engine = builder.engine;
  }
  toString() {
    return `brand: ${this.brand}-with color: ${this.color}- and ${this.doors}doors- and engine${this.engine}`;
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
    return new Car(this);
  }
}
