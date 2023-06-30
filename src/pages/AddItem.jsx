import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './AddItem.scss';

export default function AddItemForm() {
    const [form, setForm] = useState({ name: "", description: "", price: "", stars: "", imgurl: "" });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (!form.name || !form.description || !form.price || !form.stars || !form.imgurl) {
            toast.error('Please fill in all fields');
            return;
        }

        // Create new item object
        const newItem = {
            price: form.price,
            description: form.description,
            price: form.price,
            stars: form.stars,
            imgurl: form.imgurl,
        };

        // Pass the new item to the parent component
        // onAddItem(newItem);

        // Clear form fields
        setForm({ name: "", description: "", price: "", stars: "", imgurl: "" })
        toast.success("Item Add Successful")
    };

    return (
        <form className="add-item-form" onSubmit={handleSubmit}>
            <h2>Add Item</h2>
            <div className="form-group">
                <label htmlFor="item-name">Item Name:</label>
                <input
                    type="text"
                    id="item-name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
            </div>
            <div className="form-group">
                <label htmlFor="item-name">Description:</label>
                <input
                    type="text"
                    id="item-name"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                />
            </div>
            <div className="form-group">
                <label htmlFor="item-price">Item Price:</label>
                <input
                    type="text"
                    id="item-price"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                />
            </div>
            <div className="form-group">
                <label htmlFor="item-price">Rate out of 5</label>
                <input
                    type="text"
                    id="item-price"
                    value={form.stars}
                    onChange={(e) => setForm({ ...form, stars: e.target.value })}
                />
            </div>
            <div className="form-group">
                <label htmlFor="item-price">Img URL</label>
                <input
                    type="text"
                    id="item-price"
                    value={form.imgurl}
                    onChange={(e) => setForm({ ...form, imgurl: e.target.value })}
                />
            </div>
            <button type="submit">Add Item</button>
        </form>
    );
}
