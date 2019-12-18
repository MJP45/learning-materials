import { IPerson } from './ts6-data';

export class Person {
	public isVegetarian: boolean;
	public name: string;
	public age: number;
	public height: number;
	constructor(data: IPerson) {
		this.isVegetarian = data.isVegetarian;
		this.name = data.name;
		this.age = data.age;
		this.height = data.height;
	}

	public get canFitOnANameCard(): boolean {
		return this.name.length <= 6;
	}
	public get lifeExpectancy(): number {
		return this.isVegetarian ? 90 : 95;
	}

	public get yearsRemaining(): number {
		return this.lifeExpectancy - this.age;
	}

	public get canRideOnARollercoaster(): boolean {
		return this.height >= 120;
	}

	public get canBuyBeer(): boolean {
		return this.age >= 18;
	}

	public getSummary = (): string => {
		const vegetarianMessage = this.isVegetarian ? 'is a vegetarian' : 'likes meat';
		const deadMessage =
			this.yearsRemaining < 0 ? 'should be dead' : 'has ' + this.yearsRemaining + ' years to live';
		return this.name + ' ' + vegetarianMessage + ', is ' + this.height + 'cm tall and ' + deadMessage;
	};
}
