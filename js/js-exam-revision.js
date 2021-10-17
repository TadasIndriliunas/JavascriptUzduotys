console.log("I dalis");
const people = [
  {
  name: "Jonas",
  surname: "Jonaitis",
  age: 45,
  height: 1.80,
  weight: 85,
  sex: "male"
  },
  {
  name: "Algirdas",
  surname: "Blažys",
  age: 35,
  height: 1.87,
  weight: 95,
  sex: "male"
  },
  {
  name: "Zita",
  surname: "Mažeikytė",
  age: 65,
  height: 1.65,
  weight: 75,
  sex: "female"
  },
  {
  name: "Bronius",
  surname: "Ramanauskas",
  age: 27,
  height: 1.86,
  weight: 60,
  sex: "male"
  },
  {
  name: "Kunigunda",
  surname: "Ženkliauskaitė",
  age: 21,
  height: 1.74,
  weight: 60,
  sex: "female"  
  },
  {
  name: "Vitalija",
  surname: "Katunskytė",
  age: 65,
  height: 1.77,
  weight: 110,
  sex: "female"  
  },
  {
  name: "Petras",
  surname: "Gražulis",
  age: 14,
  height: 1.71,
  weight: 92,
  sex: "male"  
  },
  {
  name: "Oksana",
  surname: "Pikul",
  age: 19,
  height: 1.69,
  weight: 71,
  sex: "female"  
  }
];
//2
console.groupCollapsed("2 užduotis");

people.forEach(person => console.log(person));
console.log(".......................");

people.forEach(person => console.log(person.name + " " + person.surname));
console.log(".......................");

people.forEach(person => console.log(person.weight / person.height ** 2));

console.groupEnd();
console.log(".......................");
//3
console.groupCollapsed("3 užduotis");

const longerThanSix = people.filter(person => person.name.length > 6);
console.table(longerThanSix);
console.log(".......................");

const heavyPeople = people.filter(person => person.weight > 80);
console.table(heavyPeople);
console.log(".......................");

const tallPeople = people.filter(person => person.height > 1.85);
console.table(tallPeople);
console.groupEnd();
console.log(".......................");
//4
console.groupCollapsed("4 užduotis");

const heights = people.map(person => person.height);
console.table(heights);
console.log(".......................");

const weights = people.map(person => person.weight);
console.table(weights);
console.log(".......................");

function getHeightWeightAge(person){
  return {
    height: person.height, 
    weight: person.weight, 
    age: person.age
  }
}

const heightsWeightsAges = people.map(getHeightWeightAge);

const heightsWeightsAges2 = people.map(person => {height: person.height; weight: person.weight; age: person.age});
console.table(heightsWeightsAges);
console.log(".......................");

const BMIs = people.map(person => person.weight / person.height ** 2);
console.table(BMIs)
console.log(".......................");

function getBMIandAge(person){
  return {
    bmi: person.weight / person.height ** 2,
    age: person.age
  }
}

const BMIandAge = people.map(getBMIandAge);
console.table(BMIandAge);

console.groupEnd();
console.log(".......................");

//5
console.groupCollapsed("5 užduotis");

const weightSum = people.reduce((sum, weight) => sum + weight.weight, 0);
const weightAvg = weightSum / people.length;
console.log(weightAvg);

const heightSum = people.reduce((sum, height) => sum + height.height, 0);
const heightAvg = heightSum / people.length;
console.log(heightAvg);

console.groupEnd();
console.log(".......................");

console.log("II dalis");
//0

class Person{
  constructor({name, surname, age, height, weight, sex}){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.sex = sex;
  }

  getBMI(){
    return Math.round(10 * this.weight / (this.height) ** 2) / 10;
  }

  toString = () => {
    const { name, surname, ...rest } = this;
    return Object.entries(rest)
      .filter(([_, propVal]) => typeof propVal !== 'function')
      .reduce((propString, [name, val]) => propString + `\n\t${name}: ${val}`, `${name} ${surname}:`);
  }

//1
  youngerThan20HeavierThan70(){
    if(this.age < 20 && this.weight > 70){
    }
  }
}

const peopleArr = people.map(person => new Person(person));

console.groupCollapsed("0 užduotis");
{
peopleArr.forEach(person => console.log(person.getBMI()));
peopleArr.forEach(person => console.log(person.toString()));
}
console.groupEnd();
console.log("...................");

console.groupCollapsed("1 užduotis");
{
  const youngerThan20HeavierThan70 = peopleArr.filter(person => person.sex === 'female' && person.age < 20 && person.weight > 70);
  console.table(youngerThan20HeavierThan70);
}
console.groupEnd();
console.log("...................");

console.groupCollapsed("2 užduotis");
{
  const menYoungerThan25LowBMI = peopleArr.filter(person => person.sex === 'male' && person.age > 25 && person.getBMI() < 18.5);
  console.table(menYoungerThan25LowBMI);
}
console.groupEnd();
console.log("...................");

console.groupCollapsed("3 užduotis");
{
  const overweightKids = peopleArr.filter(person => person.age < 18 && person.getBMI() > 30);
  console.table(overweightKids);
}
console.groupEnd();
console.log("...................");

console.groupCollapsed("4 užduotis");
{
  const overweightEldery = peopleArr.filter(person => person.age >= 65 && person.getBMI() > 30);
  console.table(overweightEldery);
}
console.groupEnd();
console.log("...................");

console.groupCollapsed("5 užduotis");
{
  const result = peopleArr.filter(p => {
    const bmi = p.getBMI();
    return bmi < 18.5 || bmi > 25;
  });
  console.table(result);
}
console.groupEnd();
console.log("...................");