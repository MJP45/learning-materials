import { Bathroom, Bedroom, Car, House, LargeRoom } from "./ts8-solution";

test("Can add room to the house", () => {
    const house = new House();
    house.addRoom(new Bedroom("Guest"));
    expect(house.rooms[0].name).toBe("Guest");
});

test("Can add multiple rooms to the house", () => {
    const house = new House();
    house.addRoom(new Bedroom("Guest"));
    house.addRoom(new LargeRoom("Master"));
    house.addRoom(new Bedroom("Kids"));
    house.addRoom(new Bedroom("Spare"));
    expect(house.rooms[1].name).toBe("Master");
    expect(house.rooms[2].name).toBe("Kids");
    expect(house.rooms[3].name).toBe("Spare");
});

test("Can remove a room from the house", () => {
    const house = new House();
    house.addRoom(new Bedroom("Guest"));
    house.addRoom(new LargeRoom("Master"));
    house.addRoom(new Bedroom("Kids"));
    house.addRoom(new Bedroom("Spare"));
    const kidsRoom = house.rooms[2];
    expect(house.rooms[2].name).toBe("Kids");
    house.removeRoom(kidsRoom);
    expect(house.rooms[1].name).toBe("Master");
    expect(house.rooms[2].name).toBe("Spare");
});

test("Rooms have correct types", () => {
    const house = new House();
    house.addRoom(new Bathroom("Guest"));
    house.addRoom(new Bedroom("Guest"));
    house.addRoom(new LargeRoom("Master"));
    expect(house.rooms[0] instanceof Bathroom).toBeTruthy();
    expect(house.rooms[1] instanceof Bedroom).toBeTruthy();
    expect(house.rooms[2] instanceof LargeRoom).toBeTruthy();
});

test("Rooms have things in them", () => {
    const house = new House();
    house.addRoom(new Bathroom("Family Bathroom"));
    house.addRoom(new Bedroom("Spare"));
    house.addRoom(new LargeRoom("Master"));

    expect(house.rooms[0].contents.indexOf("Toilet")).not.toBe(-1);
    expect(house.rooms[0].contents.indexOf("Sink")).not.toBe(-1);

    expect(house.rooms[1].contents.indexOf("Single bed")).not.toBe(-1);
    expect(house.rooms[1].contents.indexOf("Wardrobe")).not.toBe(-1);
    expect(house.rooms[1].contents.indexOf("Drawers")).not.toBe(-1);

    expect(house.rooms[2].contents.indexOf("King size bed")).not.toBe(-1);
    expect(house.rooms[2].contents.indexOf("Wardrobe")).not.toBe(-1);
    expect(house.rooms[2].contents.indexOf("Drawers")).not.toBe(-1);
});

test("Can add car to the house", () => {
    const house = new House();
    house.addCar(new Car("WD12 YES"));
    expect(house.cars[0].registration).toBe("WD12 YES");
});

test("Can add another car to the house", () => {
    const house = new House();
    house.addCar(new Car("WD12 YES"));
    house.addCar(new Car("WD66TER"));
    expect(house.cars[1].registration).toBe("WD66TER");
});

test("Can remove a car from the house", () => {
    const house = new House();
    house.addCar(new Car("WD12 YES"));
    house.addCar(new Car("WD66TER"));
    expect(house.cars.length).toBe(2);
    expect(house.cars[0].registration).toBe("WD12 YES");
    house.removeCar(house.cars[0]);
    expect(house.cars[0].registration).toBe("WD66TER");
    expect(house.cars.length).toBe(1);
});

test("Can unlock car", () => {
    const house = new House();
    house.addCar(new Car("WD12 YES"));
    house.addCar(new Car("WD66TER"));
    expect(house.cars[0].isLocked).toBeFalsy();
    expect(house.cars[1].isLocked).toBeFalsy();
    house.cars[0].toggleLock();
    expect(house.cars[0].isLocked).toBeTruthy();
    expect(house.cars[1].isLocked).toBeFalsy();
    house.cars[0].toggleLock();
    expect(house.cars[0].isLocked).toBeFalsy();
    expect(house.cars[1].isLocked).toBeFalsy();
    house.cars[1].toggleLock();
    expect(house.cars[1].isLocked).toBeTruthy();
});
