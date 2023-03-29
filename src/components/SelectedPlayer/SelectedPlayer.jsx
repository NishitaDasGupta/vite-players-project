import React, { useState } from 'react';

const SelectedPlayer = (props) => {
    // console.log(props);
    const [count, setCount] = useState(0);

    //const increment = () => setCount(count + 1);

    return (
        <div >

            <p>{props.index}.{props.player.name}</p>
        </div>
    );
};

export default SelectedPlayer;