import React, { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';
import './Shop.css'

const Shop = () => {
  const [bikes, setBikes] = useState([]);
  console.log(bikes)

  useEffect(() => {
    fetch('bikeinfo.json')
      .then(res => res.json())
      .then(data => setBikes(data))
  }, [])
  return (
    <div className='shop-container'>
      <div className="bike-container">
        {
          bikes.map(bike => <Bike
            key={bike.id}
            bike={bike}
          ></Bike>)
        }



      </div>
      <div className="choose-container">

      </div>

    </div>
  );
};

export default Shop;