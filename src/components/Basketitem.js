import React from "react";
import { useStateValue } from "./StateProvider";
import "./Basketitem.css";

const Basketitem = ({ id, image, title, price, rating }) => {
    
    const [{basket}, dispatch] = useStateValue();
    const checkoutProduct__delete = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id,
        })
    }
  
  return (
    <div className="checkoutProduct">
        <img className="checkoutProduct__image" src={image} alt="product-checkout" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title"> {title} </p> 
        <p className="checkoutProduct__price"> <small>$</small> <strong> {price} </strong> </p> 
        <p className="checkoutProduct__rating">
            {Array(rating).fill().map((_,i) =>(
                <p>🌟</p>
            ))}
        </p> 

        <button className="checkoutProduct__button" onClick={checkoutProduct__delete}> Remove from basket </button>
        </div>
    </div>
    
  );
};

export default Basketitem;
