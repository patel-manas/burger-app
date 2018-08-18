import React from 'react'
import AuxCmp from '../../../hoCmp/AuxCmp';
import CustomButton from '../../UI/Button/customButton';

const OrderSummary = (props) => {

    const ingList = Object.keys(props.ingradients)
                    .map( igKey => {
                        return <li key={igKey}><span>{igKey}</span>: {props.ingradients[igKey] }</li>
                    });
    return(
        <AuxCmp>
            <h3>Your Order</h3>
            <p>The delicious burger with the following ingradients:</p>
            <ul>
                {ingList}
            </ul>
            <h4>Continue to checkout ...</h4>
            <CustomButton
                        clicled = {}
                        btnStyle = 'Danger'>CANCEL</CustomButton>
            <CustomButton
                        clicled = {}
                        btnStyle = 'Sucesses'>CONTINUE</CustomButton>
        </AuxCmp>
    );
}

export default OrderSummary;