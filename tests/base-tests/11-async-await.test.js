import { getImage } from '../../src/base-tests/11-async-await';

describe('Test in 11-async-await.js', () => {
   test('getImage should return an image url ', async () => {
      const url = await getImage();
      expect(typeof url).toBe('string');
   });
});
