// src/HelloText.test.js
import { render, screen } from '@testing-library/react';
import HelloText from './HelloText';

test('checks if Hello world is displayed', () => {
    render(<HelloText />);
    const element = screen.getByTestId('hello-text');
    expect(element).toHaveTextContent('Hello world');
});
