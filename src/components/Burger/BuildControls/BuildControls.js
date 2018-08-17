import React from 'react'

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label:'Salad' , type:'salad'},
    {label:'Cheese' , type:'cheese'},
    {label:'Bacon' , type:'bacon'},
    {label:'Meat' , type:'meat'}

];
const BuildControls = (props) => (
    <div className = {classes.BuildControls}>
        <p>Burger Price : <strong>${props.price.toFixed(2)}</strong></p>
        {controls.map((ctrl,i) =>( 
        <BuildControl
         key = {ctrl.label + i} 
         label = {ctrl.label }
         add = {() => props.ingradientAdded(ctrl.type)}
         remove = {() => props.ingradientRemoved(ctrl.type)}
         disableButton = {props.disabled[ctrl.type]} />
        ) )}
        <button 
        className = {classes.OrderButton}
        disabled = {!props.isPurchaseabe}>Order Now..</button>
    </div>
);

export default BuildControls;