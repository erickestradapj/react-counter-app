import { getActiveUser, getUser } from '../../src/base-tests/05-functions';

describe('Test in 05-functions', () => {
   test('should return an object', () => {
      const testUser = {
         uid: 'ABC123',
         username: 'username_001',
      };

      const user = getUser();

      expect(testUser).toEqual(user);
   });

   test('should return an object', () => {
      const name = 'Erick';

      const activeUser = getActiveUser(name);

      expect(activeUser).toEqual({
         uid: 'ABC567',
         username: 'Erick',
      });
   });
});
