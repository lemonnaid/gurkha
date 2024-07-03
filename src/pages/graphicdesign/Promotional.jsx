import React, { useState } from 'react';

const PromoItems = () => {
  // Sample items with their prices
  const items = [
    { id: 1, name: 'A4 Poster Design Double Side', price: 15000 },
    { id: 2, name: 'Single Leaflet (3.9*8.3inches)', price: 7500 },
    { id: 3, name: 'Bifold brochure(7.8*8.3inches)', price: 8500 },
    { id: 4, name: 'Trifold Brochure (11.8*8.3inches) both side', price: 11000 },
    { id: 5, name: 'Prospectus/CatalogueDesign (20 pages)', price: 30000 },
    { id: 6, name: 'Dangler/Streamer/wobbler Design', price: 2500 },
    { id: 7, name: 'Stickers', price: 1500 },
    { id: 8, name: 'Calendars (Desk/Wall)', price: 5500 },
    { id: 9, name: 'Shelf Strips', price: 1500 },
    { id: 10, name: 'Table Tent Design', price: 2000 },
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
