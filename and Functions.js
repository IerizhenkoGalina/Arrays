const arVerbs = ['cost','cut','hit','hurt','let','put'];

function addVerbs (ar) {
  ar.push('shut'); //adds a new element
}
addVerbs(arVerbs);//We call addVerbs() with an argument of arVerbs which will execute the code inside addVerbs

console.log(arVerbs);//We check the value of arVerbs and it now includes the 'shut' element! The array was mutated!
//Prints: [ 'cost', 'cut', 'hit', 'hurt', 'let', 'put', 'shut' ]

const arVerb = ['cost','cut','hit','hurt','let','put'];

function addVerb (ar) {
  ar.pop(); //removes last element
}

addVerb(arVerb);

console.log(arVerb);
//Prints: [ 'cost', 'cut', 'hit', 'hurt', 'let' ]

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';// changes element
}

changeArr(concept);
console.log(concept);
//Prints: [ 'arrays', 'can', 'be', 'MUTATED' ]
