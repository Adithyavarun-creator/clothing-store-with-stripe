import axios from 'axios';
import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) =>{

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Jhwr8DML1E8r8klD60XPh74QNw0aVd7DyttkgoxDggcNMO2EsoITpExQ4PulhovHbcEFYeJFXTH7DBGnFX2yGxY00xoV1CqSt'

    const onToken = token =>{
        // console.log(token);
        // alert('Payment success buddy')
        axios({
            url:'payment',
            method:'post',
            data:{
                amount:priceForStripe,
                token:token
            }
        }).then(response => {
            alert('Payment was successfull')
        }).catch(error=>{
            console.log(`There was a payment error`, JSON.parse(error));
            alert('There was an issue in your credit card')
        })
    }

    return(
        <div>
            <StripeCheckout 
            label="Pay Now"
            name="CROWN CLOTHING Ltd.."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total price is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}/>
        </div>
    )
}

export default StripeCheckoutButton