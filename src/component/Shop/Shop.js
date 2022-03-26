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




    console.log(randomly)



    setRandom(randomly.name)
  }
  const clearData = () => {
    setCartSelect([]);

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




        <h3>Selected Bike {cartSelect.length}{random}</h3>

        {

          cartSelect.map(item => (<h3 key={item.id}>{item.name}</h3>))

        }

        <button onClick={() => handleRandomNumber()}>CHOOSE 1 FOR ME </button>
        <button onClick={() => clearData()}>CHOOSE AGAIN</button>


      </div>

    </div>
  );
};

export default Shop;