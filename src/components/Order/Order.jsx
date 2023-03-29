import React from 'react';
import './Order.css'
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';
import './Order.css'
const Order = (props) => {
   // console.log(props);
    const {cartPlayer} = props;
   let totalPrice = 0 ;
   for (const player of cartPlayer) {
    totalPrice = totalPrice + player.price;
   }
    return (
        <div className='order'>
            <h3>Total Players: {cartPlayer.length}</h3>
            <p>Total Price: ${totalPrice} million</p>
            <h2>List of Selected Players:</h2>
            {
                cartPlayer.map(player => <SelectedPlayer
                     player={player}
                   
                ></SelectedPlayer>)
            }
        </div>
    );
};

export default Order;