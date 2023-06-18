const firstName = 'Erick';
const lastName = 'Estrada';

// const fullName = firstName + ' ' + lastName;
const fullName = `
${firstName} 
${lastName}
${1 + 1}
`;

console.log(fullName);

function getGreeting(name) {
   return 'Hello ' + name;
}

console.log(`This is a text: ${getGreeting(firstName)}`);
