import './Cart.scss'
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { removetocard } from '../store/store';
export default function Cart() {
    const carts = useSelector((state) => state.reducer.cart);
    const dispatch = useDispatch();

    const handleDelete = (e, index) => {
        e.preventDefault();
        dispatch(removetocard(index));
    }
    return (
        <div className="cart">
            <h2>Your Cart</h2>
            <div className="cart-items">
                {/* Cart Items */}
                {carts.map((item, index) => (
                    <div className="cart-item" key={index}>
                        <img src={item.imgurl} alt={item.title} className="item-image" />
                        <div className="item-details">
                            <h3 className="item-name">{item.title}</h3>
                            <p className="item-description">{item.description}</p>
                            <p className="item-price">{item.price}</p>
                            <div className="item-stars">
                                {Array.from({ length: item.stars }, (_, index) => (
                                    <span key={index} className="star">&#9733;</span>
                                ))}
                            </div>
                            <button className="remove-item" onClick={(e) => handleDelete(e, index)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
