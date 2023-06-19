import { returnArray } from '../../src/base-tests/07-destructuring-array';

describe('Test in 07-destructuring-array', () => {
   test('should return an string and number', () => {
      const [letters, numbers] = returnArray();

      expect(letters).toBe('ABC');
      expect(numbers).toBe(123);

      expect(typeof letters).toBe('string');
      expect(typeof numbers).toBe('number');

      expect(letters).toEqual(expect.any(String));
   });
});
