const travelThings = ['battery', 'souvenir',
'return ticket', 'apple juice', 'coffee',
'train station', 'single ticket', 'platform',
'magazine',  'key', 'sunglasses'];
console.log(travelThings.join());
// expected output:
/*
battery,souvenir,return ticket,apple juice,coffee,train station,single ticket,platform,magazine,key,sunglasses
*/
console.log(travelThings.join(''));
// expected output:
/*
batterysouvenirreturn ticketapple juicecoffeetrain stationsingle ticketplatformmagazinekeysunglasses
*/
console.log(travelThings.join('-'));
// expected output:
/*
battery-souvenir-return ticket-apple juice-coffee-train station-single ticket-platform-magazine-key-sunglasses
*/
