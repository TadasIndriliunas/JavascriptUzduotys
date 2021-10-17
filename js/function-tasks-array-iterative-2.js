const students = [
  {
    name: 'Panatėja',
    surname: 'Sulindytė',
    faculty: 'Informatikos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Operacinės sistemos',
        credits: 6,
        marks: [10, 7, 7, 6, 9]
      },
      {
        title: 'Algoritmų analizė',
        credits: 9,
        marks: [8, 8, 6, 4, 6]
      },
      {
        title: 'Tikimybės ir Statistika',
        credits: 6,
        marks: [9, 7, 8, 9, 6]
      },
      {
        title: 'Inžinerinis projektas',
        credits: 3,
        marks: [10, 8, 9, 8]
      },
      {
        title: 'Kompiuterių architektūra',
        credits: 6,
        marks: [6, 8, 7, 8, 8]
      }
    ]
  },
  {
    name: 'Serbentautas',
    surname: 'Bordiūras',
    faculty: 'Informatikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [7, 6, 9, 10, 8]
      },
      {
        title: 'Duomenų struktūros',
        credits: 6,
        marks: [7, 8, 9, 4, 8]
      },
      {
        title: 'Skaitmeninė logika',
        credits: 6,
        marks: [6, 8, 10, 9, 9]
      },
      {
        title: 'Objektinis programavimas',
        credits: 6,
        marks: [10, 8, 9, 8, 8]
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [6, 7, 8, 8, 8]
      }
    ]
  },
  {
    name: 'Laptokas',
    surname: 'Klavianskas',
    faculty: 'Informatikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [9, 8, 10, 9, 10]
      },
      {
        title: 'Duomenų struktūros',
        credits: 6,
        marks: [9, 9, 10, 10, 8]
      },
      {
        title: 'Skaitmeninė logika',
        credits: 6,
        marks: [10, 10, 10, 9, 10]
      },
      {
        title: 'Objektinis programavimas',
        credits: 6,
        marks: [9, 8, 9, 10, 10]
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [8, 9, 8, 10, 8]
      }
    ]
  },
  {
    name: 'Skaistė',
    surname: 'Kolbaitė',
    faculty: 'Chemijos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Organinė chemija',
        credits: 6,
        marks: [9, 9, 10, 9, 8]
      },
      {
        title: 'Inžinerinės medžiagos',
        credits: 3,
        marks: [10, 10, 10, 9, 9]
      },
      {
        title: 'Entalpija ir Entropija',
        credits: 6,
        marks: [9, 9, 9, 9]
      },
      {
        title: 'Polimerų atmainos ir produktai',
        credits: 9,
        marks: [10, 9, 8, 10, 7]
      },
      {
        title: 'Pramoninė chemija',
        credits: 6,
        marks: [9, 10, 10, 10, 9]
      }
    ]
  },
  {
    name: 'Cilindras',
    surname: 'Katalizatorius',
    faculty: 'Chemijos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Organinė chemija',
        credits: 6,
        marks: [6, 8, 9, 4, 8]
      },
      {
        title: 'Inžinerinės medžiagos',
        credits: 3,
        marks: [9, 8, 7, 8, 10]
      },
      {
        title: 'Entalpija ir Entropija',
        credits: 6,
        marks: [7, 8, 9, 10, 6]
      },
      {
        title: 'Polimerų atmainos ir produktai',
        credits: 9,
        marks: [8, 9, 6, 4]
      },
      {
        title: 'Pramoninė chemija',
        credits: 6,
        marks: [8, 7, 9, 5, 9]
      }
    ]
  },
  {
    name: 'Grandinius',
    surname: 'Varžauskas',
    faculty: 'Elektros ir elektronikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [8, 9, 9, 9, 9]
      },
      {
        title: 'Elektos grandinės',
        credits: 6,
        marks: [8, 7, 9, 9, 10]
      },
      {
        title: 'Elektros tinklai',
        credits: 6,
        marks: [9, 9, 8, 8, 10]
      },
      {
        title: 'Braižyba',
        credits: 6,
        marks: [6, 8, 9, 8, 7]
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [9, 9, 9, 10, 8]
      }
    ]
  },
];

console.groupCollapsed('1. Iš students masyvo atrinkti ir atspausdinti visų studentų vidurkius');
{
  function studentNamesSurnamesAndAverages({ name, surname, modules }){
    const allCredits = modules.reduce((sum, { credits }) => sum + credits, 0);
    const weightedAvgSum = modules.reduce((sum, { marks, credits }) => sum + marks.reduce((sum, mark) => sum + mark) / marks.length * credits, 0);
    return {
      name: name,
      surname: surname,
      avg: Math.round(100 * weightedAvgSum / allCredits) / 100
    }
  }
  console.table(students.map(studentNamesSurnamesAndAverages));
}
console.groupEnd();

console.groupCollapsed('2. Atspausdinti visus Informatikos fakulteto studentus');
{
  const allITStudents = students.filter(stud => stud.faculty === "Informatikos fakultetas");
  console.table(allITStudents);
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinti visus Chemijos fakulteto studentus');
{
  const allChemistryStudents = students.filter(stud => stud.faculty === "Chemijos fakultetas")
  console.table(allChemistryStudents);
}
console.groupEnd();

console.groupCollapsed('4. Atspausdinti visus Elektros ir elektronikos fakulteto studentus');
{
  const allElectronicsStudents = students.filter(stud => stud.faculty === "Elektros ir elektronikos fakultetas")
  console.table(allElectronicsStudents);
}
console.groupEnd();

console.groupCollapsed('5. Atspausdinti visų Informatikos fakulteto studentų vidurkius');
{
  function iTStudentNamesSurnamesAndAverages({ name, surname, modules, faculty }){
    if( faculty  === 'Informatikos fakultetas'){
      const allCredits = modules.reduce((sum, { credits }) => sum + credits, 0);
      const weightedAvgSum = modules.reduce((sum, { marks, credits }) => sum + marks.reduce((sum, mark) => sum + mark) / marks.length * credits, 0);
      console.table( {
        name: name,
        surname: surname,
        avg: Math.round(100 * weightedAvgSum / allCredits) / 100
      })
    }
  }
 students.filter(iTStudentNamesSurnamesAndAverages);
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinti visų Chemijos fakulteto studentų vidurkius');
{
  function chemistryStudentNamesSurnamesAndAverages({ name, surname, modules, faculty }){
    if( faculty  === 'Chemijos fakultetas'){
      const allCredits = modules.reduce((sum, { credits }) => sum + credits, 0);
      const weightedAvgSum = modules.reduce((sum, { marks, credits }) => sum + marks.reduce((sum, mark) => sum + mark) / marks.length * credits, 0);
      console.table( {
        name: name,
        surname: surname,
        avg: Math.round(100 * weightedAvgSum / allCredits) / 100
      })
    }
  }
  students.map(chemistryStudentNamesSurnamesAndAverages);
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinti visų Elektros ir elektronikos fakulteto studentų vidurkius');
{
  function electronicsStudentNamesSurnamesAndAverages({ name, surname, modules, faculty }){
    if( faculty  === 'Elektros ir elektronikos fakultetas'){
      const allCredits = modules.reduce((sum, { credits }) => sum + credits, 0);
      const weightedAvgSum = modules.reduce((sum, { marks, credits }) => sum + marks.reduce((sum, mark) => sum + mark) / marks.length * credits, 0);
      console.table({
        name: name,
        surname: surname,
        avg: Math.round(100 * weightedAvgSum / allCredits) / 100
      })
    }
  }
  students.filter(electronicsStudentNamesSurnamesAndAverages);
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinti tik pirmo kurso studentus');
{
  const firstGradeStudents = students.filter(stud => stud.course === 1);
  console.table(firstGradeStudents);
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinti tik antro kurso studentus');
{
  const secondGradeStudents = students.filter(stud => stud.course === 2);
  console.table(secondGradeStudents);
}
console.groupEnd();

console.groupCollapsed('10. Atspausdinti tik trečio kurso studentus');
{
  const thirdGradeStudents = students.filter(stud => stud.course === 3);
  console.table(thirdGradeStudents);}
console.groupEnd();

console.groupCollapsed('11. Atspausdinti tik ketvirto kurso studentus');
{
  const fourthGradeStudents = students.filter(stud => stud.course === 4);
  console.table(fourthGradeStudents);}
console.groupEnd();

