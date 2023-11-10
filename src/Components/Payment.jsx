

import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function Payment() {
  const [showThankYou, setShowThankYou] = useState(false);

  const handlePayPalDonationComplete = () => {
    // Handle donation completion logic here
    setShowThankYou(true);
  };

  return (
    <div className="payment-container">
                <h2>Payment</h2>
      <p>
        Thank you for choosing to support our environmental organization! Your contribution will help us continue our mission to protect and preserve the environment for future generations.Environmental education has always been our core mission. We believe that education is key to changing the way we think and behave.

“Where the heart goes, the body will follow”. We focus on reconnecting people with nature, encouraging them to discover first-hand the wonders of nature and be inspired to protect the environment.

If you share our philosophy, please donate in support of our cause. Join us in promoting environmental education and protecting our planet!
      </p>
      <img className="picture"
      
      alt='environment' src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZW4lMjBlbnZpcm9ubWVudHxlbnwwfHwwfHx8MA%3D%3D"  />

      <PayPalScriptProvider options={{ 'client-id': 'AZGK2BbFG3XSD08pGKz9TDSEVvHqRKCDIblLhidzS4frVz8TZPFGj2Is9sBW5PqOpl_TUyyQ9fw9mDwO' }}>
        <PayPalButtons
          style={{ layout: 'horizontal' }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: '10.00',
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              handlePayPalDonationComplete();
            });
          }}
        />
      </PayPalScriptProvider>

      {showThankYou && (
        <p>Thank you for donating! Your support is greatly appreciated.</p>
      )}
    </div>
  );
}

export default Payment;
