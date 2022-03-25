import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Bike.css'

const Bike = (props) => {
  const { name, images, id } = props.bike
  return (
    <div className='bike'>
      <img src={images} alt="" />
      <div>
        <h4>Bike name: {name}</h4>
        <h2>{id}</h2>
      </div>
      <button onClick={() => props.handleAddToCart(props.bike)} className='btn-cart'>Add to Cart &nbsp;
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>

      </button>


    </div>
  );
};

export default Bike;