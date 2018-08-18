import React from 'react';
import classes from './customButton.css';

const CustomButton = (props) => (
    <button
        className = {[classes.Button, classes[props.btnStyle]].join(' ')}
        onClick = {props.clicked}>
    {props.children}
    </button>
);

export default CustomButton;