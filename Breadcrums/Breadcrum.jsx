import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
  const { product } = props;

  // Use optional chaining to safely access 'category' and 'name' properties
  const category = product?.category || 'No Category'; // Fallback if category is undefined
  const productName = product?.name || 'Product'; // Fallback if name is undefined

  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} alt="arrow" /> {category} <img src={arrow_icon} alt="arrow" /> {productName}
    </div>
  );
};

export default Breadcrum;
