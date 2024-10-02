const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

let exercise;
console.log(teachers);

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
exercise = "Esercizio Bonus 1 :";
const reversedTeachers = teachers.reverse();
console.log(exercise, reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
exercise = "Esercizio Bonus 2 :";
const longNames = [];
for (let i = 0; i < teachers.length; i++) {
  const teacher = teachers[i];
  if (teacher.length >= 5) {
    longNames.push(teacher);
  }
}
console.log(exercise, longNames);

// 3. Rimuovi 'Ed' dall'array teachers
exercise = "Esercizio Bonus 3 :";
const Ed_index = teachers.indexOf("Ed");
teachers.splice(Ed_index, 1);
console.log(exercise, "Indice dell'insegnante Ed: ", Ed_index, teachers);
