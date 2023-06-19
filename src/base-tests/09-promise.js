import { getHeroById } from './08-import-export';

export const getHeroByIdAsync = (id) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         const hero = getHeroById(id);
         if (hero) {
            resolve(hero);
         } else {
            reject(`Hero ${id} could not be found`);
         }
      }, 1000);
   });
};
