console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
  drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}
  ];
  function sortDrinksByPrice(first, second){
    return first.price - second.price;
  }
  drinks.sort(sortDrinksByPrice);
  console.log(drinks);
}
console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
  function addName(obj, propName, propValue){
    obj[propName] = propValue;
    return obj;
  }
  console.log(addName({}, 'Brutus', 300))
}
console.groupEnd();

console.groupCollapsed('3 - https://edabit.com/challenge/48EJWLhF224na8po3');
{
  const relation = {
    '-3': {m: 'great grandfather', f: "great grandmother"},
    '-2': {m: 'grandfather', f: "grandmother"},
    '-1': {m: 'father', f: "mother"},
    0: {m: 'me!', f: 'me'},
    1: {m: 'son', f: 'daughter'},
    2: {m: 'grandson', f: 'granddaughter'},
    3: {m: 'great grandson', f: 'great granddaughter'},
  };
  function generation(x, y){
    return relation[x][y];
  }
  console.log(generation(-2,'f'));
}
console.groupEnd();

console.groupCollapsed('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{
  const titleScore = [
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 }
  ];
  function maximumScore(base, titleScore){
    return base + titleScore.score;
  }
  console.log(titleScore.reduce(maximumScore, 0));

}
console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{
  function calculateDifference(obj, limit){
    const valueArray = Object.values(obj);
    let totalValue = 0;
    for (let i = 0; i < valueArray.length; i++){
      totalValue += valueArray[i];
    }
    return totalValue - limit;
  }
  console.log(calculateDifference({ "baseball bat": 20 }, 5));
}
console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{
  function toArray(obj) {
    const array = [];
    for(let i in obj){
      array.push([i,obj[i]]);
    }
    return array;
  }

  console.log(toArray({ a: 1, b: 2 }));
}
console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{
  function inkLevels(inks) {
    return Math.min(...Object.values(inks))
 }
 console.log(inkLevels({
  "cyan": 23,
  "magenta": 12,
  "yellow": 10
}));

}
console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{
  function calculateLosses(obj) {
    let sum = 0;
    for(let e in obj){
      sum += obj[e];
    }
    if(sum <= 0){
    return 'Lucky you!';
    } else{
      return sum;
    }
  }

  const stolenItems1 = {
    tv: 30,
    skate: 20,
    stereo: 50,
  };
  
  const stolenItems2 = {
    painting: 20000,
  };
  
  const stolenItems3 = {};
  
  console.log(calculateLosses(stolenItems1));
  console.log(calculateLosses(stolenItems2));
  console.log(calculateLosses(stolenItems3));

}
console.groupEnd();
