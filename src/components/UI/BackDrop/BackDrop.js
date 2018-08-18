import React from 'react'
import classes from './BackDrop.css';

const BackDrop = (props) => {
    return (
        props.show ? <div className = {classes.BackDrop} onClick = {props.modalClosed}></div> : null
    );
}

export default BackDrop;