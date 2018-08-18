import React,  { Component } from 'react';


import AuxCmp from './../../hoCmp/AuxCmp';
import Burger from '../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const PRICES = {
    salad:1.2,
    bacon:0.8,
    cheese:0.5,
    meat:2.75
}

class BurgerBuilder extends Component {

    state = {
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:5,
        purchaseable:false,
        purchasing: false
    }

    addIngradientHandler = (type) => {
        
        // handling the ingradeient count
        const oldcount = this.state.ingredients[type];
        const updatedCount = oldcount + 1;
        const updatedIngradients = {...this.state.ingredients};
        updatedIngradients[type] = updatedCount;

        // handling the Burger Price
        const oldPrice = this.state.totalPrice;
        const priceAddtion = PRICES[type];
        const mewPrice = oldPrice + priceAddtion ;

        // updating the state
        this.setState({
                    ingredients:updatedIngradients,
                    totalPrice :mewPrice
            });
            this.updatePurchaseableState(updatedIngradients);

    }

    removeIngradientHandler = (type) => {
                // handling the ingradeient count
                const oldcount = this.state.ingredients[type];

                const updatedCount = oldcount - 1;
                const updatedIngradients = {...this.state.ingredients};
                updatedIngradients[type] = updatedCount;
        
                // handling the Burger Price
                const oldPrice = this.state.totalPrice;
                const priceDeduction = PRICES[type];
                const mewPrice = oldPrice - priceDeduction ;
        
                // updating the state
                this.setState({
                            ingredients:updatedIngradients,
                            totalPrice :mewPrice
                    });
                this.updatePurchaseableState(updatedIngradients);
    }

    updatePurchaseableState = (updatedStateOfIngradients) => {
        const ingredients = {...updatedStateOfIngradients};

        const sumOfIngradients = Object.keys(ingredients)
        .map( igKey =>  ingredients[igKey])
        .reduce((acc, cur) => acc + cur);

        this.setState({purchaseable: sumOfIngradients > 0});

    }
    purchasingHandler = () => {
        this.setState({purchasing:true});
    }
    purchasingCancelHandler = () => {
        this.setState({purchasing:false});
    }

    render(){
        //TODO:
        // hello world
        const disableInfo  = {...this.state.ingredients};
        for(let key in disableInfo){
            disableInfo[key] = (disableInfo[key] <= 0);
        }

        return(
            <AuxCmp>
                <Modal show = {this.state.purchasing} closeModal = {this.purchasingCancelHandler}>
                    <OrderSummary ingradients = {this.state.ingredients}/>
                </Modal>
                {/* <img src="burger.img" alt="Burger Image" /> */}
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls 
                ingradientAdded = {this.addIngradientHandler}
                ingradientRemoved = {this.removeIngradientHandler}
                disabled = {disableInfo}
                isPurchaseabe = {this.state.purchaseable}
                price = {this.state.totalPrice}
                isPurchasing = {this.purchasingHandler}/>
            </AuxCmp>
        );
    }
}

export default BurgerBuilder;