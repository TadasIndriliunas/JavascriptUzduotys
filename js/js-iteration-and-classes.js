class Car{
  constructor({brand, model, year, color, fuelTypes, price}){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.fuelTypes = fuelTypes;
    this.price = price;
  }
  getFuelType = () => this.fuelTypes.join('/');

  get getFuelType(){
    return this.fuelTypes.join('/')
  }
}

const data = [
    { brand: "Opel", model: "Vectra", year: 1990, color: "Red", fuelTypes: ["Petrol"], price: 500},
    { brand: "Audi", model: "A4", year: 2013, color: "Gray", fuelTypes: ["Petrol", "Gas"], price: 14000},
    { brand: "Volkswagen", model: "Passat", year: 2006, color: "Silver", fuelTypes: ["Diesel"], price: 2000},
    { brand: "Toyota", model: "Avensis", year: 2017, color: "Black", fuelTypes: ["Diesel"], price: 18000},
    { brand: "Mercedes", model: "E270", year: 2018, color: "White", fuelTypes: ["Electric"], price: 25000},
    { brand: "Fiat", model: "Multipla", year: 2017, color: "Green", fuelTypes: ["Petrol"], price: 500},
    { brand: "Volvo", model: "V70", year: 2004, color: "Blue", fuelTypes: ["Diesel"], price: 2100},
    { brand: "Toyota", model: "Prius", year: 2012, color: "Black", fuelTypes: ["Diesel", "Electric"], price: 10000}
]

const usd_eur = 1.16;

let cars;
let electricCars;
let petrolCars;

console.groupCollapsed("1 užduotis");
{
  const car = new Car ({brand: "Opel", model: "Vectra", year: 1990, color: "Red", fuelTypes: ["Petrol"], price: 500}) ;
  console.log(car);
}
console.groupEnd();
console.log(".....................");

console.groupCollapsed("2 užduotis");
{
  cars = data.map(carData => new Car(carData));
  console.table(cars);
}
console.groupEnd();
console.log(".....................");

console.groupCollapsed("3 užduotis");
{
  cars.forEach(c => console.log(c.getFuelType()));
}
console.groupEnd();
console.log(".....................");

console.groupCollapsed("4 užduotis");
{
  cars.forEach(car => console.log(`${car.brand} ${car.model} - ${car.getFuelType()}`));
}
console.groupEnd();
console.log(".....................");

console.groupCollapsed("5 užduotis");
{
  electricCars = cars.filter(c => c.fuelTypes.includes('Electric'));
  console.table(electricCars);
}
console.groupEnd();
console.log(".....................");

console.groupCollapsed("6 užduotis");
{
  petrolCars = cars.filter(c => c.fuelTypes.includes('Petrol') && c.year > 2016);
  console.table(petrolCars);

}
console.groupEnd();
console.log(".....................");

console.groupCollapsed("7 užduotis");
{
  const audi = cars.filter(c => (c.brand === 'Audi') && c.year >= 2012 && c.year <= 2016 && c.fuelTypes !== 'Diesel');
  console.table(audi);
}
console.groupEnd();
console.log(".....................");

console.groupCollapsed("8 užduotis");
{
  const priceAvg = electricCars.reduce((sum, x) => sum + x.price, 0) / electricCars.length;
  console.log(priceAvg);
}
console.groupEnd();
console.log(".....................");

console.groupCollapsed("9 užduotis");
{
  const sum = petrolCars.reduce((sum, x) => sum + x.price, 0);
  console.log(sum);
}
console.groupEnd();
console.log(".....................");

console.groupCollapsed("10 užduotis");
{
  const newCars= cars.map(car => {
    return {
      brand: car.brand,
      model: car.model,
      price: Math.round(car.price * usd_eur),
      fuelType: car.fuelType
    };
  });
  console.table(newCars);
}
console.groupEnd();
console.log(".....................");
