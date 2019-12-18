export let minDateableAge = (age: number): number => (age / 2) + 7;

export let hasFever = (tempInCelsius: number): boolean => tempInCelsius >= 37.5;

export let calcTVHeight = (width: number): number => (width / 16) * 9;

export let couldDate = (age1: number, age2: number): boolean => {
  if (age1 === age2) { return true; }
  const orderedAges: number[] = [age1, age2].sort();
  const lowerAge: number = orderedAges[0];
  const minAge: number = minDateableAge(orderedAges[1]);
  return lowerAge >= minAge;
};

function floor(value: number, amount: number): number {
  return (value - amount < 0) ? 0 : value - amount;
}

interface IRGBColor {
  red: number;
  green: number;
  blue: number;
}

export let colorDarken = (rgb: IRGBColor, darkenAmount: number): IRGBColor => {
  const red = floor(rgb.red, darkenAmount);
  const green = floor(rgb.green, darkenAmount);
  const blue = floor(rgb.blue, darkenAmount);

  return {red, green, blue};
};
