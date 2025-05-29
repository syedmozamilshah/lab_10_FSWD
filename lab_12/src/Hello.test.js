import { render, screen } from '@testing-library/react';
import Hello from './Hello';

test('renders Hello world heading', () => {
    const heading = render(<Hello />);
    const element = screen.getByTestId('hello-heading');
    expect(element).toBeInTheDocument();
});
