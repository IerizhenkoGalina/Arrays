const groceryList = ['orange juice', 'bananas', 'coffee beans',
'brown rice', 'pasta', 'coconut oil', 'plantains'];
console.log(groceryList.slice(1));
//expected output:
/*
[ 'bananas',
  'coffee beans',
  'brown rice',
  'pasta',
  'coconut oil',
  'plantains' ]
*/
console.log(groceryList.slice(2,5));
// expected output:
/*
[ 'coffee beans', 'brown rice', 'pasta' ]
*/
console.log(groceryList.slice(0,7));
// expected output:
/*
[ 'orange juice',
  'bananas',
  'coffee beans',
  'brown rice',
  'pasta',
  'coconut oil',
  'plantains' ]
*/
