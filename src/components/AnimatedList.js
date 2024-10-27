// src/components/AnimatedList.js
import React from 'react';
import './AnimatedList.css'; // Import CSS for animations

const AnimatedList = ({ items }) => {
  return (
    <ul className="animated-list">
      {items.map((item, index) => (
        <li key={index} className="animated-list-item">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default AnimatedList;
