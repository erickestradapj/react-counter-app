import { getHeroByIdAsync } from '../../src/base-tests/09-promise';

describe('Test in 09-promise.js', () => {
   test('getHeroByIdAsync should return one hero', (done) => {
      const id = 1;

      getHeroByIdAsync(id).then((hero) => {
         expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC',
         });

         done();
      });
   });

   test('getHeroByIdAsync should return an error if hero does not exist', (done) => {
      const id = 100;

      getHeroByIdAsync(id).catch((error) => {
         expect(error).toBe(`Hero ${id} could not be found`);
         done();
      });
   });
});
