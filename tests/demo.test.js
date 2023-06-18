test('this tests must not fail', () => {
   if (0 === 1) {
      throw new Error('Cannot be divide by 0');
   }
});
