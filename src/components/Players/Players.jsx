import React, { useEffect, useState } from 'react';
import { addToDb, getplayersCart } from '../../../public/fakedb';
import Order from '../Order/Order';
import Player from '../Player/Player';
import './Players.css'
const Players = () => {
  const [players, setPlayers] = useState([]);
  const [cartPlayer, setCartPlayer] = useState([]);
  
  useEffect(() => {
    fetch('public/products.json')
      .then(res => res.json())
      .then(data => setPlayers(data))
  }, [])
  useEffect(() => { 
    const storedData = getplayersCart();
    const storedCartPlayer = [];
    for (const id in storedData) {
       const playerExistInLocalStorage = players.find(player => player.id === id);
    if(playerExistInLocalStorage)
    {
      storedCartPlayer.push(playerExistInLocalStorage);
    }
    }
    setCartPlayer(storedCartPlayer);
  //  console.log(cartPlayer);
  
  }, [players])
  const addToCart = (player) => {
    const duplicate = cartPlayer.find(p => p.id === player.id);
    if (!duplicate) {
      const newPlayer = [...cartPlayer, player];
      setCartPlayer(newPlayer);
      addToDb(player.id);
    }

  }
  return (
    <div className='players-container'>
      <div className='players'>
        {
          players.map(player => <Player
            player={player}
            key={player.id}
            addToCart={addToCart}
          ></Player>)
        }
      </div>
      <div className='order'>
        <h2 className='order-title'>Order Summary</h2>
        <Order
          cartPlayer={cartPlayer}
          key={cartPlayer.id}
          
        ></Order>
      </div>
    </div>
  );
};

export default Players;