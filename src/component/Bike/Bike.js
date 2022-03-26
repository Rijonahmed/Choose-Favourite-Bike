import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Bike.css'

const Bike = (props) => {
  const { name, images, price } = props.bike
  return (
    <div className='bike'>
      <img src={images} alt="" />
      <div className='bike-info'>
        <h2>Bike name: {name}</h2>
        <h4>Price: {price}</h4>
      </div>
      <button onClick={() => props.handleAddToCart(props.bike)} className='btn-cart'>Add to Cart &nbsp;
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>

      </button>


    </div>
  );
};

export default Bike;