import { render, screen } from '@testing-library/react';
import ItemList from './itemlist';

test('checks if item "Apples" is in the list', () => {
    render(<ItemList />);
    const apples = screen.getByText('Apples');
    expect(apples).toBeInTheDocument();
});

test('checks if the list has 3 items', () => {
    render(<ItemList />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(3);
});