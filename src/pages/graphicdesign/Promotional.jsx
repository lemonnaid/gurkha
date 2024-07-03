import React, { useState } from 'react';

const PromoItems = () => {
  // Sample items with their prices
  const items = [
    { id: 1, name: 'Logo Design Only', price: 15000 },
    { id: 2, name: 'Logo Design with Complete Corporate Identity Package', price: 30000 },
    { id: 3, name: 'Business Card', price: 2500 },
  ];

  // State to keep track of selected items
  const [selectedItems, setSelectedItems] = useState([]);

  // Handle checkbox change
  const handleCheckboxChange = (itemId) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(itemId)
        ? prevSelectedItems.filter((id) => id !== itemId)
        : [...prevSelectedItems, itemId]
    );
  };

  // Calculate total price
  const calculateTotal = () => {
    return selectedItems.reduce((total, itemId) => {
      const item = items.find((item) => item.id === itemId);
      return total + item.price;
    }, 0);
  };

  return (
    <div>
      <h1>Particulars</h1>
      {items.map((item) => (
        <div key={item.id} className='list-items'>
          <input
            type="checkbox"
            id={`item-${item.id}`}
            onChange={() => handleCheckboxChange(item.id)}
          />
          <label htmlFor={`item-${item.id}`}>{item.name} - NPR. {item.price}</label>
        </div>
      ))}
      <h2>Total: NPR. {calculateTotal()}</h2>
    </div>
  );
};

export default PromoItems;
