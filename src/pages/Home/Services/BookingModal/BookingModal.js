import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/ProviderContext/ProviderContext';

const BookingModal = ({ item }) => {
    const { user } = useContext(AuthContext);
    const { productName, resalePrice } = item;

    const handleBook = (event) => {
        event.preventDefault();
        const form = event.target;
        const itemName = form.itemName.value;
        const name = form.name.value;
        const email = form.email.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;

        console.log(itemName, name, price, email, location, phone)

        const booking = {
            itemName,
            name,
            email,
            phone,
            price,
            location

        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Your booking is confirmed')
                }
                else {
                    toast.error(data.message)
                }
            })
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBook} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name='itemName' type="text" disabled defaultValue={productName} placeholder="Product Name" className="font-bold input w-full input-bordered" />
                        <input name='name' type="text" disabled defaultValue={user?.displayName} placeholder="Name" className="input w-full input-bordered" />
                        <input name='email' type="email" disabled defaultValue={user?.email} placeholder="Email" className="input w-full input-bordered" />
                        <input name='price' type="number" disabled defaultValue={resalePrice} placeholder="" className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="Phone number" className="input w-full input-bordered" />
                        <input name='location' type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
                        <input className='btn btn-success w-full' type='submit' value='Click to confirm' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;