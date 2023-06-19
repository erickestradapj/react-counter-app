import { render } from '@testing-library/react';
import { FirstApp } from '../../src/FirstApp';

describe('Test in <FirstApp />', () => {
   test('should match with the snapshot', () => {
      const title = 'Hello, I am Goku';
      const { container } = render(<FirstApp title={title} />);

      expect(container).toMatchSnapshot();
   });

   test('should show title in h1', () => {
      const title = 'Hello, I am Goku';
      const { container, getByText } = render(<FirstApp title={title} />);

      expect(getByText(title)).toBeTruthy();

      const h1 = container.querySelector('h1');
      expect(h1.innerHTML).toContain(title);
   });
});
