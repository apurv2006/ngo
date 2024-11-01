import React, { useState } from 'react';
import cardImg from './images/card.jpeg';
import upiImg from './images/upi.jpeg';
import bankImg from './images/bank.jpeg';

function Donation() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [amount, setAmount] = useState('');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
    alert(`Thank you for your donation of ₹${amount}!`);
  };

  return (
    <div>
      <h2>Donate to Our Cause</h2>
      <p>Your generous donations help us continue our work and make a positive impact in our community. Choose your preferred method of donation:</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={handlePaymentMethodChange}
            />
            <img src={cardImg} alt="Credit/Debit Card" className="donation-method" />
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="upi"
              checked={paymentMethod === 'upi'}
              onChange={handlePaymentMethodChange}
            />
            <img src={upiImg} alt="UPI" className="donation-method" />
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="bank"
              checked={paymentMethod === 'bank'}
              onChange={handlePaymentMethodChange}
            />
            <img src={bankImg} alt="Bank Transfer" className="donation-method" />
          </label>
        </div>

        <div>
          <label>
            Donation Amount (₹):
            <input type="number" value={amount} onChange={handleAmountChange} required />
          </label>
        </div>

        {paymentMethod === 'card' && (
          <div>
            <h3>Credit/Debit Card</h3>
            <label>
              Card Number:
              <input type="text" name="cardNumber" required />
            </label>
            <label>
              Expiry Date:
              <input type="text" name="expiryDate" required />
            </label>
            <label>
              CVV:
              <input type="text" name="cvv" required />
            </label>
          </div>
        )}

        {paymentMethod === 'upi' && (
          <div>
            <h3>UPI</h3>
            <p>Enter your UPI ID:</p>
            <label>
              UPI ID:
              <input type="text" name="upiId" required />
            </label>
          </div>
        )}

        {paymentMethod === 'bank' && (
          <div>
            <h3>Bank Transfer</h3>
            <p>Please transfer your donation to the following account:</p>
            <p>Account Name: Our NGO</p>
            <p>Account Number: 1234567890</p>
            <p>Bank: XYZ Bank</p>
            <p>IFSC: XYZB1234</p>
          </div>
        )}

        <button type="submit">Donate</button>
      </form>
    </div>
  );
}

export default Donation;
