// import React, { useEffect, useState } from 'react';
// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

// const CheckOutForm = ({ booking }) => {
//     const [cardError, setCardError] = useState('');
//     const [success, setSuccess] = useState('');
//     const [processing, setProcessing] = useState(false);
//     const [transactionId, setTransactionId] = useState('');
//     const [clientSecret, setClientSecret] = useState('');

//     const stripe = useStripe();
//     const elements = useElements();
//     const { itemName, price, email, _id } = booking;

//     useEffect(() => {
//         // Create PaymentIntent as soon as the page loads
//         fetch("https://assignment-product-resale-server-jabir11757.vercel.app/create-payment-intent", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 authorization: `bearer ${localStorage.getItem('accessToken')}`
//             },
//             body: JSON.stringify({ price }),
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log(data)
//                 setClientSecret(data.clientSecret)
//             });
//     }, [price]);

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         if (!stripe || !elements) {
//             return;
//         }
//         const card = elements.getElement(CardElement);
//         if (card === null) {
//             return;
//         }

//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: 'card',
//             card
//         })
//         if (error) {
//             console.log(error)
//             setCardError(error.message)
//         }
//         else {
//             setCardError('')
//         }
//         setSuccess('')
//         setProcessing(true)

//         const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
//             clientSecret,
//             {
//                 payment_method: {
//                     card: card,
//                     billing_details: {
//                         name: itemName,
//                         email: email
//                     },
//                 },
//             },
//         );
//         if (confirmError) {
//             setCardError(confirmError.message);
//             return;
//         }
//         if (paymentIntent.status === 'succeeded') {

//             //store payment info in the database
//             const payment = {
//                 price,
//                 transactionId: paymentIntent.id,
//                 email,
//                 bookingId: _id
//             }

//             fetch('https://assignment-product-resale-server-jabir11757.vercel.app/payments', {
//                 method: 'POST',
//                 headers: {
//                     'content-type': 'application/json',
//                     authorization: `bearer ${localStorage.getItem('accessToken')}`
//                 },
//                 body: JSON.stringify(payment)
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log(data)
//                     if (data.insertedId) {
//                         setSuccess('Congratulations! your payment completed.')
//                         setTransactionId(paymentIntent.id)
//                     }
//                 })
//         }
//         setProcessing(false)

//     }

//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <CardElement
//                     options={{
//                         style: {
//                             base: {
//                                 fontSize: '16px',
//                                 color: '#424770',
//                                 '::placeholder': {
//                                     color: '#aab7c4',
//                                 },
//                             },
//                             invalid: {
//                                 color: '#9e2146',
//                             },
//                         },
//                     }}
//                 />
//                 <button className='btn btn-sm btn-primary mt-4' type="submit" disabled={!stripe || !clientSecret || processing}>
//                     Pay
//                 </button>
//             </form>
//             <p className='text-red-500'>{cardError}</p>
//             {
//                 success && <div>
//                     <p className='text-green-500'>{success}</p>
//                     <p>Transaction ID: <strong className='text-bold'>{transactionId}</strong></p>
//                 </div>
//             }
//         </>
//     );
// };

// export default CheckOutForm;
