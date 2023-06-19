import { getHeroById, getHeroByOwner } from '../../src/base-tests/08-import-export';

describe('Test in 08-import-export', () => {
   test('getHeroById should return a hero by Id ', () => {
      const id = 1;
      const hero = getHeroById(id);

      expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
   });

   test('getHeroById should return undefined if not exists', () => {
      const id = 100;
      const hero = getHeroById(id);

      expect(hero).toBeFalsy();
   });

   test('getHeroByOwner should return an array filter DC heroes', () => {
      const owner = 'DC';
      const heroes = getHeroByOwner(owner);

      expect(heroes.length).toBe(3);
      expect(heroes).toEqual([
         {
            id: 1,
            name: 'Batman',
            owner: 'DC',
         },
         {
            id: 3,
            name: 'Superman',
            owner: 'DC',
         },
         {
            id: 4,
            name: 'Flash',
            owner: 'DC',
         },
      ]);
      expect(heroes).toEqual(heroes.filter((hero) => hero.owner === owner));
   });

   test('getHeroByOwner should return an array with Marvel heroes', () => {
      const owner = 'Marvel';
      const heroes = getHeroByOwner(owner);

      expect(heroes.length).toBe(2);
      expect(heroes).toEqual(heroes.filter((hero) => hero.owner === owner));
   });
});
