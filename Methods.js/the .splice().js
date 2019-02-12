const typesOfFilm = ['a horror film', 'a comedy',
'a musical', 'an action film', 'a romantic film',
'a sci-fi film', 'a drama film', 'an animation film'];
typesOfFilm.splice(3,0, 'Discavery', 'cartoon'); // inserts at 3th index position
console.log(typesOfFilm);
//Prints:
/*
[ 'a horror film',
  'a comedy',
  'a musical',
  'Discavery',
  'cartoon',
  'an action film',
  'a romantic film',
  'a sci-fi film',
  'a drama film',
  'an animation film' ]
*/
