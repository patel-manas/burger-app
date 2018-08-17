import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';
import { access } from 'fs';

const Burger = (Props) => {
    /* my approach */
    // let transformedIngradients = [];
    // Object.keys(Props.ingredients).map((igKey) => {
    //     for(let i = 0 ; i < Props.ingredients[igKey]; i++){
    //         transformedIngradients.push(igKey);
    //     }
    //     return transformedIngradients;
    // });
    // console.log('transformedIngradients', transformedIngradients);


    /* max approach*/
    let  transformedIngradients = Object.keys(Props.ingredients)
    .map((igKey) => {
        return [...Array(Props.ingredients[igKey])]
        .map((_,index) => {
            return (<BurgerIngredient key = {igKey + index} type ={igKey} />);
        });
    });
    console.log('transformedIngradients', transformedIngradients);

    let ingadientNumber = transformedIngradients.reduce((acc,cur) => acc.concat(cur),[]).length;
    console.log('ingadientNumber', ingadientNumber);
    
    if(ingadientNumber === 0 ) {
        transformedIngradients = <p> u shoild start adding ingradients</p>;
    }
    return(
        <div className = {classes.Burger}>
            <BurgerIngredient type = 'bread-top' />
            {/* hard coded BurgerIngredient */}
            {/* <BurgerIngredient type = 'cheese' />
            <BurgerIngredient type = 'meat' /> */}
            {transformedIngradients}
            <BurgerIngredient type = 'bread-bottom' />
        </div>
    );
}

export default Burger;