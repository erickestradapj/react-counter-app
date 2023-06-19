import { render, screen } from '@testing-library/react';
import { CounterApp } from '../../src/CounterApp';

describe('Test in <CounterApp />', () => {
   const initialValue = 10;

   test('should match with snapshot', () => {
      const { container } = render(<CounterApp value={initialValue} />);
      expect(container).toMatchSnapshot();
   });

   test('should show the initial value equal to 100', () => {
      render(<CounterApp value={100} />);
      expect(screen.getByText(100)).toBeTruthy();
   });
});
