import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { AiTwotoneEdit, AiTwotoneDelete, AiTwotoneSave } from 'react-icons/ai';
import './Carditem.scss';
import { addtoitems, edititems, deleteitem, addtocart } from '../../store/store';

const API = 'https://my-json-server.typicode.com/lalit-shendage/Cartserver/items';

const fetchData = async (dispatch) => {
    try {
        const response = await fetch(API);
        if (response.ok) {
            const data = await response.json();

            dispatch(addtoitems(data));
        } else {
            throw new Error('Failed to fetch data');
        }
    } catch (error) {
        console.error(error);
        toast.error('Failed to fetch data');
    }
};

export default function Carditem() {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.reducer.items);
    const [edit, setEdit] = useState(false);
    const [form, setForm] = useState({ title: '', description: '', price: '', stars: '', imgurl: '' });

    useEffect(() => {
        fetchData(dispatch);
    }, []);


    const memoizedItems = useMemo(() => items, [items]);

    const handleEdit = (e, index) => {
        if (!form.title, !form.description, !form.price, !form.stars) {
            toast.error('Please Edit any field');
            return;
        }
        const updatedItems = [...items]; // Create a copy of the items array
        updatedItems[index] = { ...updatedItems[index], ...form }; // Update the specific item with the form data
        let playload = { index, form }
        dispatch(edititems(playload));
        setForm({ title: '', description: '', price: '', stars: '', imgurl: '' });
    };

    const handleDelete = (e, itemid) => {
        dispatch(deleteitem(itemid));
    };

    const handleAddToCart = (index) => {
        dispatch(addtocart(index))
    };


    return (
        <div className="home-page">
            <h1>Welcome to Ecommes</h1>
            <div className="item-list">
                {memoizedItems.map((item, index) => (
                    <div className="item-card" key={index}>
                        <div>
                            <img src={item.imgurl} alt={item.title} />
                        </div>
                        <div>
                            <h2
                                contentEditable={edit}
                                suppressContentEditableWarning
                                onBlur={(e) => setForm({ title: e.target.innerText, description: item.description, price: item.price, stars: item.stars, imgurl: item.imgurl })}
                            >
                                {item.title}
                            </h2>
                            <p
                                contentEditable={edit}
                                suppressContentEditableWarning
                                onBlur={(e) => setForm({ title: item.title, description: e.target.innerText, price: item.price, stars: item.stars, imgurl: item.imgurl })}
                            >
                                {item.description}
                            </p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ display: 'flex', alignItems: "center" }}>
                                    <p>Price:</p>
                                    <p
                                        contentEditable={edit}
                                        suppressContentEditableWarning
                                        onBlur={(e) => setForm({ title: item.title, description: item.description, price: e.target.innerText, stars: item.stars, imgurl: item.imgurl })}
                                    >
                                        {item.price}
                                    </p>
                                </span>
                                <p
                                    contentEditable={edit}
                                    suppressContentEditableWarning
                                    onBlur={(e) => setForm({ title: item.title, description: item.description, price: item.price, stars: e.target.innerText, imgurl: item.imgurl })}
                                >
                                    {Array.from({ length: item.stars }, (_, index) => (
                                        <span key={index} className="star" style={{ color: "#dcdc30", fontSize: "2rem" }}>&#9733;</span>
                                    ))}
                                </p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <button onClick={() => handleAddToCart(index)}>Add to Cart</button>
                                <div className="icon" style={{ background: 'blue' }} onClick={(e) => setEdit(!edit)}>
                                    {!edit ? <AiTwotoneEdit /> : <AiTwotoneSave onClick={(e) => handleEdit(e, index)} />}

                                </div>
                                <div className="icon" style={{ background: 'red' }} onClick={(e) => handleDelete(e, item.id)}>
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
