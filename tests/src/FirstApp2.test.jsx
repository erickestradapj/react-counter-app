import { render, screen } from '@testing-library/react';
import { FirstApp } from '../../src/FirstApp';

describe('Test in <FirstApp />', () => {
   const title = 'Hi, I am Goku';
   const subtitle = 'I am subtitle';

   test('should match with the snapshot', () => {
      const { container } = render(<FirstApp title={title} />);
      expect(container).toMatchSnapshot();
   });

   test('should show message "Hi, I am Goku"', () => {
      render(<FirstApp title={title} />);
      expect(screen.getByText(title)).toBeTruthy();
   });

   test('should show title in h1', () => {
      render(<FirstApp title={title} />);
      expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
   });

   test('should show subtitle sent by props', () => {
      render(<FirstApp title={title} subtitle={subtitle} />);
      expect(screen.getAllByText(subtitle).length).toBe(2);
   });
});
