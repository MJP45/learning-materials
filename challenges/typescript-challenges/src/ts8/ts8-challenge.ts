/* TS8

Object inheritance

Read the test file to understand the expected behaviour

You are not allowed to use if statements or ternary operators.

- Bedrooms and large rooms should have wardrobe and drawers
- Large rooms should have a king size bed, small rooms should have a single bed
- Bathrooms should have a toilet and sink

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
