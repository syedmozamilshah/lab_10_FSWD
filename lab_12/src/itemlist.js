import React from 'react';

const ItemList = () => {
    const items = ['Apples', 'Bananas', 'Cherries'];

    return (
        <ul data-testid="item-list">
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};

export default ItemList;