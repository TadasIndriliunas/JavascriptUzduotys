console.group('1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY');
{
  class Player {
    constructor(name, age, height, weight) {
      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
    }

    getAge(name, age) {
      return `${this.name} is age ${this.age}`;
    }

    getHeight(height) {
      return `${this.name} is ${this.height}cm`;
    }

    getWeight(weight) {
      return `${this.name} weighs ${this.weight}kg`;
    }
  }

  console.dir(Player);
  const p1 = new Player("David Jones", 25, 175, 75);
  console.log({
    "David Jones is age 25": p1.getAge(),
    "David Jones is 175cm": p1.getHeight(),
    "David Jones weighs 75kg": p1.getWeight(),
  });
}
console.groupEnd();

console.groupCollapsed('2. - https://edabit.com/challenge/yxKoCKemzacK6PECM');
{
  class Calculator {
    add(num1, num2) {
      return num1 + num2;
    }

    subtract(num1, num2){
      return num1 - num2;
    }

    multiply(num1, num2){
      return num1 * num2;
    }

    divide(num1, num2){
      return num1 / num2;
    }
  }
  const calculator = new Calculator();
  console.log({
    "add" : calculator.add(20, 10),
    "subtract" : calculator.subtract(12, 3),
    "multiply" : calculator.multiply(5, 2),
    "divide" : calculator.divide(9, 3),
  })
}
console.groupEnd();

console.groupCollapsed('3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS');
{
  class Employee {
    constructor(firstname, lastname){
      this.firstname = firstname;
      this.lastname = lastname;
    }
    fullName(firstname, lastname){
      return this.firstname + " " + this.lastname;
    }
    eMail(firstname, lastname){
      return this.firstname.toLowerCase() + "." + this.lastname.toLowerCase() + "@company.com";
    }
  }
  const emp1 = new Employee("John", "Smith");
  const emp2 = new Employee("Mary",  "Sue");
  const emp3 = new Employee("Antony", "Walker");

  console.log(
    emp1.fullName(),
    emp2.eMail(),
    emp3.firstname,
  )
}
console.groupEnd();

console.groupCollapsed('4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu');
{
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    compareAge(other) {
      if(this.age < other.age){
        return `${other.name} is older than me.`;
      } else if(this.age === other.age){
        return `${other.name} is younger than me.`;
      }else{
        return `${other.name} is the same age as me.`
      } 
    }
  }
  const p1 = new Person("Samuel", 24);
  const p2 = new Person("Joel", 36);
  const p3 = new Person("Lily", 24);

  console.log(
    p1.compareAge(p2),
    p2.compareAge(p1),
    p1.compareAge(p3),
  )
}
console.groupEnd();

console.groupCollapsed('5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ');
{
  class Circle {
    constructor(radius) {
      this.radius = radius
    }
    getArea(){
      return this.radius ** 2 * Math.PI;
    }
    getPerimeter(){
      return this.radius * 2 * Math.PI;
    }
  }
  let circy = new Circle(11)
  console.log(
    circy.getArea(),
    circy.getPerimeter(),
  )
  
}
console.groupEnd();

console.groupCollapsed('6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b');
{
  class Name {
    constructor(fname, lname){
      this.fname = fname.charAt(0).toUpperCase() + fname.slice(1).toLowerCase();;
      this.lname = lname.charAt(0).toUpperCase() + lname.slice(1).toLowerCase();;
    }
    fullName(){
      return this.fname + " " + this.lname;
    }
    
    initials(){
      return this.fname[0] + "." + this.lname[0];
    }
  }
  const a1 = new Name("john", "SMITH");
  console.log(a1.fullName(),
    a1.initials());

}
console.groupEnd();

console.groupCollapsed('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{
  function sweetestIceCream(arr){
    const flavors = {
      Plain:0,
      Vanilla: 5,
      ChocolateChip: 5,
      Strawberry: 10,
      Chocolate: 10
    }
    return Math.max(...arr.map(ice => flavors[ice.flavor] + ice.numSprinkles));
  }
  class IceCream{
    constructor(flavor, numSprinkles) {
      this.flavor = flavor
      this.numSprinkles = numSprinkles
    }
  }
  ice1 = new IceCream("Chocolate", 13);
  ice2 = new IceCream("Vanilla", 0);
  ice3 = new IceCream("Strawberry", 7);
  ice4 = new IceCream("Plain", 18);
  ice5 = new IceCream("ChocolateChip", 3);

  const sweetest = sweetestIceCream([ice1, ice2, ice3, ice4, ice5])
  console.log(sweetest);
}
console.groupEnd();

console.groupCollapsed('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{
  class OnesThreesNines {
    constructor(num){
      this.num = num;
    }
    ones(){
      return this.num;
    }
    threes(){
      return Math.floor(this.num / 3);
    }
    nines(){
      return Math.floor(this.num / 9)
    }
  }
  const n1 = new OnesThreesNines(19);
  console.log(n1.ones(),
  n1.threes(),
  n1.nines())
}
console.groupEnd();

console.groupCollapsed('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp');
{
  class User{
    static userCount = 0;
    constructor(username) {
      this.username = username;
      User.userCount++;
    }
  }
  const u1 = new User("johnsmith10");
  console.log(User.userCount);
  const u2 = new User("marysue1989");
  console.log(User.userCount);
  const u3 = new User("milan_rodrick");
  console.log(User.userCount);

}
console.groupEnd();

console.groupCollapsed('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn');
{
  class Book {
    constructor(title, author){
      this.title = title;
      this.author = author;
    }
    getTitle(){
      return "Title: " + this.title;
    }
    getAuthor(){
      return "Author: " + this.author;
    }
  }
  const PP = new Book("Pride and Prejudice", "Jane Austen")
  console.log(PP.getTitle(),
  PP.getAuthor())
}
console.groupEnd();
