import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import Basketitem from "./Basketitem";
import { useStateValue } from "./StateProvider";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.earticleblog.com%2Fwp-content%2Fuploads%2F2017%2F08%2Fgp-amazon-sale-banner-29062017.jpg&f=1&nofb=1"
          alt="offer-amazon"
        />

        <div>
          <h2 className="checkout__title"> Your Shopping Basket </h2>
          {basket.map((item) => (
            <Basketitem
            id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
