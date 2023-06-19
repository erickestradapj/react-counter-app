import { render } from '@testing-library/react';
import { FirstApp } from '../../src/FirstApp';

describe('Test in <FirstApp />', () => {
   test('should match with the snapshot', () => {
      const title = 'Hello, I am Goku';

      render(<FirstApp title={title} />);
   });
});
