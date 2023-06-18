// Destructuring
const person = {
   name: 'Tony',
   age: 45,
   key: 'Ironman',
   range: 'soldier',
};

// const { name, age, key } = person;

// console.log(name);
// console.log(age);
// console.log(key);

const usesContext = ({ name, age, key, range = 'captain' }) => {
   // console.log(name, age, key, range);

   return {
      keyName: key,
      years: age,
      latlng: {
         lat: 14.21121,
         lng: -12.45454,
      },
   };
};

const {
   keyName,
   years,
   latlng: { lat, lng },
} = usesContext(person);
console.log(keyName, years);
console.log(lat, lng);
