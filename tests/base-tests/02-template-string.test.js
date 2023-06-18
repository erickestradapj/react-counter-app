import { getGreeting } from '../../src/base-tests/02-template-string';

describe('Test in 02-template-string', () => {
   test('should return "Hello Erick"', () => {
      const name = 'Erick';
      const message = getGreeting(name);

      expect(message).toBe(`Hello ${name}`);
   });
});
