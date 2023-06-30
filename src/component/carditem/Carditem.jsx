import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AiTwotoneEdit, AiTwotoneDelete } from 'react-icons/ai';
import './Carditem.scss';
const API = 'https://my-json-server.typicode.com/lalit-shendage/Cartserver/items';

export default function Carditem({ onData }) {
    const [items, setItems] = useState([]);
    const [editable, setEditable] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const response = await fetch(API);
            const data = await response.json();
            setItems(data)
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };

    // Edit
    const handleEdit = () => {
        setEditable(!editable);
        if (editable) {
            setItems((prevItems) => {
                return prevItems.map((event, i) => {
                    return {
                        ...event
                    }
                });
            });
            toast.success("Item Edit Successful")
        }

    };

    // Delete
    const handleDelete = (index) => {
        setItems((prevItems) => {
            const newItems = [...prevItems];
            newItems.splice(index, 1);
            toast.success("Item Delete Successful");
            return newItems;
        });
    };

    //add cart
    const handleAddToCart = (index) => {
        const selectedItem = items[index];
        const isItemInCart = cartItems.some((item) => item.id === selectedItem.id);

        if (isItemInCart) {
            toast.error('Item is already in the cart');
        } else {
            setCartItems((prevData) => [...prevData, selectedItem]);
            onData(cartItems);
            toast.success('Item added to cart');
        }
    };


    return (
        <div className="home-page">
            <h1>Welcome to Ecommes</h1>
            <div className="item-list">
                {items.map((item, index) => (
                    <div className="item-card" key={index}>
                        <div>
                            <img src={item.imgurl} alt={item.title} />
                        </div>
                        <div>
                            <h2 contentEditable={editable}>{item.title}</h2>
                            <p contentEditable={editable}>{item.description}</p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <p contentEditable={editable}>Price: {item.price}</p>
                                <p>Stars: {item.stars}</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <button onClick={() => handleAddToCart(index)}>Add to Cart</button>
                                <div className="icon" style={{ background: 'blue' }} onClick={handleEdit}>
                                    {editable ? 'Save' : <AiTwotoneEdit />}
                                </div>
                                <div className="icon" style={{ background: 'red' }} onClick={() => handleDelete(index)}>
                                    <AiTwotoneDelete />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
