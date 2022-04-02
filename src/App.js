import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MenuContainer from "./components/MenuContainer";
import {
  AccountBalanceWalletRounded,
  Category,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";
import BannerName from "./components/BannerName";
import SubMenuContainer from "./components/SubMenuContainer";
import MenuCard from "./components/MenuCard";
import { MenuItems, Items } from "./components/data";
import ItemCard from "./components/ItemCard";
import DebitCard from "./components/DebitCard";
import CartItem from "./components/CartItem";
import { useStateValue } from "./components/StateProvider";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId === "buger01")
  );
  const [{ cart, total }, dispatch] = useStateValue();
  useEffect(() => {
    console.log(total);
    const menuLi = document.querySelectorAll("#menu li");
    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

    //MenuCard Active toggle
    const menuCards = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");
    function setMenuCardActive() {
      menuCards.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    menuCards.forEach((n) => n.addEventListener("click", setMenuCardActive));
  }, [isMainData, cart, total]);

  //set main dish item on filter
  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId === itemId));
  };
  return (
    <div className="App">
      {/* header */}
      <Header />
      {/* main */}
      <main>
        <div className="mainContainer">
          <div className="banner">
            <BannerName link={"#"} name={"sara"} discount={"20"} />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337"
              alt=""
              className="deliveryPic"
            />
          </div>

          {/* dishContainer */}
          <div className="dishContainer">
            <div className="menuCard">
              <SubMenuContainer name={"Menu Category"} />
            </div>
            <div className="rowContainer">
              {MenuItems &&
                MenuItems.map((data) => (
                  <div key={data.id} onClick={() => setData(data.itemId)}>
                    <MenuCard
                      imgSrc={data.imgSrc}
                      itemId={data.id}
                      name={data.name}
                      isActive={data.id == "1" ? true : false}
                    />
                  </div>
                ))}
            </div>
            <div className="dishItemContainer">
              {isMainData &&
                isMainData.map((data) => (
                  <ItemCard
                    key={data.id}
                    itemId={data.id}
                    imgSrc={data.imgSrc}
                    name={data.name}
                    ratings={data.ratings}
                    price={data.price}
                  />
                ))}
            </div>
          </div>

          <div className="rightMenu">
            <div className="debitCardContainer">
              <div className="debitCard">
                <DebitCard />
              </div>
            </div>

            {!cart ? (
              <div></div>
            ) : (
              <div className="cartCheckOutContainer">
                {" "}
                <SubMenuContainer name={"carts Items"} />
                <div className="cartContainer">
                  <div className="cardItems">
                    {cart &&
                      cart.map((data) => (
                        <CartItem
                          key={data.id}
                          name={data.name}
                          imgSrc={data.imgSrc}
                          /* qty={"4"} */
                          price={data.price}
                        />
                      ))}
                  </div>
                </div>
              </div>
            )}

            <div className="totalSection">
              <h3>Total</h3>
              <p>
                <span>$ </span>
                {totalPrice}
              </p>
            </div>
            <button className="checkOut">Check Out</button>
          </div>
        </div>
      </main>
      {/* bottom */}
      <div className="bottomMenu">
        <ul id="menu">
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<HomeRounded />}  /* isHome *//>
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<Chat />}  />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<AccountBalanceWalletRounded />}  />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<Favorite />} />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<SummarizeRounded />}  />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<Settings />}  />
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
