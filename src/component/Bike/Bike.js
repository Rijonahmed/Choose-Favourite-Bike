import React from 'react';
import './Bike.css'

const Bike = (props) => {
  const { name, images, id } = props.bike
  return (
    <div className='bike'>
      <img src={images} alt="" />
      <h4>Bike name: {name}</h4>
      <h2>{id}</h2>

    </div>
  );
};

export default Bike;