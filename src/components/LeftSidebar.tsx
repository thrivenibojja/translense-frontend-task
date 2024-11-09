import React, { useState } from 'react';
import './LeftSidebar.css'
 

const LeftSidebar: React.FC = () => {
  const [clickedItems, setClickedItems] = useState<number[]>([]);

  const handleItemClick = (index: number) => {
    setClickedItems((prevClicked) =>
      prevClicked.includes(index)
        ? prevClicked.filter((i) => i !== index)
        : [...prevClicked, index]
    );
  };

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Partner with us</h2>
      <p>Be Our Partner in Just Few Steps and increasing your reach by gaining new customers</p>
      <ul className="sidebar-list">
        {[
          'Business Information',
          'Owner / Manager Details',
          'Infrastructure Details',
          'Legal Documents',
          'Bank Details',
          'Service Info',
          'Preview Document',
          'Reach Increment',
        ].map((item, index) => (
          <li
            key={index}
            className={`sidebar-item ${clickedItems.includes(index) ? 'clicked' : ''}`}
            data-number={index + 1}
            onClick={() => handleItemClick(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default LeftSidebar;
