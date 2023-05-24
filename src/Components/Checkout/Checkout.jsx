import './Assets/Assets.scss'
import React, { useState, useContext } from 'react';
import { CartContext } from '../../Context/CartContext'
import { collection, query, where, getDocs, writeBatch, documentId,} from 'firebase/firestore';
import { db } from '../../services/firebaseconfig'
import { CheckoutForm } from '../CheckoutForm/CheckoutForm';
import { Link } from 'react-router-dom';
import { Loader } from '../../Resources/Loader';


export const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');

    const { cart, clearCart } = useContext(CartContext);

    const createOrder = async ({ Name, Phone, Email, LastName, EmailConfirm }) => {
        if (Email !== EmailConfirm) {
            alert("los email's no coinciden")
            setLoading(false);  
            return;
        }
        setLoading(true);


        try{
            // const orderTotal = total()
            // const objOrder = {
            //     buyer: {
            //         Name, LastName, Phone,Email, EmailConfirm
            //     },
            //     items: cart,
            //     total: orderTotal,
            //     date: Timestamp.fromDate(new Date())
            // }

            const batch = writeBatch(db);
            const outOfStock = [];
            const ids = cart.map((prod) => prod.id);
            const productsRef = collection(db, 'Productos');

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids))); 

            const { docs } = productsAddedFromFirestore;

            docs.forEach((doc) => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;

                const productAddedToCart = cart.find((prod) => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit();

                

                const randomId = Math.random().toString(36).substring(7); 

                setOrderId(randomId);
                clearCart();     
                
            } else {
                console.error('There are products that are out of stock');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };


    if (loading) {
        return(
        <>
            <h1 className='TextLoading'>Your order is being generated...</h1>
            <Loader></Loader>
        </>
        )
        
    }

    if (orderId) {
        return (
        <div className='ContainerId'>
            <h1 className='ContainerId__order'>The id order is: {orderId}</h1>
            <Link to="/" className='ContainerId__Back'>Back to top</Link>
        </div>
        );
    }

    return (
        <>
            <div className='ContainerAbsolute'>
                <h1 className='CheckoutTittle'> Checkout </h1>
                <CheckoutForm onConfirm={createOrder}/>
            </div>
        </>
    )
}