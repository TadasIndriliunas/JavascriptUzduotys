const people = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false
  }
];
console.groupCollapsed('1. Atspausdinkite visus žmones eilutėmis');
{
  function printPerson(person) {
    console.log(person);
    // console.log(person.name, person.surname, person.sex, person.income, person.age, person.married, person.hasCar);
  }

  people.forEach(printPerson);
}
console.groupEnd();

console.groupCollapsed('2. Atpausdinkite visus žmonių vardus ir pavardes, atskirtus brūkšneliu');
{
  function printFullname(person) {
    console.log(person.name + '-' + person.surname);
  }

  people.forEach(printFullname);
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusą');
{
  function printFullnameAndMarried(person) {
    console.log(`${person.name} ${person.surname}: ${person.married ? 'married' : 'not married'}`);
    // console.log(person.name, person.surname + ':', person.married ? 'married' : 'not married');
    // console.log(person.name + ' ' + person.surname + ': ' + (person.married ? 'married' : 'not married'));
  }

  people.forEach(printFullnameAndMarried);
}
console.groupEnd();

console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
  function getSexAndIncome(person){
    return {
      sex: person.sex,
      income: person.income
    };
  }

  const sexAndIncomeData = people.map(getSexAndIncome);
  console.table(sexAndIncomeData);
}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  function getNameSurnameSex(person){
    return {
      name: person.name,
      surname: person.surname,
      sex: person.sex
    };
  }

  const nameSurnameSexData = people.map(getNameSurnameSex);
  console.table(nameSurnameSexData);
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
  function getMales(person){
    if(person.sex === "male"){
      console.log(person);
    }
  }
  const males = people.filter(getMales);
  console.log(males);
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
  function getFemales(person){
    if(person.sex === "female"){
      console.log(person);
    }
  }
  const females = people.filter(getFemales);
  console.log(females);
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
  function hasCars(person){
    if(person.hasCar === true){
      console.log({
        name: person.name,
        surname: person.surname,
      });
    }
  }
  const hasCar = people.filter(hasCars);
  console.log(hasCar);
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
  function areMarried(person){
    if(person.married === true){
      console.log(person);
    }
  }
  const married = people.filter(areMarried);
  console.log(married);
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
  let driversBySex = {
    male: 0,
    female: 0
  };
  people.forEach(function (person){
    if(person.hasCar === true){
      if(person.sex === "male"){
        driversBySex.male++;
      } else{
        driversBySex.female++;
      }
    }
  });
  console.table(driversBySex);
}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  let newArray = [];
  newArray = people.map(function(person){
    return{
      name: person.name,
      surname: person.surname,
      sex: person.sex,
      age: person.age,
      salary: person.income,
      married: person.married,
      hasCar: person.hasCar,
    };
  });
  console.log(newArray);
}
  
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
  let newArray = [];
  newArray = people.map(function(person){
    return{
      age: person.age,
      income: person.income,
      married: person.married,
      hasCar: person.hasCar,
    };
  });
  console.table(newArray);
}
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  let newArray = [];
  newArray = people.map(function(person){
    return{
      fullname: person.name + " " + person.surname,
      sex: person.sex,
      age: person.age,
      salary: person.income,
      married: person.married,
      hasCar: person.hasCar,
    };
  });
  console.table(newArray);
}
console.groupEnd();

