/* TS8

Object inheritance

Read the test file to understand the expected behaviour

You are not allowed to use if statements or ternary operators.

Example usage:

let house = new House();
house.addRoom(new Bedroom('Guest')); // Name is guest room
house.addRoom(new Bathroom('Main bathroom')); // Name is Main Bathroom
house.addRoom(new LargeRoom('Master')); // Name is Master
house.removeRoom('Guest');
house.addCar(new Car('WD13 WEZ')); //Registration is WS13 WEZ
house.removeCar('WD13WEZ');
house.addCar(new Car('AA66 AEZ')); // Registration is AA66 AEZ
house.cars[0].toggleLock(); // toggles lock for car on and off
console.log(house.cars[0].isLocked); // outputs true

*/

export class House {
    public rooms: Room[] = [];
    public cars: Car[] = [];

    public addRoom = (room: Room) => this.rooms.push(room);
    public removeRoom = (room: Room) => {
      const roomID = this.rooms.indexOf(room);
      this.rooms.splice(roomID, 1);
    }

    public addCar = (car: Car) => this.cars.push(car);
    public removeCar = (car: Car) => {
      const carID = this.cars.indexOf(car);
      this.cars.splice(carID, 1);
    }

  }

export class Car {
    public isLocked = false;

    constructor(public registration: string) {}

    public toggleLock() {
      this.isLocked = !this.isLocked;
    }
  }

export class Room {
    public contents: string[];
    constructor(public name: string) {}
  }

export class Bathroom  extends Room {
    public contents = ["Toilet", "Sink"];
  }

export class Bedroom  extends Room {
    public contents = ["Single bed", "Wardrobe", "Drawers"];
  }

export class LargeRoom  extends Bedroom {
    public contents = ["King size bed", "Wardrobe", "Drawers"];
  }
