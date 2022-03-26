import React, { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';

import './Shop.css'

const Shop = () => {
  const [bikes, setBikes] = useState([]);
  const [cartSelect, setCartSelect] = useState([]);
  const [random, setRandom] = useState([]);
  // console.log(cartSelect)


  useEffect(() => {
    fetch('bikeinfo.json')
      .then(res => res.json())
      .then(data => setBikes(data))
  }, [])

  const handleAddToCart = (bike) => {
    // console.log(bike);
    const newCart = [...cartSelect, bike];
    if (newCart.length <= 4) {
      setCartSelect(newCart);
    } else {
      alert('alrady 4 item seleted')


    }
  }

  const handleRandomNumber = () => {
    let randomly = cartSelect
    randomly = cartSelect[Math.floor(Math.random() * cartSelect.length)];

    setRandom(randomly.name)

  }
  const clearData = () => {
    setCartSelect([]);
    setRandom([]);

  }



  return (
    <div className='shop-container'>
      <div className="bike-container">
        {
          bikes.map(bike => <Bike
            key={bike.id}
            bike={bike}
            handleAddToCart={handleAddToCart}
          ></Bike>)
        }



      </div>
      <div className="choose-container">

        <h3> Your Favourite Bike: {random}</h3>

        {
          cartSelect.map(item => (

            <h3 className='select-info' key={item.id}>
              <img className='select-img' src={item.images} alt="" />
              &nbsp;&nbsp;
              {item.name}</h3>))

        }

        <button className='btn-choose' onClick={() => handleRandomNumber()}>CHOOSE 1 FOR ME </button>
        <p></p>
        <button className='btn-clear' onClick={() => clearData()}>CHOOSE AGAIN</button>


      </div>

    </div>
  );
};

export default Shop;