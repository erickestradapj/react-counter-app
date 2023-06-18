test('this tests must not fail', () => {
   // 1. Initialization
   const message1 = 'Hello World ';

   // 2.
   const message2 = message1.trim();

   // 3.
   expect(message1).toBe(message2);
});
