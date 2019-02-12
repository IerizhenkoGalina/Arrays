const travelThings = ['battery','key', 'souvenir',
'return ticket','key', 'apple juice', 'coffee',
'train station', 'single ticket', 'platform',
'magazine','sunglasses'];
console.log(travelThings.indexOf('coffee'));//element coffee = index[6] in array
// expected output: 6
console.log(travelThings.indexOf('tea'));//we don't have element tea
// expected output: -1
console.log(travelThings.indexOf('coffee',2)); //only one element coffee = index[6] in array
// expected output: 6
console.log(travelThings.indexOf('key')); //element key = index[1]
// expected output: 1
console.log(travelThings.indexOf('key',2)); //second element key = index [4]
// expected output: 4
