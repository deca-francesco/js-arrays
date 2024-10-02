const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// Creo la variabile exercise per leggere meglio i risultati in console
let exercise;
console.log(teachers);

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
exercise = "Esercizio 1 :";
const fourthTeacher = teachers[3];
console.log(exercise, fourthTeacher);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
exercise = "Esercizio 2 :";
teacher_Patrick = teachers.splice(4, 1, "Patrick");
console.log(exercise,teacher_Patrick, teachers);

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
exercise = "Esercizio 3 :";
const lastTeacher = teachers.pop();
console.log(exercise, lastTeacher);

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
exercise = "Esercizio 4 :";
const firstTeacher = teachers.shift();
console.log(exercise, firstTeacher);

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers

// 7. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = null;

// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = null;

// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString
const teachersString = null;

// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = null;