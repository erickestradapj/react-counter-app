// Functions in JS
// const greeting = function (name) {
//    return `Hello, ${name}`;
// };

const greeting2 = (name) => {
   return `Hello, ${name}`;
};

const greeting3 = (name) => `Hello, ${name}`;
const greeting4 = () => `Hello World`;
// console.log(greeting('Goku'));
console.log(greeting2('Goku'));
console.log(greeting3('Vegeta'));
console.log(greeting4());

// const getUser = () => {
//    return {
//       uid: 'ABC123',
//       username: 'username_001',
//    };
// };

const getUser = () => ({
   uid: 'ABC123',
   username: 'username_001',
});

const user = getUser();

console.log(user);

// Work
// const getActiveUser = (name) => {
//    return {
//       uid: 'ABC567',
//       username: name,
//    };
// };

const getActiveUser = (name) => ({
   uid: 'ABC567',
   username: name,
});

const activeUser = getActiveUser('Erick');
console.log(activeUser);
