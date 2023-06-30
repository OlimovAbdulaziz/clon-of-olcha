import React from "react";
import "./ProductWrapper.css";

import {
    AiFillStar,
    AiOutlineHeart,
    AiOutlineShoppingCart,
    AiFillHeart,
    AiOutlineDelete
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToHeart, removeFromHeart } from "../../context/heart";
import { useSelector } from "react-redux";
import { addToCart } from '../../context/cart'
import { db } from "../../server";
import { deleteDoc, doc } from "firebase/firestore";
import { toggle } from "../../context/proReload";
import { toast } from "react-toastify";
function ProductWrapper({ data, admin }) {
    const dispatch = useDispatch();
    const heart = useSelector(s => s.heart.value)

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "products", id))
            .then((res) => {
                console.log(res);
                dispatch(toggle());
                toast.warning(`O'chirildi`);
            })
            .catch((err) => console.log(err));
    };
    return (
        <div className="products">
            {data?.map((item) => (
                <div key={item.id} className="card">
                    <div className="card__image">
                    <Link to={`/product/${item.id}`} state={item}><img src={item.url} alt="" /></Link>
                    </div>
                    <button onClick={() => dispatch(addToCart(item))} className="card__cart">
                        <AiOutlineShoppingCart />
                    </button>
                    <button className="card__heart">
                        {
                            heart.some(i => i.id === item.id) ?
                                <AiFillHeart onClick={() => dispatch(removeFromHeart(item))} style={{ color: "red" }} /> :
                                <AiOutlineHeart onClick={() => dispatch(addToHeart(item))} />
                        }

                    </button>
                    <div className="card__body">
                        <p className="card__title">{item.title}</p>
                        <p className="card__rating">
                            <AiFillStar style={{ color: "#008dff" }} />
                            <span>5.0 (585 baho)</span>
                        </p>
                        <div className="card__price">
                            <div>
                                <del>{Math.round(item.price * 1.5)} so'm</del>
                                <p>{item.price} so'm</p>
                            </div>
                        </div>
                        <div className="card__monthly">
                            <span>{Math.round((item.price * 1.44) / 12)} so'm/ 12 oy</span>
                        </div>
                        <br />
                        {admin ? (
                            <button
                                onClick={() => handleDelete(item.id)}
                                className="price__cart"
                            >
                                <AiOutlineDelete />
                            </button>
                        ) : (
                            <button onClick={() => dispatch(addToCart(item))} className="order__cart">Bir klikda olish</button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductWrapper;
