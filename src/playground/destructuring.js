// const person = {
//   // name: 'FUFUFUFOUAD',
//   age: 25,
//   location: {
//     city: 'philly',
//     temp: 92
//   }
// };
//
// const {name: firstname = 'Anonymous', age} = person;
// // const Name = person.Name;
// // const Age = person.Age;
//
// console.log(`${firstname} is ${age}.`);
//
// const {temp: temperature, city} = person.location;
//
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }


// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }
//
// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);


//Array destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [,city , state = 'New York'] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];

const [itemName, ,medPrice] = item;

console.log(`A medium ${itemName} costs ${medPrice}`);
