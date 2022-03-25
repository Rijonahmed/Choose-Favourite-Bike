import React, { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';
import './Shop.css'

const Shop = () => {
  const [bikes, setBikes] = useState([]);
  const [cartSelect, setCartSelect] = useState([]);
  console.log(cartSelect)


  useEffect(() => {
    fetch('bikeinfo.json')
      .then(res => res.json())
      .then(data => setBikes(data))
  }, [])

  const handleAddToCart = (bike) => {
    // console.log(bike)
    const newCart = [...cartSelect, bike];
    setCartSelect(newCart);
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
        <h3>Selected Bike {cartSelect.length}</h3>
        {
          cartSelect.map(item => (<h3>{item.name}</h3>))

        }



        <button>CHOOSE 1 FOR ME </button>
        <button>CHOOSE AGAIN</button>


      </div>

    </div>
  );
};

export default Shop;