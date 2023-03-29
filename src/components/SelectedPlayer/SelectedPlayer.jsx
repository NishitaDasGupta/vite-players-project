import React from 'react';

const SelectedPlayer = (props) => {
    // console.log(props);
    let index = 0;
    return (
        <div>
            <h3>{index+1}.{props.player.name}</h3>
        </div>
    );
};

export default SelectedPlayer;