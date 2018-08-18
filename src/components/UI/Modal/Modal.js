import React from 'react'

import classes from './Modal.css';
import AuxCmp from '../../../hoCmp/AuxCmp';
import BackDrop from '../BackDrop/BackDrop';

const Modal = (props) => {
    return (
        <AuxCmp>
        <BackDrop show = {props.show} modalClosed = {props.closeModal}/>
        <div className = {classes.Modal}
            style = {
                {
                    transform : props.show ? 'translateY(0)' : 'translateY(-10)',
                    opacity :  props.show ? '1' : '0'
                }
                }>
            {props.children}
        </div>
        </AuxCmp>
    );
}

export default Modal;