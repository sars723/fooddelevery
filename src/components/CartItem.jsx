import { AddRounded, RemoveRounded } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { Items } from "./data";
import { actionType } from "./reducer";
import { useStateValue } from "./StateProvider";
let cartItems = [];
const CartItem = ({ name, imgSrc, price, itemId }) => {
  const [qty, setQty] = useState(1);
  const [itemPrice, setItemPrice] = useState(price);
  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    cartItems = cart;
    setItemPrice(parseInt(qty) * parseFloat(price));
  }, [qty]);
  const updateQuantity = (action, itemId) => {
    if (action === "add") {
      setQty(qty + 1);
      /*  updatedItem = cart.filter((item) => item.id !== itemId);
      dispatch({
        type: actionType.SET_CART,
        payload: updatedItem,
      }); */
    } else {
      if (qty === 1) {
        cartItems.pop(itemId);
        dispatch({
          type: actionType.SET_CART,
          payload: cartItems,
        });
      }
      setQty(qty - 1);
      /*  let addedItem = Items.find((item) => item.id === itemId);
      cart.push(addedItem);
      dispatch({
        type: actionType.SET_CART,
        payload: cart,
      }); */
    }
  };

  return (
    <div className="cardItem">
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <div className="itemSection">
        <h2 className="itemName">{name}</h2>
        <div className="itemQuantity">
          <span>x{qty}</span>
          <div className="quantity">
            <RemoveRounded
              className="itemRemove"
              onClick={() => updateQuantity("remove", itemId)}
            />
            <AddRounded
              className="itemAdd"
              onClick={() => updateQuantity("add", itemId)}
            />
          </div>
        </div>
      </div>
      <p className="itemPrice">
        <span className="dolorSign">$</span>
        <span className="itemPriceValue">{itemPrice}</span>
      </p>
    </div>
  );
};

export default CartItem;
