const groceryList = ['orange juice', 'bananas',
'coffee beans', 'brown rice', 'pasta',
'coconut oil', 'plantains'];// seven elements
groceryList.unshift('popcorn');//adds one element 
console.log(groceryList.unshift());
// expected output: 8
console.log(groceryList);
//Prints:
/*
[ 'popcorn',
  'orange juice',
  'bananas',
  'coffee beans',
  'brown rice',
  'pasta',
  'coconut oil',
  'plantains' ] //adds a new element to the begining of this array
*/

//Numbers
const arrayNumbers = [45,26,58,78,98,235];
arrayNumbers.unshift(300,400,500);//adds a new elements to the begining of this array
console.log(arrayNumbers);
//Prints:
/*
[ 300, 400, 500, 45, 26, 58, 78, 98, 235 ]
*/
