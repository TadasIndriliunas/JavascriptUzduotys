console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  // ...sprendimas ir spausdinimas
  function firstElement(arr){
    console.log(arr[0]);
  }
  array1 = [10, 15, 20];
  firstElement(array1);
}
console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{
  // ...sprendimas ir spausdinimas
  // google: mdn remove first array element
  function removeFirstElement(arr){
     let removed = arr.splice(0, 1);
     console.log(arr);
     console.log(removed);
  }
array2 = [10, 15, 25, 35];
removeFirstElement(array2);
}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  // ...sprendimas ir spausdinimas
  // google: js last array element
  function lastElement(array){
    console.log(array[array.length - 1]);
  }
  array3 = [1, 11, 12, 21, 30]
  lastElement(array3);
}
console.groupEnd();

console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{
  // ...sprendimas ir spausdinimas
  // google: js last array element
  function popElement(array){
    console.log(array.pop());
  }
  array4 = [12, 54, 14, 52, 32];
  popElement(array4);
}
console.groupEnd();

console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{
  // ...sprendimas ir spausdinimas
  // google: js element count in array
  function countElements(array){
    console.log(array.length);
  }
  array5 = [25, 24, 15, 12, 14];
  countElements(array5);
}
console.groupEnd();

console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  // ...sprendimas ir spausdinimas
  // google: js last array element index
  function lastElementIndex(array){
    console.log(array.lastIndexOf(array[array.length-1]));
  }
  array6 = [12, 14, 25, 32, 52];
  lastElementIndex(array6);
}
console.groupEnd();

console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  // ...sprendimas ir spausdinimas
  function elementIndex(array){
    for(i=0; i < array.length; i++){
      console.log(array.lastIndexOf(array[i]));
    }
  }
  array7 = [12, 21, 32, 14, 25, 36];
  elementIndex(array7);
}
console.groupEnd();

console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  // ...sprendimas ir spausdinimas
  function elementValues(array){
    for(i=0; i < array.length; i++){
      console.log(array[i]);
  }}
  array8 = [23, 25, 14, 12, 15, 32];
  elementValues(array8);
}
console.groupEnd();

console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  // ... sprendimas ir spausdinimas
  // google: js string literal
  function indexAndValue(array){
    for(i=0; i < array.length; i++){
      console.log(array.lastIndexOf(array[i]) + "=>" + array[i]);
  }
}
array9 = [10, 12, 15, 17, 20, 21]
indexAndValue(array9);
}
console.groupEnd();

console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  // ...sprendimas ir spausdinimas
  // google: js iterate through array reverse
  function valuesReverse(array){
      for(let i = array.length - 1; i >= 0; i--){
        console.log(array[i]);
      }
  }
  array10 = [2, 24, 12, 32, 17];
  valuesReverse(array10);
}
console.groupEnd();

console.groupCollapsed('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  // ...sprendimas ir spausdinimas
  // google: js string literal
  // ARBA
  // google: js join array elements with separator
  function printArrElementIndexesInline(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
      result += i + ', ';
    }
    result = result.slice(0, -2);
    console.log(result);
  }
  printArrElementIndexesInline([4, 5, 6, 7]);
}
console.groupEnd();

console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
{
  // ...sprendimas ir spausdinimas
  // google: js string literal
  // ARBA
  // google: js join array elements with separator
  function elementsInOneRow(array){
    console.log(array)
  }
  array12 = [-10, 12, 25, 14, 36];
  elementsInOneRow(array12)
}
console.groupEnd();

console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17 [1]=>8 [2]=>88 ...
{
  // google: js string literal
  // IR
  // google: js join array elements with separator
  function printArrElementsFormattedInline(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(`[${i}]=>${arr[i]}`);
    }
    console.log(result.join(' '));
  }
  printArrElementsFormattedInline([4, 5, 6, 7]);
}
console.groupEnd();
