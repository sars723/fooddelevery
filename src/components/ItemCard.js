import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { actionType } from "./reducer";
import { useStateValue } from "./StateProvider";
import { Items } from "./data";
let cartData = [];
const ItemCard = ({ imgSrc, name, ratings, price, itemId }) => {
  const [isFavorite, setFavorite] = useState(false);
  const [currentValue, setCurrentValue] = useState(Math.floor(ratings));
  const [isCart, setIsCart] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    if (isCart) {
      console.log(isCart.price);
      setTotalPrice(isCart.price + totalPrice);
      cartData.push(isCart);
      dispatch({
        type: actionType.SET_CART,
        payload: cartData,
      });
      dispatch({
        type: actionType.SET_TOTAL,
        payload: totalPrice,
      });
    }
  }, [isCart]);
  const handleClick = (value) => {
    setCurrentValue(value);
  };
  return (
    <div className="itemCard" id={itemId}>
      <div
        className={isFavorite ? "active isFavorite" : "isFavorite"}
        onClick={() => setFavorite(!isFavorite)}
      >
        <Favorite />
      </div>
      <div className="imgBox">
        <img src={imgSrc} alt="" className="itemImg" />
      </div>
      <div className="itemContent">
        <h3 className="itemName">{name}</h3>
        <div className="bottom">
          <div className="ratings">
            {Array.apply(null, { length: 5 }).map((e, i) => (
              <i
                key={i}
                className={`rating ${currentValue > i ? "orange" : "gray"}`}
                onClick={() => handleClick(i + 1)}
              >
                <StarRounded />
              </i>
            ))}
            <h3 className="price">
              <span>$ </span> {price}
            </h3>
          </div>

          <i
            className="addToCart"
            onClick={() => setIsCart(Items.find((n) => n.id === itemId))}
          >
            <AddRounded />
          </i>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
