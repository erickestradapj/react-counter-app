import { getHeroById } from './bases/08-import-export';

// const promise = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       const hero = getHeroById(2);
//       resolve(hero);
//       // reject('Hero could not be found');
//    }, 2000);
// });

// promise
//    .then((hero) => {
//       console.log('hero', hero);
//    })
//    .catch((err) => console.warn(err));

const getHeroByIdAsync = (id) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         const hero = getHeroById(id);
         if (hero) {
            resolve(hero);
         } else {
            reject('Hero could not be found');
         }
      }, 2000);
   });
};

// getHeroByIdAsync(10)
//    .then((hero) => console.log('Hero', hero))
//    .catch((err) => console.warn(err));

getHeroByIdAsync(3).then(console.log).catch(console.warn);
