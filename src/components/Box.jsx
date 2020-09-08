import React from 'react';

const Box = props => {
    const {color} = props;

    const styles = {
        backgroundColor: color,
        width: "200px",
        height:"200px",
        border: "2px solid black"
    }

    return (
        <div style={styles}></div>
    );
}

export default Box;