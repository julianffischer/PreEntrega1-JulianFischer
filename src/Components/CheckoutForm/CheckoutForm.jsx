import { useState } from 'react';
import './Assets/Checkout.scss'

export const CheckoutForm = ({ onConfirm }) => {
    const [LastName, setLastName] = useState('');
    const [Name, setName] = useState('');
    const [Phone, setPhone] = useState('');
    const [Email, setEmail] = useState('');
    const [EmailConfirm, setEmailConfirm] = useState('');

    const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
    Name,
    LastName, 
    Phone,
    Email,
    EmailConfirm,
    };

    onConfirm(userData);
    };

    return (
    <>
        <div>
            <form onSubmit={handleConfirm} className='BodyForm'>
                <label>
                Name
                <input
                className='Input'
                type='text'
                value={Name}
                onChange={({ target }) => setName(target.value)}
            />
        </label>
                <label>
                    LastName
                <input
                className='Input'
                type='text'
                value={LastName}
                onChange={({ target }) => setLastName(target.value)}
            />
        </label>
        <label>
            Phone
            <input
                className='Input'
                type='number'
                value={Phone}
                onChange={({ target }) => setPhone(target.value)}
            />
            </label>
            <label>
            Email
            <input
                className='Input'
                type='text'
                value={Email}
                onChange={({ target }) => setEmail(target.value)}
            />
            </label>
            <label>
                Confirm Email
            <input
                className='Input'
                type='text'
                value={EmailConfirm}
                onChange={({ target }) => setEmailConfirm(target.value)}
            />
            </label>
                <div className='ButtonContainer'>
                <button className='Button' type='submit'>
                    Create Order
                </button>
            </div>
        </form>
        </div>
        </>
    );
};