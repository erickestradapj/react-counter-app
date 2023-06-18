import heroes, { owners } from '../data/heroes';

// console.log(owners);

export const getHeroById = (id) => {
   return heroes.find((hero) => hero.id === id);
};

// console.log(getHeroById(2));

const getHeroByOwner = (owner) => {
   return heroes.filter((hero) => hero.owner === owner);
};

// console.log(getHeroByOwner('DC'));
