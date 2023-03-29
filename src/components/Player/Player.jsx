import React from 'react';
import './Player.css'
const Player = (props) => {
    const {img,name,seller,price,rankings} = props.player;
    const addToCart = props.addToCart;
    return (
        <div className='player'>
            <img className='img' src={img} alt="" />
            <h3>Name: {name}</h3>
            <h4>Price: ${price} million</h4>
            <p>Playing For: {seller}</p>
            <p>Top Ranking: {rankings}</p>
            <button onClick={()=> addToCart(props.player)}>Add to Cart</button>
        </div>
    );
};

export default Player;