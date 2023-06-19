import { fireEvent, render, screen } from '@testing-library/react';
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

   test('should increase with the button +1', () => {
      render(<CounterApp value={initialValue} />);
      fireEvent.click(screen.getByText('+1'));
      expect(screen.getByText('11')).toBeTruthy();
   });

   test('should decrease with the button -1', () => {
      render(<CounterApp value={initialValue} />);
      fireEvent.click(screen.getByText('-1'));
      expect(screen.getByText('9')).toBeTruthy();
   });

   test('should work the reset button', () => {
      render(<CounterApp value={355} />);
      fireEvent.click(screen.getByText('+1'));
      fireEvent.click(screen.getByText('+1'));
      fireEvent.click(screen.getByText('+1'));
      //   fireEvent.click(screen.getByText('Reset'));
      fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

      expect(screen.getByText(355)).toBeTruthy();
   });
});
