import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; // convert to cents
    const publishableKey = 'pk_test_o9AuJ5YDLE0NjOz2WN1StTIp00P85vTg8N'; // keys

    // Just log the token for testing purposes
    // In realworld this would talk to the backend services
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
    return (
        <StripeCheckout 
            label='Pay Now'
            name='Crown Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`} // non-converted price
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            currency="USD"
            amount={priceForStripe}
        />
    );
};

export default StripeCheckoutButton;

